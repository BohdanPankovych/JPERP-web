import React, {memo, useEffect, useMemo} from "react"
import {Route, Switch} from "react-router-dom";
import FrontendRoutes from "../../data/constants/FrontendRoutes";
import EventsListPageContainer from "../eventsListPage/containers/EventsListPageContainer";
import EditScreenPageContainer from "../editScreenPage/containers/EditScreenPageContainer";
import PreviewScreenPageContainer from "../previewScreenPage/containers/PreviewScreenPageContainer";
import mockData from '../../data/mock/mockData'
import {setGardenId} from "../../data/redux/common/commonActions";
import API from "../../data/api/Api";
import EventsMock from "../../data/mock/EventsMock";

const Root = ({eventsList, setEventsListData, setGardenId, gardenId}) => {

    // useEffect(() => {
    //     API.garden
    //         .getGardenId()
    //         .then((res) => console.log(res.data))
    // }, []);

    useEffect(()=>{
        setEventsListData(EventsMock);
        console.log("Root Page", EventsMock);

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
