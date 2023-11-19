import { createTheme } from '@mui/material/styles';

export const createMuiTheme = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#20c20e',
      },
      secondary: {
        main: '#2fbace',
      },
      background: {
        default: '#000000',
      },
      text: {
        primary: '#20c20e',
      },
    },
  });

  return theme;
};
