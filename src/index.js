import React from "react";
import ReactDOM from "react-dom";
import Root from "./pages/rootPage/Root";
import {Router} from "react-router-dom";
import CustomHistory from "./CustomHistory";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import theme from "./Theme";

ReactDOM.render(
    <Router history={CustomHistory}>
        <React.StrictMode>
            <ThemeProvider theme={theme}>
                <Root />
            </ThemeProvider>
        </React.StrictMode>
    </Router>,

  document.getElementById("root")
);
