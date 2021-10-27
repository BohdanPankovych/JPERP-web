import React, {memo, useEffect} from "react";
import {Route, Switch} from "react-router-dom";
import FrontendRoutes from "../../data/constants/FrontendRoutes";
import EventsListPageContainer from "../eventsListPage/containers/EventsListPageContainer";
import EditScreenPageContainer from "../editScreenPage/containers/EditScreenPageContainer";
import PreviewScreenPageContainer from "../previewScreenPage/containers/PreviewScreenPageContainer";
import API from "../../data/api/Api";
import SharedScreenDialogContainer from "../sharedScreenDialog/containers/SharedScreenDialogContainer";
import {dateTodayYMD, dateToYMD, qwe} from '../../data/helpers/timeHelper'
import HomeButton from "../../reusableComponents/button/HomeButton";
import EventsMock from "../../data/mock/EventsMock";

export const fetchEvents = (gardenId, setEventsListData, group, from, to, offset) => {
    API.eventsList
        .getEventsList(gardenId, {
            clsId: group || null,
            childId: null,
            from: from,
            to: to || null,
            text: null,
            generalTagIds: [],
            staffId: null,
            limit: 20,
            offset: offset || 0 ,
            isApproved: null,
        })
        .then((res) => setEventsListData(res.data))
        .catch((err) => console.error(err));
};

const Root = ({
  setEventsListData,
  setGardenId,
  setGardenName,
  gardenId,
    group,
    month,
    year,
    day,
    offset
}) => {
  const getEvents = (gardenId) => {
      fetchEvents(gardenId, setEventsListData, null,
          dateToYMD(new Date(), "-"), dateTodayYMD(new Date(), "-"), 0)
  }

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
        gardenId && fetchEvents(gardenId, setEventsListData, group,
            qwe(year, month ? month : "01", month ? day > 9 ? day : "0" + day : "01"),
            qwe(year, month ? month : "12", month? day > 9 ? day : "0" + day : "31"),
            0)
    }, [group, month, year, day, offset]);

    // const updateEvents = () => {
    //     fetchEvents(gardenId, setEventsListData, group,
    //         qwe(year, month, day > 9 ? day : "0" + day),
    //         qwe(year, month, day > 9 ? day : "0" + day),
    //         0);
    // }
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
          <EventsListPageContainer />
        </Route>
        <Route exact path={FrontendRoutes.EDIT_REPORTS}>
          <EditScreenPageContainer />
        </Route>
        <Route exact path={FrontendRoutes.PREVIEW_LiST_PAGE}>
          <PreviewScreenPageContainer />
        </Route>
      </Switch>
      <SharedScreenDialogContainer updateEvents={getEvents}/>
    </>
  );
};

export default memo(Root);
