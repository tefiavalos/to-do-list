import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      filterButtonMinWidth: number;
      filterButtonPadding: string;
      createButtonPadding: string;
      chipFontSize: number;
      chipHeight: number;
      chipFontWeight: number;
      chipPadding: number;
      dialogMinWidth: number;
      dialogMaxWidth: number;
      dialogBorderRadius: number;
      contentBoxMaxWidth: number;
      contentBoxPadding: number;
      contentBoxRadius: number;
      itemBoxPadding: number;
      itemBoxRadius: number;
      itemBoxMinHeight: number;
      pillRadius: number;
      fontSizeSmall: number;
      fontWeight400: number;
      fontSize14: number;
    };
  }
  interface ThemeOptions {
    custom?: {
      filterButtonMinWidth?: number;
      filterButtonPadding?: string;
      createButtonPadding?: string;
      chipFontSize?: number;
      chipHeight?: number;
      chipFontWeight?: number;
      chipPadding?: number;
      dialogMinWidth?: number;
      dialogMaxWidth?: number;
      dialogBorderRadius?: number;
      contentBoxMaxWidth?: number;
      contentBoxPadding?: number;
      contentBoxRadius?: number;
      itemBoxPadding?: number;
      itemBoxRadius?: number;
      itemBoxMinHeight?: number;
      pillRadius?: number;
      fontSizeSmall?: number;
      fontWeight400?: number;
      fontSize14?: number;
    };
  }
  interface Shape {
    chip?: number;
    icon?: number;
    circle?: number;
    button?: number;
    content?: number;
  }
  interface TypeBackground {
    modal?: string;
  }
  interface TypeText {
    faded?: string;
    fadedBorder?: string;
    disabledText?: string;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2E7D32",
    },
    error: {
      main: "#d32f2f",
    },
    background: {
      default: "#F9FAFF",
      paper: "#fff",
      modal: "#F9FAFF",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      faded: "#00000099",
      fadedBorder: "#0000006B",
      disabled: "#ccc",
      disabledText: "#666",
    },
  },
  shape: {
    borderRadius: 32, // global default
  },
  typography: {
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontSize: 16,
    h6: {
      fontSize: 22,
      fontWeight: 700,
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 700,
    },
  },
  custom: {
    filterButtonMinWidth: 90,
    filterButtonPadding: "20px 0",
    createButtonPadding: "6px 16px",
    chipFontSize: 13,
    chipHeight: 24,
    chipFontWeight: 500,
    chipPadding: 0.5,
    dialogMinWidth: 370,
    dialogMaxWidth: 420,
    dialogBorderRadius: 32,
    contentBoxMaxWidth: 900,
    contentBoxPadding: 6,
    contentBoxRadius: 6,
    itemBoxPadding: 10,
    itemBoxRadius: 32,
    itemBoxMinHeight: 64,
    pillRadius: 100,
    fontSizeSmall: 12,
    fontWeight400: 400,
    fontSize14: 14,
  },
}); 