import { createTheme } from "@mui/material/styles";
declare module "@mui/material/styles" {
  interface Theme {
    borders: {
      width: {
        thin: string;
        medium: string;
        thick: string;
      };
    };
    paddings: {
      small: string;
      medium: string;
      large: string;
    };
  }
  interface ThemeOptions {
    borders?: {
      width?: Partial<Record<"thin" | "medium" | "thick", string>>;
    };
    paddings?: Partial<Record<"small" | "medium" | "large", string>>;
  }
}
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#414658",
      main: "#313647",
      dark: "#212737",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#546775",
      main: "#435663",
      dark: "#324552",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
  },

  shape: {
    borderRadius: 2,
  },

  borders: {
    width: { thin: "1px", medium: "2px", thick: "4px" },
  },

  paddings: {
    small: "4px",
    medium: "8px",
    large: "16px",
  },

  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },

  components: {
    MuiGrid: {
      defaultProps: {
        spacing: 1,
      },
    },
    MuiStack: {
      defaultProps: {
        spacing: 1,
      },
    },
  },
});

// Add component styleOverrides that reference theme tokens
theme.components = {
  ...theme.components,
  MuiCard: {
    ...theme.components?.MuiCard,
    styleOverrides: {
      ...theme.components?.MuiCard?.styleOverrides,
      root: {
        padding: theme.paddings.medium,
      },
    },
  },
};

export default theme;
