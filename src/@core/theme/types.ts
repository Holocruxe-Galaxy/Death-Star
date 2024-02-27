declare module '@mui/material/styles' {
  interface Palette {
    customColors: {
      dark: string;
      main: string;
      light: string;
      bodyBg: string;
      darkBg: string;
      lightBg: string;
      trackBg: string;
      avatarBg: string;
      tooltipBg: string;
      tableHeaderBg: string;
    };
    holocruxe: {
      bg: string;
      fontWhite: string;
      ligthText: string;
      mediumText: string;
      darkText: string;
      contrastText: string;
      btn: string;
      card: string;
      focus: string;
    };
  }
  interface PaletteOptions {
    customColors?: {
      dark?: string;
      main?: string;
      light?: string;
      bodyBg?: string;
      darkBg?: string;
      lightBg?: string;
      trackBg?: string;
      avatarBg?: string;
      tooltipBg?: string;
      tableHeaderBg?: string;
    };
    holocruxe?: {
      bg?: string;
      fontWhite?: string;
      ligthText?: string;
      mediumText?: string;
      darkText?: string;
      contrastText?: string;
      btn?: string;
      card?: string;
      focus?: string;
    };
  }
}

export {};
