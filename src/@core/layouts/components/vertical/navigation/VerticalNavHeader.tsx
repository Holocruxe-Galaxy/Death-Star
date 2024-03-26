// ** Next Import
import Link from 'next/link';

// ** MUI Imports
import IconButton from '@mui/material/IconButton';
import Box, { BoxProps } from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';

// ** Type Import
import { LayoutProps } from 'src/@core/layouts/types';

// ** Custom Icon Import
import Icon from 'src/@core/components/icon';

interface Props {
  navHover: boolean;
  collapsedNavWidth: number;
  hidden: LayoutProps['hidden'];
  navigationBorderWidth: number;
  toggleNavVisibility: () => void;
  settings: LayoutProps['settings'];
  saveSettings: LayoutProps['saveSettings'];
  navMenuBranding?: LayoutProps['verticalLayoutProps']['navMenu']['branding'];
  menuLockedIcon?: LayoutProps['verticalLayoutProps']['navMenu']['lockedIcon'];
  menuUnlockedIcon?: LayoutProps['verticalLayoutProps']['navMenu']['unlockedIcon'];
}

// ** Styled Components
const MenuHeaderWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  paddingRight: theme.spacing(4),
  justifyContent: 'space-between',
  transition: 'padding .25s ease-in-out',
  minHeight: theme.mixins.toolbar.minHeight,
}));

const LinkStyled = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
});

