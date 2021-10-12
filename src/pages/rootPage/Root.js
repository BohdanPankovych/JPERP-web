import React, {memo, useEffect} from "react";
import {Route, Switch} from "react-router-dom";
import FrontendRoutes from "../../data/constants/FrontendRoutes";
import EventsListPageContainer from "../eventsListPage/containers/EventsListPageContainer";
import EditScreenPageContainer from "../editScreenPage/containers/EditScreenPageContainer";
import PreviewScreenPageContainer from "../previewScreenPage/containers/PreviewScreenPageContainer";
import API from "../../data/api/Api";
import SharedScreenDialogContainer from "../sharedScreenDialog/containers/SharedScreenDialogContainer";
import {dateToYMD, qwe} from '../../data/helpers/timeHelper'
import EventsMock from "../../data/mock/EventsMock";

const Root = ({
  eventsList,
  setEventsListData,
  isTagDialogShown,
  showTagsDialog,
  setGardenId,
  setGardenName,
  gardenId,
    group,
    month,
    year,
    day
}) => {
  const getEvents = (gardenId) => {
    API.eventsList
      .getEventsList(gardenId, {
        clsId: null,
        childId: null,
        from: dateToYMD(new Date(), "-"),
        to: dateToYMD(new Date(), "-"),
        text: null,
        generalTagIds: [],
        staffId: null,
        limit: 20,
        offset: 0,
        isApproved: null,
      })
      .then((res) => setEventsListData(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    API.garden
      .getGardenId()
      .then((res) => {
        setGardenId(res.data[0].id);
        setGardenName(res.data[0].name);
        getEvents(res.data[0].id);
      })
      .catch((err) => console.error(err));
  }, []);

    useEffect(() => {
        {
            gardenId && API.eventsList
                .getEventsList(gardenId, {
                    clsId: group,
                    childId: null,
                    from: qwe(year, month, day),
                    to: qwe(year, month, day),
                    text: null,
                    generalTagIds: [],
                    staffId: null,
                    limit: 20,
                    offset: 0,
                    isApproved: null,
                })
                .then((res) => setEventsListData(res.data))
                .catch((err) => console.error(err));
        }
    }, [group, month, year, day]);

  // useEffect(()=>{
  //     setGardenName("日本標準こども園");
  //     setEventsListData(EventsMock);
  //     console.log("Root Page", EventsMock);
  // },[])

  return (
    <>
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
      <SharedScreenDialogContainer
        open={isTagDialogShown}
        handleClose={() => showTagsDialog(false)}
      />
    </>
  );
};

export default memo(Root);
