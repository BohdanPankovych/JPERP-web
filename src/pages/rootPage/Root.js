import React, {memo} from "react"
import {Route, Switch} from "react-router-dom";
import FrontendRoutes from "../../data/constants/FrontendRoutes";
import EventsListPage from "../eventsListPage/EventsListPage";
import InputScreenPage from "../inputScreenPage/InputScreenPage";
import PreviewScreenPage from '../previewScreenPage/PreviewScreenPage';

const Root = () => {
  return <>
          <Switch>
              <Route exact path={FrontendRoutes.EVENTS_LIST_PAGE}>
                  <EventsListPage />
              </Route>
              <Route exact path={FrontendRoutes.EDIT_REPORTS}>
                  <InputScreenPage />
              </Route>
              <Route exact path={FrontendRoutes.PREVIEW_LiST_PAGE}>
                  <PreviewScreenPage/>
              </Route>
          </Switch>
  </>;
};

export default memo(Root);
