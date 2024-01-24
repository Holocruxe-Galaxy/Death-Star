const NoButton = () => {
  return (
    <svg
      width="20"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_849_49966)">
        <path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40Z"
          fill="#CC3333"
        />
        <path
          d="M18.7 38.4C29.0277 38.4 37.4 30.0277 37.4 19.7C37.4 9.37227 29.0277 1 18.7 1C8.37227 1 0 9.37227 0 19.7C0 30.0277 8.37227 38.4 18.7 38.4Z"
          fill="#F44336"
        />
        <path
          d="M6.6671 8.5666C8.1671 6.19994 11.3671 4.23327 14.7004 3.63327C15.5338 3.49993 16.3671 3.43327 17.0671 3.69994C17.6004 3.89994 18.0338 4.39993 17.7338 4.9666C17.5004 5.43327 16.8671 5.63327 16.3671 5.79993C13.2402 6.83175 10.5439 8.87159 8.70044 11.5999C8.03377 12.5999 7.03377 15.3666 5.80044 14.6666C4.50044 13.8999 4.7671 11.4999 6.6671 8.5666Z"
          fill="#FF8A80"
        />
        <path
          d="M33.333 22.6673H6.66634C5.92967 22.6673 5.33301 22.0707 5.33301 21.334V18.6673C5.33301 17.9307 5.92967 17.334 6.66634 17.334H33.333C34.0697 17.334 34.6663 17.9307 34.6663 18.6673V21.334C34.6663 22.0707 34.0697 22.6673 33.333 22.6673Z"
          fill="#FAFAFA"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_849_49966"
          x="0"
          y="0"
          width="48"
          height="48"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="4" dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_849_49966"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_849_49966"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default NoButton;
