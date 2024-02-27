// ** MUI Imports
// import { useTheme } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const FallbackSpinner = ({ sx }: { sx?: BoxProps['sx'] }) => {
  // ** Hook
  // const theme = useTheme();

  return (
    <Box
      component="div"
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        ...sx,
      }}
    >
      <svg width="32" height="38" viewBox="0 0 32 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_22_7122)">
          <path
            d="M1.0022 17.3118C1.0022 13.2283 1.0022 9.14487 1.0022 5.06583C1.01099 2.70008 2.29483 1.24867 4.3569 1.22204C6.41896 1.19541 7.75116 2.66013 7.77315 4.99481C7.80392 7.97753 7.80832 10.9558 7.77315 13.9341C7.77315 14.8484 7.99738 15.1858 8.96466 15.168C12.3106 15.1147 15.6609 15.128 19.0068 15.168C19.8026 15.168 20.1235 15.0304 20.1895 14.1116C20.3478 11.848 21.8119 10.5253 23.7684 10.6495C25.725 10.7738 26.9824 12.2075 26.9868 14.4933C27.0044 19.571 27.0044 24.6473 26.9868 29.722C26.9868 32.1632 25.6326 33.7167 23.5486 33.6768C21.4645 33.6368 20.1675 32.1721 20.1499 29.6821C20.1279 27.0855 20.1015 24.4934 20.1499 21.9013C20.1763 20.8715 19.9652 20.4543 18.8309 20.4854C15.6066 20.5653 12.3692 20.5653 9.11854 20.4854C7.99298 20.4588 7.72918 20.8449 7.75996 21.9013C7.82591 24.4357 7.78634 26.9746 7.75996 29.5134C7.75996 32.1766 6.53767 33.6679 4.40086 33.6857C2.26406 33.7034 1.0066 32.1988 1.0022 29.5622C0.999267 25.4788 0.999267 21.3953 1.0022 17.3118Z"
            fill="#FEFEFE"
          />
          <path
            d="M1.0022 17.3118C1.0022 13.2283 1.0022 9.14487 1.0022 5.06583C1.01099 2.70008 2.29483 1.24867 4.3569 1.22204C6.41896 1.19541 7.75116 2.66013 7.77315 4.99481C7.80392 7.97753 7.80832 10.9558 7.77315 13.9341C7.77315 14.8484 7.99738 15.1858 8.96466 15.168C12.3106 15.1147 15.6609 15.128 19.0068 15.168C19.8026 15.168 20.1235 15.0304 20.1895 14.1116C20.3478 11.848 21.8119 10.5253 23.7684 10.6495C25.725 10.7738 26.9824 12.2075 26.9868 14.4933C27.0044 19.571 27.0044 24.6473 26.9868 29.722C26.9868 32.1632 25.6326 33.7167 23.5486 33.6768C21.4645 33.6368 20.1675 32.1721 20.1499 29.6821C20.1279 27.0855 20.1015 24.4934 20.1499 21.9013C20.1763 20.8715 19.9652 20.4543 18.8309 20.4854C15.6066 20.5653 12.3692 20.5653 9.11854 20.4854C7.99298 20.4588 7.72918 20.8449 7.75996 21.9013C7.82591 24.4357 7.78634 26.9746 7.75996 29.5134C7.75996 32.1766 6.53767 33.6679 4.40086 33.6857C2.26406 33.7034 1.0066 32.1988 1.0022 29.5622C0.999267 25.4788 0.999267 21.3953 1.0022 17.3118Z"
            stroke="#00C9B5"
            stroke-width="0.25"
            stroke-miterlimit="10"
          />
        </g>
        <g filter="url(#filter1_d_22_7122)">
          <path
            d="M26.3978 3.80073C26.4082 4.36583 26.2522 4.92132 25.9495 5.39678C25.6468 5.87225 25.2111 6.24628 24.6976 6.47146C24.1841 6.69665 23.6159 6.76284 23.0651 6.66165C22.5143 6.56046 22.0056 6.29645 21.6036 5.90308C21.2016 5.50971 20.9243 5.0047 20.807 4.45207C20.6896 3.89943 20.7374 3.32406 20.9443 2.79889C21.1513 2.27373 21.508 1.82241 21.9693 1.50215C22.4306 1.1819 22.9758 1.00713 23.5356 1C24.2784 1.00408 24.9909 1.29774 25.5243 1.81966C26.0576 2.34157 26.3706 3.05135 26.3978 3.80073Z"
            fill="#3398ED"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_22_7122"
            x="0.875"
            y="1.09668"
            width="30.25"
            height="36.7139"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_22_7122" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_22_7122" result="shape" />
          </filter>
          <filter
            id="filter1_d_22_7122"
            x="20.6441"
            y="0.9"
            width="7.8543"
            height="7.90801"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="1" dy="1" />
            <feGaussianBlur stdDeviation="0.55" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.925 0 0 0 0 0.925 0 0 0 0 0.925 0 0 0 0.33 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_22_7122" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_22_7122" result="shape" />
          </filter>
        </defs>
      </svg>
      <CircularProgress disableShrink sx={{ mt: 6 }} />
    </Box>
  );
};

export default FallbackSpinner;
