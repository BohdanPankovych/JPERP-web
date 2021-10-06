import React, {memo, useEffect, useMemo} from "react"
import {Route, Switch} from "react-router-dom";
import FrontendRoutes from "../../data/constants/FrontendRoutes";
import EventsListPageContainer from "../eventsListPage/containers/EventsListPageContainer";
import EditScreenPageContainer from "../editScreenPage/containers/EditScreenPageContainer";
import PreviewScreenPageContainer from "../previewScreenPage/containers/PreviewScreenPageContainer";
import mockData from '../../data/mock/mockData'

const Root = ({eventsList, setEventsListData}) => {

    useEffect(()=>{
        console.log("Root Page", mockData.eventsList);
        setEventsListData(mockData.eventsList);
    },[])

  return <>
          <Switch>
              <Route exact path={FrontendRoutes.EVENTS_LIST_PAGE}>
                  <EventsListPageContainer />
              </Route>
              <Route exact path={FrontendRoutes.EDIT_REPORTS}>
                  <EditScreenPageContainer />
              </Route>
              <Route exact path={FrontendRoutes.PREVIEW_LiST_PAGE}>
                  <PreviewScreenPageContainer />
              </Route>
          </Switch>
  </>;
};

export default memo(Root);
