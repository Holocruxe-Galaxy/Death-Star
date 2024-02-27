const YesButton = () => {
  return (
    <svg width="19" height="50" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_849_49960)">
        <g filter="url(#filter1_i_849_49960)">
          <path
            d="M21 41C26.5228 41 31.5228 38.7614 35.1421 35.1421C38.7614 31.5228 41 26.5228 41 21C41 15.4772 38.7614 10.4772 35.1421 6.85786C31.5228 3.23858 26.5228 1 21 1C15.4772 1 10.4772 3.23858 6.85786 6.85786C3.23858 10.4772 1 15.4772 1 21C1 26.5228 3.23858 31.5228 6.85786 35.1421C10.4772 38.7614 15.4772 41 21 41Z"
            fill="#010032"
          />
        </g>
        <path
          d="M21 41C26.5228 41 31.5228 38.7614 35.1421 35.1421C38.7614 31.5228 41 26.5228 41 21C41 15.4772 38.7614 10.4772 35.1421 6.85786C31.5228 3.23858 26.5228 1 21 1C15.4772 1 10.4772 3.23858 6.85786 6.85786C3.23858 10.4772 1 15.4772 1 21C1 26.5228 3.23858 31.5228 6.85786 35.1421C10.4772 38.7614 15.4772 41 21 41Z"
          stroke="#00FFED"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M13 21L19 27L31 15" stroke="#00FFED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <filter
          id="filter0_d_849_49960"
          x="0"
          y="0"
          width="50"
          height="50"
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
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_849_49960" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_849_49960" result="shape" />
        </filter>
        <filter
          id="filter1_i_849_49960"
          x="0"
          y="0"
          width="46"
          height="46"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="4" dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_849_49960" />
        </filter>
      </defs>
    </svg>
  );
};

export default YesButton;
