import React from "react";
import ReactDOM from "react-dom";
import Root from "./pages/rootPage/Root";
import {Router} from "react-router-dom";
import CustomHistory from "./CustomHistory";

ReactDOM.render(
    <Router history={CustomHistory}>
        <React.StrictMode>
            <Root />
        </React.StrictMode>
    </Router>,

  document.getElementById("root")
);
