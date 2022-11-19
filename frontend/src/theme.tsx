import { createTheme } from "@mui/material";
import { orange, red } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }

  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2045A7",
    },
    secondary: {
      main: "#ffd166",
    },
  },
  status: {
    danger: orange[500],
  },
});
