import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00AE00",
      contrastText: "#fff",
    },
    secondary: {
      main: "#AE0000",
      contrastText: "#fff",
    },
  },
});

export default theme;
