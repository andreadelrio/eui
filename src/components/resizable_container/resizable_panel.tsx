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
  CSSProperties,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  FunctionComponent,
  HTMLAttributes,
} from 'react';
import classNames from 'classnames';

import { CommonProps } from '../common';
import { useEuiResizableContainerContext } from './context';
import { htmlIdGenerator } from '../../services';
import { EuiButtonIcon } from '../button';
import { IconType } from '../icon';
import { useEuiI18n } from '../i18n';
import { EuiResizablePanelController } from './types';

interface ToggleOptions {
  notCollapsedIcon: IconType;
  collapsedIcon: IconType;
  className?: string;
}

export interface EuiResizablePanelControls {
  isHorizontal: boolean;
  registration: {
    register: (panel: EuiResizablePanelController) => void;
    deregister: (panelId: EuiResizablePanelController['id']) => void;
  };
  onToggleCollapsed: (
    panelId: EuiResizablePanelController['id'],
    options: any
  ) => void;
}

export interface EuiResizablePanelProps
  extends HTMLAttributes<HTMLDivElement>,
    CommonProps,
    Partial<EuiResizablePanelControls> {
  /**
   * Specify minimum panel size in pixels or percents,
   * for example "300px" or "30%"
   */
  minSize?: string;
  /**
   * Specify id of panel if you want to track panel size in "onPanelWidthChange" callback
   */
  id?: string;
  /**
   * Initial size of the panel in percents
   * Specify this prop if you don't need to handle the panel size from outside
   */
  initialSize?: number;

  /**
   * Size of the panel in percents.
   * Specify this prop if you want to control the size from outside, the panel will ignore the "initialSize"
   */
  size?: number;

  /**
   * Add Eui scroll and overflow for the panel
   */
  scrollable?: boolean;

  /**
   * ReactNode to render as this component's content
   */
  children: ReactNode;

  /**
   * Custom CSS properties
   */
  style?: CSSProperties;
  /*
   * Use this to add a toggle button to a `EuiResizablePanel`. If true, default button icons are used
   */
  // toggle?: boolean | ToggleOptions;
  mode?: 'collapsible' | 'main';
}

const toggleDefault: ToggleOptions = {
  collapsedIcon: 'menuRight',
  notCollapsedIcon: 'menuLeft',
};

const getPosition = (ref: HTMLDivElement) => {
  let position: 'first' | 'middle' | 'last' = 'middle';
  if (ref.matches(':first-of-type')) {
    position = 'first';
  } else if (ref.matches(':last-of-type')) {
    position = 'last';
  }
  return position;
};

const generatePanelId = htmlIdGenerator('resizable-panel');

