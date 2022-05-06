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
        contrastText: '#ebebeb',
      },
    },
    shape: {
      borderRadius: 8,
    },
    typography: {
      button: {
        fontWeight: 500,
      },
      fontFamily: '"Rubik", sans-serif',
      body1: {
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: 1.5,
        color: '#222222',
      },
      body2: {
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: 1.57,
        color: '#222222',
      },
      subtitle1: {
        fontSize: '1rem',
        fontWeight: 500,
        lineHeight: 1.75,
        color: '#222222',
      },
      subtitle2: {
        fontSize: '0.875rem',
        fontWeight: 500,
        lineHeight: 1.57,
        color: '#222222',
      },
      overline: {
        fontSize: '0.75rem',
        fontWeight: 600,
        letterSpacing: '0.5px',
        lineHeight: 2.5,
        textTransform: 'uppercase',
        color: '#222222',
      },
      caption: {
        fontSize: '0.75rem',
        fontWeight: 400,
        lineHeight: 1.66,
        color: '#222222',
      },
      h1: {
        fontWeight: 700,
        fontSize: '3.5rem',
        lineHeight: 1.375,
        color: '#222222',
      },
      h2: {
        fontWeight: 700,
        fontSize: '3rem',
        lineHeight: 1.375,
        color: '#222222',
      },
      h3: {
        fontWeight: 700,
        fontSize: '2.25rem',
        lineHeight: 1.375,
        color: '#222222',
      },
      h4: {
        fontWeight: 700,
        fontSize: '2rem',
        lineHeight: 1.375,
        color: '#222222',
      },
      h5: {
        fontWeight: 600,
        fontSize: '1.5rem',
        lineHeight: 1.375,
        color: '#222222',
      },
      h6: {
        fontWeight: 600,
        fontSize: '1.125rem',
        lineHeight: 1.375,
        color: '#222222',
      },
    },
  },
  ruRU,
);
