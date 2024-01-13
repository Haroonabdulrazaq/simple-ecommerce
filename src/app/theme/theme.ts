import { Montserrat } from "next/font/google";
import { createTheme } from "@mui/material";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";

export const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const theme = createTheme({
  typography: {
    fontFamily: "Montserrat,  san-serif",
  },
  palette: {
    primary: { main: "#23A6F0" },
    secondary: { main: "#23856D" },
  },
});
