const { createTheme } = require("@mui/material");

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#34a853",
    },
    secondary: {
      main: "#f6c946",
    },
    background: {
      default: "#f6c946",
      paper: "#f6c946",
    },
    text: {
      primary: "#3a3a3a",
      secondary: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: "2rem",
      color: "#3a3a3a",
    },
    body1: {
      color: "#3a3a3a",
    },
  },
});
