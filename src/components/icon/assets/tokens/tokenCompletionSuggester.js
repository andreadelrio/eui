import React from 'react';

const EuiIconTokenCompSuggester = ({ title, titleId, ...props }) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 4c0-.55228.44772-1 1-1h8c.5523 0 1 .44772 1 1v5.99578c0 .55232-.4477 1.00002-1 1.00002h-1.661L7.4 13.2c-.16481.1236-.4.006-.4-.2v-2.0042H4c-.55228 0-1-.4477-1-1.00002V4zm1.5 1c0-.27614.22386-.5.5-.5h6c.2761 0 .5.22386.5.5v4c0 .27614-.2239.5-.5.5h-.9L8 11V9.5H5c-.27614 0-.5-.22386-.5-.5V5z"
      />
      <path d="M6.75 6c-.55228 0-1 .44772-1 1s.44772 1 1 1 1-.44772 1-1-.44772-1-1-1zM9.25 6c-.55228 0-1 .44772-1 1s.44772 1 1 1 1-.44772 1-1-.44772-1-1-1z" />
    </g>
  </svg>
);

export const icon = EuiIconTokenCompSuggester;
