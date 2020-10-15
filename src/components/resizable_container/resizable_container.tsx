/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React, {
  ReactNode,
  ReactElement,
  useRef,
  useCallback,
  CSSProperties,
  FunctionComponent,
  HTMLAttributes,
  ComponentType,
  useEffect,
} from 'react';
import classNames from 'classnames';

import { CommonProps } from '../common';
import { keys } from '../../services';
import {
  EuiResizableContainerContextProvider,
  // EuiResizablePanelContextProvider,
} from './context';
import {
  EuiResizableButtonProps,
  // useEuiResizableButton,
  euiResizableButtonWithControls,
} from './resizable_button';
import {
  EuiResizablePanelProps,
  // EuiResizablePanel,
  euiResizablePanelWithControls,
} from './resizable_panel';
import { useContainerCallbacks, getPosition } from './helpers';
import {
  EuiResizableButtonMouseEvent,
  EuiResizableButtonKeyDownEvent,
  EuiResizableContainerState,
  EuiResizableContainerActions,
} from './types';

const containerDirections = {
  vertical: 'vertical',
  horizontal: 'horizontal',
};

export interface EuiResizableContainerProps
  extends HTMLAttributes<HTMLDivElement>,
    CommonProps {
  /**
   * Specify the container direction
   */
  direction?: keyof typeof containerDirections;
  /**
   * Pure function which accepts Panel and Resizer components in arguments
   * and returns a component tree
   */
  children: (
    Panel: ComponentType<EuiResizablePanelProps>,
    Resizer: ComponentType<EuiResizableButtonProps>,
    actions: EuiResizableContainerActions
  ) => ReactNode;
  /**
   * Pure function which accepts an object where keys are IDs of panels, which sizes were changed,
   * and values are actual sizes in percents
   */
  onPanelWidthChange?: ({}: { [key: string]: number }) => any;
  style?: CSSProperties;
}

const initialState: EuiResizableContainerState = {
  isDragging: false,
  currentResizerPos: -1,
  prevPanelId: null,
  nextPanelId: null,
  resizersSize: 0,
  panels: {},
  resizers: {},
  resizerHasFocus: null,
};

export const EuiResizableContainer: FunctionComponent<EuiResizableContainerProps> = ({
  direction = 'horizontal',
  children,
  className,
  onPanelWidthChange,
  ...rest
}) => {
  // const actions = useRef<EuiResizableContainerActions>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isHorizontal = direction === containerDirections.horizontal;

  const classes = classNames(
    'euiResizableContainer',
    {
      'euiResizableContainer--vertical': !isHorizontal,
      'euiResizableContainer--horizontal': isHorizontal,
    },
    className
  );

  const [actions, reducerState] = useContainerCallbacks({
    initialState: { ...initialState, isHorizontal },
    containerRef,
    onPanelWidthChange,
  });

  useEffect(() => {
    console.log(actions);
  }, [actions]);

  const onMouseDown = useCallback(
    (event: EuiResizableButtonMouseEvent) => {
      const currentTarget = event.currentTarget;
      const prevPanelId = currentTarget.previousElementSibling!.id;
      const nextPanelId = currentTarget.nextElementSibling!.id;
      const position = getPosition(event, isHorizontal);
      actions.dragStart({ position, prevPanelId, nextPanelId });
    },
    [actions, isHorizontal]
  );

  const onMouseMove = useCallback(
    (event: React.MouseEvent | React.TouchEvent) => {
      if (!reducerState.prevPanelId || !reducerState.nextPanelId) return;
      const position = getPosition(event, isHorizontal);
      actions.dragMove({
        position,
        prevPanelId: reducerState.prevPanelId,
        nextPanelId: reducerState.nextPanelId,
      });
    },
    [actions, isHorizontal, reducerState.prevPanelId, reducerState.nextPanelId]
  );

  const onKeyDown = useCallback(
    (event: EuiResizableButtonKeyDownEvent) => {
      const { key, currentTarget } = event;
      const shouldResizeHorizontalPanel =
        isHorizontal && (key === keys.ARROW_LEFT || key === keys.ARROW_RIGHT);
      const shouldResizeVerticalPanel =
        !isHorizontal && (key === keys.ARROW_UP || key === keys.ARROW_DOWN);
      const prevPanelId = currentTarget.previousElementSibling!.id;
      const nextPanelId = currentTarget.nextElementSibling!.id;
      let direction;
      if (key === keys.ARROW_DOWN || key === keys.ARROW_RIGHT) {
        direction = 'forward';
      }
      if (key === keys.ARROW_UP || key === keys.ARROW_LEFT) {
        direction = 'backward';
      }

      if (
        direction === 'forward' ||
        (direction === 'backward' &&
          (shouldResizeHorizontalPanel || shouldResizeVerticalPanel) &&
          prevPanelId &&
          nextPanelId)
      ) {
        event.preventDefault();
        actions.keyMove({ direction, prevPanelId, nextPanelId });
      }
    },
    [actions, isHorizontal]
  );

  const onMouseUp = useCallback(() => {
    actions.reset();
  }, [actions]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const EuiResizableButton = useCallback(
    euiResizableButtonWithControls({
      onKeyDown,
      onMouseDown,
      onTouchStart: onMouseDown,
      onFocus: actions.resizerFocus,
      onBlur: actions.resizerBlur,
      isHorizontal,
      registration: {
        register: actions.registerResizer,
        deregister: actions.deregisterResizer,
      },
    }),
    [actions, isHorizontal]
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const EuiResizablePanel = useCallback(
    euiResizablePanelWithControls({
      isHorizontal,
      registration: {
        register: actions.registerPanel,
        deregister: actions.deregisterPanel,
      },
      onToggleCollapsed: (panelId: string, options: any) =>
        actions.panelToggle({ options, panelId }),
    }),
    [actions, isHorizontal]
  );

  const render = () => {
    const content = children(EuiResizablePanel, EuiResizableButton, actions);
    const modes = React.isValidElement(content)
      ? content.props.children.map(
          (el: ReactElement) => el.props.mode || 'default'
        )
      : null;
    if (
      modes &&
      (['collapsible', 'main'].every((i) => modes.includes(i)) ||
        modes.every((i?: string) => i === 'default'))
    ) {
      return content;
    } else {
      throw new Error(
        'Both `collapsible` and `main` mode panels are required.'
      );
    }
  };

  return (
    <EuiResizableContainerContextProvider
      registry={{
        panels: reducerState.panels,
        resizers: reducerState.resizers,
        resizerHasFocus: reducerState.resizerHasFocus,
      }}>
      {/* <EuiResizablePanelContextProvider
        registry={{
          isHorizontal,
          registration: {
            register: actions.registerPanel,
            deregister: actions.deregisterPanel,
          },
          onToggleCollapsed: (panelId: string, options: any) =>
            actions.panelToggle({ options, panelId }),
        }}> */}
      <div
        className={classes}
        ref={containerRef}
        onMouseMove={reducerState.isDragging ? onMouseMove : undefined}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchMove={onMouseMove}
        onTouchEnd={onMouseUp}
        {...rest}>
        {
          // TODO: Maybe just a subset of actions?
          render()
        }
      </div>
      {/* </EuiResizablePanelContextProvider> */}
    </EuiResizableContainerContextProvider>
  );
};
