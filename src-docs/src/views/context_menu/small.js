import React, { useState } from 'react';

import {
  EuiButton,
  EuiContextMenuPanel,
  EuiContextMenuItem,
  EuiPopover,
} from '../../../../src/components';

export default () => {
  const [isPopoverOpen, setPopover] = useState(false);

  const onButtonClick = () => {
    setPopover(!isPopoverOpen);
  };

  const closePopover = () => {
    setPopover(false);
  };

  const items = [
    <EuiContextMenuItem
      key="copy"
      icon="copy"
      onClick={() => {
        closePopover();
      }}>
      Copy
    </EuiContextMenuItem>,
    <EuiContextMenuItem
      key="edit"
      icon="pencil"
      onClick={() => {
        closePopover();
      }}>
      Edit
    </EuiContextMenuItem>,
  ];

  const button = (
    <EuiButton iconType="arrowDown" iconSide="right" onClick={onButtonClick}>
      Small context menu
    </EuiButton>
  );

  return (
    <EuiPopover
      id="contextMenuExample"
      button={button}
      isOpen={isPopoverOpen}
      closePopover={closePopover}
      panelPaddingSize="none"
      anchorPosition="downLeft">
      <EuiContextMenuPanel items={items} size="s" />
    </EuiPopover>
  );
};
