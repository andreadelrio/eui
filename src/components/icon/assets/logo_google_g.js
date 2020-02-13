import React from 'react';

const EuiIconLogoGoogleG = ({ title, titleId, ...props }) => (
  <svg
    width={349}
    height={357}
    viewBox="0 0 349 357"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <path
        id="google-favicon-a"
        d="M170.902 36.57c0-12.622-1.132-24.76-3.237-36.411H.011v68.858h95.803c-4.127 22.251-16.669 41.105-35.521 53.727v44.665h57.529c33.661-30.991 53.08-76.626 53.08-130.839z"
      />
      <path
        id="google-favicon-c"
        d="M160.011 144.536c48.063 0 88.359-15.94 117.811-43.127l-57.529-44.665c-15.941 10.681-36.331 16.992-60.282 16.992-46.364 0-85.608-31.314-99.605-73.39H.934v46.122c29.291 58.178 89.49 98.068 159.077 98.068z"
      />
      <path
        id="google-favicon-e"
        d="M78.406 114.346c-3.561-10.68-5.584-22.089-5.584-33.822 0-11.732 2.023-23.141 5.584-33.822V.582H18.934C6.878 24.613 0 51.8 0 80.524c0 28.725 6.878 55.913 18.934 79.944l59.472-46.122z"
      />
      <path
        id="google-favicon-g"
        d="M160.011 71.313c26.135 0 49.601 8.982 68.049 26.621l51.057-51.057C248.288 18.153 207.993.513 160.011.513 90.424.513 30.225 40.404.934 98.582l59.472 46.12c13.997-42.075 53.241-73.389 99.605-73.389z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(178 146)">
        <mask id="google-favicon-b" fill="#fff">
          <use xlinkHref="#google-favicon-a" />
        </mask>
        <path
          fill="#4285F4"
          mask="url(#google-favicon-b)"
          d="M.011 167.409h170.891V.159H.011z"
        />
      </g>
      <g transform="translate(18 212)">
        <mask id="google-favicon-d" fill="#fff">
          <use xlinkHref="#google-favicon-c" />
        </mask>
        <path
          fill="#34A853"
          mask="url(#google-favicon-d)"
          d="M.934 144.536h276.888V.346H.934z"
        />
      </g>
      <g transform="translate(0 98)">
        <mask id="google-favicon-f" fill="#fff">
          <use xlinkHref="#google-favicon-e" />
        </mask>
        <path
          fill="#FBBC04"
          mask="url(#google-favicon-f)"
          d="M0 160.468h78.406V.582H0z"
        />
      </g>
      <g transform="translate(18)">
        <mask id="google-favicon-h" fill="#fff">
          <use xlinkHref="#google-favicon-g" />
        </mask>
        <path
          fill="#EA4335"
          mask="url(#google-favicon-h)"
          d="M.934 144.702h278.183V.513H.934z"
        />
      </g>
    </g>
  </svg>
);

export const icon = EuiIconLogoGoogleG;
