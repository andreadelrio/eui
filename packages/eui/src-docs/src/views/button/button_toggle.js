import React, { useState } from 'react';
import './StarButton.css';
import { EuiButtonEmpty } from '../../../../src/components';

export default () => {
  const [toggle1On, setToggle1On] = useState(false);

  return (
    <EuiButtonEmpty
      size="s"
      className={toggle1On ? 'star active' : 'star'}
      iconType={toggle1On ? 'starFilled' : 'starEmpty'}
      onClick={() => {
        setToggle1On((isOn) => !isOn);
      }}
    >
      <svg height="40" width="40" className="stardust">
        <circle
          cx="20"
          cy="20"
          r="8"
          stroke="#0077CC"
          stroke-width="4"
          fill="transparent"
        />
      </svg>
    </EuiButtonEmpty>
  );
};
