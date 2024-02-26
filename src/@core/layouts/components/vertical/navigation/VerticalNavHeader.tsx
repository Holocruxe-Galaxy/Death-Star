// ** Next Import
import Link from 'next/link';

// ** MUI Imports
import IconButton from '@mui/material/IconButton';
import Box, { BoxProps } from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import Typography, { TypographyProps } from '@mui/material/Typography';

// ** Type Import
import { LayoutProps } from 'src/@core/layouts/types';

// ** Custom Icon Import
import Icon from 'src/@core/components/icon';

// ** Configs
import { SvgIcon } from '@mui/material';

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

const HeaderTitle = styled(Typography)<TypographyProps>({
  fontWeight: 700,
  lineHeight: 1.2,
  transition: 'opacity .25s ease-in-out, margin .25s ease-in-out',
});

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
  const menuCollapsedStyles = navCollapsed && !navHover ? { opacity: 0 } : { opacity: 1 };

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
          <SvgIcon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.36 73.75">
              <g data-name="Capa 2">
                <g data-name="Capa 1">
                  <path
                    fill="#fefefe"
                    stroke="#00c9b5"
                    strokeMiterlimit="10"
                    strokeWidth="0.25"
                    d="M.13 36.75V9.16C.15 3.83 3.07.56 7.76.5s7.72 3.24 7.77 8.5c.07 6.72.08 13.43 0 20.14 0 2.06.51 2.82 2.71 2.78 7.61-.12 15.23-.09 22.84 0 1.81 0 2.54-.31 2.69-2.38.36-5.1 3.69-8.08 8.14-7.8s7.31 3.51 7.32 8.66q.06 17.16 0 34.31c0 5.5-3.08 9-7.82 8.91s-7.69-3.39-7.73-9c-.05-5.85-.11-11.69 0-17.53.06-2.32-.42-3.26-3-3.19q-11 .27-22.09 0c-2.56-.06-3.16.81-3.09 3.19.15 5.71.06 11.43 0 17.15 0 6-2.78 9.36-7.64 9.4S.14 70.29.13 64.35q-.01-13.8 0-27.6z"
                  ></path>
                  <path fill="#3398ed" d="M57.89 6.31A6.43 6.43 0 1151.38 0a6.55 6.55 0 016.51 6.31z"></path>
                </g>
              </g>
            </svg>
          </SvgIcon>
          <HeaderTitle
            variant="h6"
            sx={{
              ...menuCollapsedStyles,
              ...(navCollapsed && !navHover ? {} : { ml: 2 }),
            }}
          >
            Holocruxe
          </HeaderTitle>
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