export const EuiResizablePanel: FunctionComponent<EuiResizablePanelProps> = ({
  children,
  className,
  id,
  isHorizontal,
  size,
  initialSize,
  minSize = '0px',
  scrollable = true,
  style = {},
  mode,
  registration,
  onToggleCollapsed,
  ...rest
}) => {
  const {
    registry: { panels, resizerHasFocus } = {
      panels: {},
      resizerHasFocus: null,
    },
  } = useEuiResizableContainerContext();
  const divRef = useRef<HTMLDivElement>(null);
  const panelId = useRef(id || generatePanelId());
  const resizerIds = useRef<string[]>([]);
  const innerSize = useMemo(
    () =>
      (panels[panelId.current] && panels[panelId.current].size) ??
      (initialSize || 0),
    [panels, initialSize]
  );
  const isCollapsed = useMemo(
    () =>
      (panels[panelId.current] && panels[panelId.current].isCollapsed) || false,
    [panels]
  );
  const position = useMemo(
    () =>
      (panels[panelId.current] && panels[panelId.current].position) || 'middle',
    [panels]
  );
  const isCollapsible = mode === 'collapsible';
  const direction = useMemo(() => {
    let direction = null;
    if (position === 'middle' && isCollapsible) {
      const ids = Object.keys(panels);
      const index = ids.indexOf(panelId.current);
      const prevPanelMode = panels[ids[index - 1]]
        ? panels[ids[index - 1]].mode
        : null;
      const nextPanelMode = panels[ids[index + 1]]
        ? panels[ids[index + 1]].mode
        : null;
      // Intentional, preferential order
      if (prevPanelMode === 'main') {
        direction = 'right';
      } else if (nextPanelMode === 'main') {
        direction = 'left';
      } else if (prevPanelMode && prevPanelMode !== 'collapsible') {
        direction = 'right';
      } else if (nextPanelMode && nextPanelMode !== 'collapsible') {
        direction = 'left';
      }
    }
    return direction;
  }, [isCollapsible, position, panels]);

  const focusedResizer = useMemo(() => resizerHasFocus, [resizerHasFocus]);

  const classes = classNames(
    {
      euiResizablePanel: scrollable,
    },
    {
      'euiResizablePanel--collapsible': isCollapsible,
      'euiResizablePanel--collapsed': isCollapsed,
    },
    `euiResizablePanel--${position}`,
    className
  );

  let dimensions;

  if (size) {
    dimensions = {
      width: isHorizontal ? `${size}%` : '100%',
      height: isHorizontal ? 'auto' : `${size}%`,
    };
  } else {
    dimensions = {
      width: isHorizontal ? `${innerSize}%` : '100%',
      height: isHorizontal ? 'auto' : `${innerSize}%`,
    };
  }

  const styles = {
    ...style,
    ...dimensions,
    minWidth: isHorizontal ? minSize : 0,
    minHeight: isHorizontal ? 0 : minSize,
  };

  useEffect(() => {
    if (!registration) return;
    const id = panelId.current;
    const initsize = size ?? (initialSize || 0);
    resizerIds.current = [
      divRef.current!.previousElementSibling
        ? divRef.current!.previousElementSibling.id
        : '',
      divRef.current!.nextElementSibling
        ? divRef.current!.nextElementSibling!.id
        : '',
    ];
    registration.register({
      id,
      size: initsize,
      prevSize: initsize,
      // TODO: Maybe just store the ref instead?
      getSizePx() {
        return isHorizontal
          ? divRef.current!.getBoundingClientRect().width
          : divRef.current!.getBoundingClientRect().height;
      },
      minSize,
      mode,
      isCollapsed: false,
      position: getPosition(divRef.current!),
    });
    return () => {
      registration.deregister(id);
    };
  }, [initialSize, isHorizontal, minSize, size, registration, mode]);

  const onClickCollapse = (direction: any) => {
    onToggleCollapsed &&
      onToggleCollapsed(panelId.current, {
        direction,
      });
  };

  // Use the default object if they simply passed `true` for toggle
  const toggleObject =
    typeof mode === 'object' ? { ...toggleDefault, mode } : toggleDefault;

  const toggleButtonClasses = classNames(
    'euiResizablePanel__toggleButton',
    toggleObject && toggleObject.className
  );

  const toggleButtonAriaLabel = useEuiI18n(
    'euiResizablePanel.toggleButtonAriaLabel',
    'Press to toggle this panel'
  );

  return (
    <div
      className={classes}
      id={panelId.current}
      ref={divRef}
      style={styles}
      {...rest}>
      {isCollapsible &&
      (position === 'last' ||
        (position === 'middle' && direction === 'right')) ? (
        <EuiButtonIcon
          color="text"
          className={classNames(
            toggleButtonClasses,
            'euiResizablePanel__toggleButton--left',
            {
              'euiResizablePanel__toggleButton--focused':
                focusedResizer === resizerIds.current[0],
            }
          )}
          aria-label={toggleButtonAriaLabel}
          iconType={
            isCollapsed
              ? toggleObject.notCollapsedIcon
              : toggleObject.collapsedIcon
          }
          onClick={() => onClickCollapse('right')}
        />
      ) : null}
      <div className="euiResizablePanel__content">{children}</div>
      {isCollapsible &&
      (position === 'first' ||
        (position === 'middle' && direction === 'left')) ? (
        <EuiButtonIcon
          color="text"
          className={classNames(
            toggleButtonClasses,
            'euiResizablePanel__toggleButton--right',
            {
              'euiResizablePanel__toggleButton--focused':
                focusedResizer === resizerIds.current[1],
            }
          )}
          aria-label={toggleButtonAriaLabel}
          iconType={
            isCollapsed
              ? toggleObject.collapsedIcon
              : toggleObject.notCollapsedIcon
          }
          onClick={() => onClickCollapse('left')}
        />
      ) : null}
    </div>
  );
};

export function euiResizablePanelWithControls(
  controls: EuiResizablePanelControls
) {
  return (props: EuiResizablePanelProps) => (
    <EuiResizablePanel {...controls} {...props} />
  );
}
