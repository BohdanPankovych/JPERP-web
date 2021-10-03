import React, {memo} from "react"
import {Route, Switch} from "react-router-dom";
import FrontendRoutes from "../../data/constants/FrontendRoutes";
import EventsListPageContainer from "../eventsListPage/containers/EventsListPageContainer";
import PreviewScreenPage from '../previewScreenPage/PreviewScreenPage';
import EditScreenPageContainer from "../editScreenPage/containers/EditScreenPageContainer";

const Root = () => {
  return <>
          <Switch>
              <Route exact path={FrontendRoutes.EVENTS_LIST_PAGE}>
                  <EventsListPageContainer />
              </Route>
              <Route exact path={FrontendRoutes.EDIT_REPORTS}>
                  <EditScreenPageContainer />
              </Route>
              <Route exact path={FrontendRoutes.PREVIEW_LiST_PAGE}>
                  <PreviewScreenPage/>
              </Route>
          </Switch>
  </>;
};

export default memo(Root);
