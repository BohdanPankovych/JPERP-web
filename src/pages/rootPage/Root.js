import React, {memo} from "react"
import {Route, Switch} from "react-router-dom";
import FrontendRoutes from "../../data/constants/FrontendRoutes";
import EasyReportPage from "../EventsListPage/EventsListPage";

const Root = () => {
  return <>
          <Switch>
              <Route exact path={FrontendRoutes.EASY_REPORT_PAGE}>
                  <EasyReportPage />
              </Route>
          </Switch>
  </>;
};

export default memo(Root);
