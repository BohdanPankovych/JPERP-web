import React, {memo, useEffect} from "react";
import {Route, Switch} from "react-router-dom";
import FrontendRoutes from "../../data/constants/FrontendRoutes";
import EventsListPageContainer from "../eventsListPage/containers/EventsListPageContainer";
import EditScreenPageContainer from "../editScreenPage/containers/EditScreenPageContainer";
import PreviewScreenPageContainer from "../previewScreenPage/containers/PreviewScreenPageContainer";
import API from "../../data/api/Api";
import SharedScreenDialogContainer from "../sharedScreenDialog/containers/SharedScreenDialogContainer";
import HomeButton from "../../reusableComponents/button/HomeButton";
// import EventsMock from "../../data/mock/EventsMock";

const Root = ({
                setDefaultFilterProps,
                setGardenId,
                setGardenName,
              }) => {
  useEffect(() => {
    API.garden
      .getGardenId()
      .then((res) => {
        setGardenId(res.data[0].id);
        setGardenName(res.data[0].name);
      })
      .catch((err) => console.error(err));
  }, []);

  // useEffect(()=>{
  //     setGardenName("日本標準こども園");
  //     setEventsListData(EventsMock);
  //     console.log("Root Page", EventsMock);
  // },[])

  return (
    <>
      <HomeButton/>
      <Switch>
        <Route exact path={FrontendRoutes.EVENTS_LIST_PAGE}>
          <EventsListPageContainer/>
        </Route>
        <Route exact path={FrontendRoutes.EDIT_REPORTS}>
          <EditScreenPageContainer/>
        </Route>
        <Route exact path={FrontendRoutes.PREVIEW_LiST_PAGE}>
          <PreviewScreenPageContainer/>
        </Route>
      </Switch>
      <SharedScreenDialogContainer updateEvents={() => setDefaultFilterProps()}/>
    </>
  );
};

export default memo(Root);
