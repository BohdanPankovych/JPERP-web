import React, {memo} from "react"
import {Route, Switch} from "react-router-dom";
import FrontendRoutes from "../../data/constants/FrontendRoutes";
import EventsListPage from "../eventsListPage/EventsListPage";
import InputScreenPage from "../inputScreenPage/InputScreenPage";

const Root = () => {
  return <>
          <Switch>
              <Route exact path={FrontendRoutes.EVENTS_LIST_PAGE}>
                  <EventsListPage />
              </Route>
              <Route exact path={FrontendRoutes.EDIT_REPORTS}>
                  <InputScreenPage />
              </Route>
          </Switch>
  </>;
};

export default memo(Root);
