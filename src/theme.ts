"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: "var(--font-lato)",
  },
  palette: {
    primary: {
      main: "var(--foreground)", // Primary color (default blue)
      light: "var(--foreground)", // Optional: lighter shade
      dark: "var(--foreground)", // Optional: darker shade
      contrastText: "var(--foreground)", // Optional: text color for contrast
    },
  },
});

export default theme;
