import { createTheme } from "@mui/material";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["cyrillic", "latin"], weight: "400" });

export const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiButton: {
      defaultProps: {
        sx: {
          textTransform: "none",
        },
      },
    },
  },
  palette: {
    mode: "light",
    background: {
      default: `#fff`,
    },
    primary: {
      main: `#383838`,
    },
    // background: { default: "#ececec" }
  },
});
