import React, {memo, useEffect} from "react"
import {Route, Switch} from "react-router-dom";
import FrontendRoutes from "../../data/constants/FrontendRoutes";
import EventsListPageContainer from "../eventsListPage/containers/EventsListPageContainer";
import EditScreenPageContainer from "../editScreenPage/containers/EditScreenPageContainer";
import PreviewScreenPageContainer from "../previewScreenPage/containers/PreviewScreenPageContainer";
import mockData from '../../data/mock/mockData'
import API from "../../data/api/Api";
import EventsMock from "../../data/mock/EventsMock";
import SharedScreenDialogContainer from '../sharedScreenDialog/containers/SharedScreenDialogContainer'

const Root = ({eventsList, setEventsListData, isTagDialogShown, showTagsDialog, setGardenId, setGardenName, gardenId}) => {

    // const getEvents = (gardenId) => {
    //     API.eventsList
    //          .getEventsList(gardenId)
    //          .then((res) => setEventsListData(res.data))
    //          .catch((err) => console.log(err));
    // }

    // useEffect(() => {
    //     API.garden
    //         .getGardenId()
    //         .then((res) => {setGardenId(res.data[0].id); setGardenName(res.data[0].name)})
    //         .catch((err)=>console.log(err));
    // }, []);

    useEffect(()=>{
        setGardenName("日本標準こども園");
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
          <SharedScreenDialogContainer open={isTagDialogShown} handleClose={() => showTagsDialog(false)}/>
  </>;
};

export default memo(Root);
