import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#414658',
      main: '#313647',
      dark: '#212737',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#546775',
      main: '#435663',
      dark: '#324552',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default theme;