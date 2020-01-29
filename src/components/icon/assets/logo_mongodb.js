import React from 'react';

const EuiIconLogoMongodb = ({ title, titleId, ...props }) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none">
      <path
        fill="#FFF"
        d="M16.844 31.847l-.847-.29s.104-4.315-1.445-4.625c-1.032-1.198.165-50.8 3.882-.165 0 0-1.28.64-1.507 1.735-.248 1.074-.083 3.345-.083 3.345z"
      />
      <path
        fill="#A6A385"
        d="M16.844 31.847l-.847-.29s.104-4.315-1.445-4.625c-1.032-1.198.165-50.8 3.882-.165 0 0-1.28.64-1.507 1.735-.248 1.074-.083 3.345-.083 3.345z"
      />
      <path
        fill="#FFF"
        d="M17.299 27.676s7.413-4.874 5.678-15.013c-1.672-7.372-5.616-9.788-6.05-10.718-.475-.66-.93-1.817-.93-1.817l.31 20.506c0 .02-.64 6.278.992 7.042"
      />
      <path
        fill="#499D4A"
        d="M17.299 27.676s7.413-4.874 5.678-15.013c-1.672-7.372-5.616-9.788-6.05-10.718-.475-.66-.93-1.817-.93-1.817l.31 20.506c0 .02-.64 6.278.992 7.042"
      />
      <path
        fill="#FFF"
        d="M15.564 27.944s-6.96-4.75-6.546-13.113c.392-8.363 5.307-12.473 6.257-13.216.62-.66.64-.909.681-1.57.434.93.351 13.898.413 15.426.186 5.886-.33 11.358-.805 12.473z"
      />
      <path
        fill="#58AA50"
        d="M15.564 27.944s-6.96-4.75-6.546-13.113c.392-8.363 5.307-12.473 6.257-13.216.62-.66.64-.909.681-1.57.434.93.351 13.898.413 15.426.186 5.886-.33 11.358-.805 12.473z"
      />
    </g>
  </svg>
);

export const icon = EuiIconLogoMongodb;
