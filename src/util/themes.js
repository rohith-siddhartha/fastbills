import { createTheme } from "@mui/material";

export const blackTheme = createTheme({
    palette: {
      primary: {
        light: '#181717',
        main: '#181717',
        dark: '#060606',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });