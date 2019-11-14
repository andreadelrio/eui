import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

import { CommonProps } from '../../common';

import { EuiFlexGroup, EuiFlexItem } from '../../flex';

export type EuiHeaderAlertProps = CommonProps &
  Omit<HTMLAttributes<HTMLDivElement>, 'title'> & {
    /**
     * Adds a link to the alert.
     */
    action?: ReactNode;
    date: ReactNode;
    text?: ReactNode;
    title: ReactNode;
    /**
     * Accepts an `EuiBadge` that displays on the alert
     */
    badge?: ReactNode;
  };

export const EuiHeaderAlert: FunctionComponent<EuiHeaderAlertProps> = ({
  action,
  className,
  date,
  text,
  title,
  badge,
  ...rest
}) => {
  const classes = classNames('euiHeaderAlert', className);

  return (
    <div className={classes} {...rest}>
      <EuiFlexGroup justifyContent="spaceBetween">
        <EuiFlexItem>
          <div className="euiHeaderAlert__date">{date}</div>
        </EuiFlexItem>
        {badge ? <EuiFlexItem grow={false}>{badge}</EuiFlexItem> : undefined}
      </EuiFlexGroup>

      <div className="euiHeaderAlert__title">{title}</div>
      <div className="euiHeaderAlert__text">{text}</div>
      {action ? (
        <div className="euiHeaderAlert__action euiLink">{action}</div>
      ) : (
        undefined
      )}
    </div>
  );
};
