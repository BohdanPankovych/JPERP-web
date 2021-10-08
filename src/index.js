import React from "react";
import ReactDOM from "react-dom";
import RootContainer from "./pages/rootPage/container/RootContainer";
import {BrowserRouter as Router } from "react-router-dom";
import {Provider} from "react-redux";
import CustomHistory from "./CustomHistory";
import {store} from "./data/redux/store";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import theme from "./Theme";

ReactDOM.render(
    <Router history={CustomHistory}>
        <Provider store={store}>
            <React.StrictMode>
                <ThemeProvider theme={theme}>
                    <RootContainer />
                </ThemeProvider>
            </React.StrictMode>
        </Provider>
    </Router>,

    document.getElementById("root")
);
