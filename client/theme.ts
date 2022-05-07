import { createTheme } from '@mui/material';
import { ruRU } from '@mui/material/locale';

export const theme = createTheme(
  {
    // palette: {
    //   primary: {
    //     main: '#3f50b5',
    //     light: '#757ce8',
    //     dark: '#002884',
    //     contrastText: '#ebebeb',
    //   },
    //   secondary: {
    //     main: '#10B981',
    //     light: '#3FC79A',
    //     dark: '#0B815A',
    //     contrastText: '#ebebeb',
    //   },
    // },
    palette: {
      primary: {
        main: '#5c6bc0',
        light: '#8e99f3',
        dark: '#26418f',
        contrastText: '#ebebeb',
      },
      secondary: {
        main: '#26a69a',
        light: '#64d8cb',
        dark: '#00766c',
        contrastText: '#ffffff',
      },
    },
    shape: {
      borderRadius: 8,
    },
  },
  ruRU,
);
