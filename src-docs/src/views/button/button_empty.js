import React from 'react';

import {
  EuiButtonEmpty,
  EuiFlexGroup,
  EuiFlexItem,
} from '../../../../src/components/';

const buttons = [
  'primary',
  'secondary',
  'warning',
  'danger',
  'text',
  'disabled',
];

export default () => (
  <div>
    {buttons.map((value) => (
      <>
        <EuiFlexGroup gutterSize="s" alignItems="center">
          <EuiFlexItem grow={false}>
            <EuiButtonEmpty
              style={{
                textTransform: 'capitalize',
              }}
              isDisabled={value === 'disabled' ? true : false}
              color={value}
              onClick={() => {}}>
              {value}
            </EuiButtonEmpty>
          </EuiFlexItem>

          <EuiFlexItem grow={false}>
            <EuiButtonEmpty
              isDisabled={value === 'disabled' ? true : false}
              color={value}
              size="s"
              onClick={() => {}}>
              small
            </EuiButtonEmpty>
          </EuiFlexItem>

          <EuiFlexItem grow={false}>
            <EuiButtonEmpty
              isDisabled={value === 'disabled' ? true : false}
              color={value}
              size="xs"
              onClick={() => {}}>
              extra small
            </EuiButtonEmpty>
          </EuiFlexItem>
        </EuiFlexGroup>
      </>
    ))}

    <EuiFlexGroup gutterSize="s" alignItems="center">
      <EuiFlexItem grow={false}>
        <EuiButtonEmpty onClick={() => {}} iconType="arrowDown">
          arrowDown
        </EuiButtonEmpty>
      </EuiFlexItem>

      <EuiFlexItem grow={false}>
        <EuiButtonEmpty
          onClick={() => {}}
          iconType="arrowDown"
          iconSide="right">
          arrowDown right
        </EuiButtonEmpty>
      </EuiFlexItem>
    </EuiFlexGroup>

    <EuiFlexGroup gutterSize="s" alignItems="center">
      <EuiFlexItem grow={false}>
        <EuiButtonEmpty onClick={() => {}} isLoading>
          Loading
        </EuiButtonEmpty>
      </EuiFlexItem>

      <EuiFlexItem grow={false}>
        <EuiButtonEmpty onClick={() => {}} isLoading iconSide="right">
          Loading
        </EuiButtonEmpty>
      </EuiFlexItem>
    </EuiFlexGroup>
  </div>
);
