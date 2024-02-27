const IconEmojiButton = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="48" viewBox="0 0 48 48" fill="none">
      <g filter="url(#filter0_di_849_49992)">
        <path
          d="M24 40C35.0457 40 44 31.0457 44 20C44 8.95431 35.0457 0 24 0C12.9543 0 4 8.95431 4 20C4 31.0457 12.9543 40 24 40Z"
          fill="#FFDD67"
        />
        <path
          d="M16.3333 18.3991C18.1743 18.3991 19.6667 16.9067 19.6667 15.0658C19.6667 13.2248 18.1743 11.7324 16.3333 11.7324C14.4924 11.7324 13 13.2248 13 15.0658C13 16.9067 14.4924 18.3991 16.3333 18.3991Z"
          fill="#664E27"
        />
        <path
          d="M31.6663 18.3991C33.5073 18.3991 34.9997 16.9067 34.9997 15.0658C34.9997 13.2248 33.5073 11.7324 31.6663 11.7324C29.8254 11.7324 28.333 13.2248 28.333 15.0658C28.333 16.9067 29.8254 18.3991 31.6663 18.3991Z"
          fill="#664E27"
        />
        <path
          d="M34.7333 23.3325C31.8667 27.3992 28.4 28.3992 24 28.3992C19.6 28.3992 16.1333 27.3992 13.2667 23.3325C12.8667 22.7992 11.8 23.1325 12.0667 23.9325C13.6 29.2658 18.7333 32.3992 24.0667 32.3992C29.4 32.3992 34.5333 29.2658 36.0667 23.9325C36.2 23.1325 35.1333 22.7992 34.7333 23.3325Z"
          fill="#664E27"
        />
      </g>
      <defs>
        <filter
          id="filter0_di_849_49992"
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
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_849_49992" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_849_49992" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="4" dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.9875 0 0 0 0 0.626984 0 0 0 0 0.0411458 0 0 0 0.5 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_849_49992" />
        </filter>
      </defs>
    </svg>
  );
};

export default IconEmojiButton;