const VerticalNavHeader = (props: Props) => {
  // ** Props
  const {
    hidden,
    navHover,
    settings,
    saveSettings,
    collapsedNavWidth,
    toggleNavVisibility,
    navigationBorderWidth,
    menuLockedIcon: userMenuLockedIcon,
    navMenuBranding: userNavMenuBranding,
    menuUnlockedIcon: userMenuUnlockedIcon,
  } = props;

  // ** Hooks & Vars
  const theme = useTheme();
  const { mode, direction, navCollapsed } = settings;

  const svgFillSecondary = () => {
    if (mode === 'semi-dark') {
      return `rgba(${theme.palette.customColors.dark}, 0.6)`;
    } else {
      return theme.palette.text.secondary;
    }
  };
  const svgFillDisabled = () => {
    if (mode === 'semi-dark') {
      return `rgba(${theme.palette.customColors.dark}, 0.38)`;
    } else {
      return theme.palette.text.disabled;
    }
  };

  const menuHeaderPaddingLeft = () => {
    if (navCollapsed && !navHover) {
      if (userNavMenuBranding) {
        return 0;
      } else {
        return (collapsedNavWidth - navigationBorderWidth - 40) / 8;
      }
    } else {
      return 5.5;
    }
  };

  const svgRotationDeg = () => {
    if (navCollapsed) {
      if (direction === 'rtl') {
        if (navHover) {
          return 0;
        } else {
          return 180;
        }
      } else {
        if (navHover) {
          return 180;
        } else {
          return 0;
        }
      }
    } else {
      if (direction === 'rtl') {
        return 180;
      } else {
        return 0;
      }
    }
  };

  return (
    <MenuHeaderWrapper className="nav-header" sx={{ pl: menuHeaderPaddingLeft() }}>
      {userNavMenuBranding ? (
        userNavMenuBranding(props)
      ) : (
        <LinkStyled href="/">
          {navCollapsed && !navHover ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="50" viewBox="0 0 300 257.73">
              <path
                fill="#f7f9f9"
                d="M235.07,144.74a16.45,16.45,0,0,0-16.46,16.45v5.48H158.29V115.49a16.45,16.45,0,1,0-32.9,0v124.3a16.45,16.45,0,1,0,32.9,0V192.26h60.32v47.53a16.46,16.46,0,0,0,32.91,0v-78.6A16.45,16.45,0,0,0,235.07,144.74Z"
                transform="translate(-64.16 -39.63)"
              />
              <circle fill="#59c1bd" cx="170.91" cy="72.2" r="13.71" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1560 257.73" width="180">
              <path
                fill="#f7f9f9"
                d="M235.07,144.74a16.45,16.45,0,0,0-16.46,16.45v5.48H158.29V115.49a16.45,16.45,0,1,0-32.9,0v124.3a16.45,16.45,0,1,0,32.9,0V192.26h60.32v47.53a16.46,16.46,0,0,0,32.91,0v-78.6A16.45,16.45,0,0,0,235.07,144.74Z"
                transform="translate(-64.16 -39.63)"
              />
              <path
                fill="#f7f9f9"
                d="M552.21,227.91H537.58V116.41a16.45,16.45,0,1,0-32.9,0V240.7c0,.31,0,.61.05.92s-.05.6-.05.91a14.62,14.62,0,0,0,14.62,14.62h32.91a14.62,14.62,0,1,0,0-29.24Z"
                transform="translate(-64.16 -39.63)"
              />
              <path
                fill="#f7f9f9"
                d="M1467.46,234,1432,178.74l11.63-18A14.63,14.63,0,1,0,1419,144.86l-4.42,6.86-30.48-47.45a14.63,14.63,0,0,0-24.61,15.81l37.67,58.63-34.67,53.74a14.62,14.62,0,0,0,24.57,15.86l27.47-42.57,28.29,44A14.63,14.63,0,1,0,1467.46,234Z"
                transform="translate(-64.16 -39.63)"
              />
              <circle fill="#59c1bd" cx="312.34" cy="72.2" r="13.71" />
              <circle fill="#59c1bd" cx="170.91" cy="72.2" r="13.71" />
              <circle fill="#59c1bd" cx="641.36" cy="72.2" r="13.71" />
              <circle fill="#59c1bd" cx="1231.08" cy="72.2" r="13.71" />
              <circle fill="#59c1bd" cx="1042.81" cy="201.98" r="13.71" />
              <circle fill="#59c1bd" cx="883.79" cy="191.01" r="13.71" />
              <circle fill="#59c1bd" cx="529.17" cy="203.81" r="13.71" />
              <circle fill="#59c1bd" cx="1388.28" cy="72.2" r="13.71" />
              <circle fill="#59c1bd" cx="1543.65" cy="72.2" r="13.71" />
              <path
                fill="#f7f9f9"
                d="M429.05,116.45v.07c-1.89-1.84-3.68-3.58-4.72-4.56-4-3.71-12.05-1.87-16.28,3-4,4.63-5.63,14.14-2.32,18.5,1.93,2.53,9,7.77,10.78,9.11a54.77,54.77,0,0,1,12.54,35c0,29.78-23.32,53.92-52.09,53.92s-52.1-24.14-52.1-53.92a54.87,54.87,0,0,1,10.85-32.9h0s8.1-9.13,11.09-11.88c4-3.7,2.74-11.89-1.83-16.45-4.33-4.33-13.7-6.65-18.28-3.66-3.07,2-10.23,10.51-10.23,10.51h0a78.94,78.94,0,0,0-22.68,55.29c0,44.42,37,80.43,82.71,80.43s82.71-36,82.71-80.43A79.4,79.4,0,0,0,429.05,116.45ZM421.9,138l1.24-1.22C422.74,137.22,422.33,137.63,421.9,138Z"
                transform="translate(-64.16 -39.63)"
              />
              <path
                fill="#f7f9f9"
                d="M758.07,116.45v.07c-1.89-1.84-3.68-3.58-4.72-4.56-4-3.71-12.05-1.87-16.27,3-4,4.63-5.64,14.14-2.33,18.5,1.93,2.53,9,7.77,10.78,9.11a54.77,54.77,0,0,1,12.54,35c0,29.78-23.32,53.92-52.09,53.92s-52.1-24.14-52.1-53.92a54.87,54.87,0,0,1,10.85-32.9h0s8.1-9.13,11.09-11.88c4-3.7,2.74-11.89-1.83-16.45-4.33-4.33-13.7-6.65-18.28-3.66-3.07,2-10.23,10.51-10.23,10.51h0a78.94,78.94,0,0,0-22.68,55.29c0,44.42,37,80.43,82.71,80.43s82.71-36,82.71-80.43A79.4,79.4,0,0,0,758.07,116.45ZM750.92,138l1.24-1.22C751.76,137.22,751.35,137.63,750.92,138Z"
                transform="translate(-64.16 -39.63)"
              />
              <path
                fill="#f7f9f9"
                d="M957.08,113.66c-4.08-5.59-23.68-10.8-23.68-10.8v0a84.57,84.57,0,0,0-27.94-4.75c-45.69,0-82.72,36-82.72,80.42,0,33.11,20.59,61.54,50,73.87a16.82,16.82,0,0,0,3.94,2c20.1,7.31,34.73,5.48,34.73,5.48,14.62-1.82,12.79-16.45,12.79-16.45,0-9.14-11-11-11-11-19.05,0-31.52-6.56-32.77-7.25.12-.11.23-.23.36-.34a54.21,54.21,0,0,1-27-47.25c0-29.78,23.32-53.92,52.09-53.92a50.48,50.48,0,0,1,21.52,4.82c5.08,3,12.65,8,16.87,8.89s11,1.82,14.62-3.66C964.65,125.17,960.06,117.74,957.08,113.66Z"
                transform="translate(-64.16 -39.63)"
              />
              <path
                fill="#f7f9f9"
                d="M1085.33,100h-54.22s0,.11.07.16a13.16,13.16,0,0,0-1.9-.16h-5.48a12.79,12.79,0,0,0-12.79,12.8V244.36a12.79,12.79,0,0,0,12.79,12.79h5.48a12.8,12.8,0,0,0,12.8-12.79V200.49h33.08a14.94,14.94,0,0,0,.94,3.69l3.81,9.57a15,15,0,1,0,27.91-11.11l-3-7.63a38.58,38.58,0,0,0,18.64-33v-23.6C1123.42,117.26,1106.28,100,1085.33,100Zm-43.25,78.64V126.83h28.11a23.85,23.85,0,0,1,23.66,23.89v4a23.85,23.85,0,0,1-23.66,23.89Z"
                transform="translate(-64.16 -39.63)"
              />
              <path
                fill="#f7f9f9"
                d="M1309.87,163.37v-1.51l-.13.07c-.65-5.8-3.23-14.19-12.67-15.36-14.62-1.83-16.45,14.62-16.45,14.62l.81,1.08c-.27-.14-.55-.26-.81-.41v32.75a34.3,34.3,0,0,1-34.21,34.21h-8.35a34.3,34.3,0,0,1-34.21-34.21v-71s1.83-19.13-12.8-21-16.45,14.62-16.45,14.62l.11.14c-.06,1.17-.11,2.34-.11,3.51v74a66,66,0,0,0,65.81,65.81h3.65A66,66,0,0,0,1309.87,195V167.52A29,29,0,0,0,1309.87,163.37Z"
                transform="translate(-64.16 -39.63)"
              />
              <path
                fill="#f7f9f9"
                d="M1614.21,226.08h-60.32V191.35h51.18a14.63,14.63,0,0,0,0-29.25h-51.18V127.37h14.62a14.62,14.62,0,1,0,0-29.24h-32.9A14.61,14.61,0,0,0,1521,112.75c0,.31,0,.61,0,.91s0,.61,0,.92V238.87a16.44,16.44,0,0,0,14,16.26,6.15,6.15,0,0,0,1.49.19h12.8a6.26,6.26,0,0,0,1.07-.1,15.28,15.28,0,0,0,1.67.1h62.15a14.62,14.62,0,0,0,0-29.24Z"
                transform="translate(-64.16 -39.63)"
              />
            </svg>
          )}
        </LinkStyled>
      )}

      {hidden ? (
        <IconButton
          disableRipple
          disableFocusRipple
          onClick={toggleNavVisibility}
          sx={{ p: 0, backgroundColor: 'transparent !important' }}
        >
          <Icon icon="mdi:close" fontSize={20} />
        </IconButton>
      ) : userMenuLockedIcon === null && userMenuUnlockedIcon === null ? null : (
        <IconButton
          disableRipple
          disableFocusRipple
          onClick={() => saveSettings({ ...settings, navCollapsed: !navCollapsed })}
          sx={{
            p: 0,
            color: 'text.primary',
            backgroundColor: 'transparent !important',
          }}
        >
          {userMenuLockedIcon && userMenuUnlockedIcon ? (
            navCollapsed ? (
              userMenuUnlockedIcon
            ) : (
              userMenuLockedIcon
            )
          ) : (
            <Box
              width={22}
              fill="none"
              height={22}
              component="svg"
              viewBox="0 0 22 22"
              xmlns="http://www.w3.org/2000/svg"
              sx={{
                transform: `rotate(${svgRotationDeg()}deg)`,
                transition: 'transform .25s ease-in-out .35s',
              }}
            >
              <path
                fill={svgFillSecondary()}
                d="M11.4854 4.88844C11.0082 4.41121 10.2344 4.41121 9.75716 4.88844L4.51029 10.1353C4.03299 10.6126 4.03299 11.3865 4.51029 11.8638L9.75716 17.1107C10.2344 17.5879 11.0082 17.5879 11.4854 17.1107C11.9626 16.6334 11.9626 15.8597 11.4854 15.3824L7.96674 11.8638C7.48943 11.3865 7.48943 10.6126 7.96674 10.1353L11.4854 6.61667C11.9626 6.13943 11.9626 5.36568 11.4854 4.88844Z"
              />
              <path
                fill={svgFillDisabled()}
                d="M15.8683 4.88844L10.6214 10.1353C10.1441 10.6126 10.1441 11.3865 10.6214 11.8638L15.8683 17.1107C16.3455 17.5879 17.1193 17.5879 17.5965 17.1107C18.0737 16.6334 18.0737 15.8597 17.5965 15.3824L14.0779 11.8638C13.6005 11.3865 13.6005 10.6126 14.0779 10.1353L17.5965 6.61667C18.0737 6.13943 18.0737 5.36568 17.5965 4.88844C17.1193 4.41121 16.3455 4.41121 15.8683 4.88844Z"
              />
            </Box>
          )}
        </IconButton>
      )}
    </MenuHeaderWrapper>
  );
};

export default VerticalNavHeader;
