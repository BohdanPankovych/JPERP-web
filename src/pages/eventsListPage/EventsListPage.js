import React, {memo, useEffect, useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import InfiniteScroll from 'react-infinite-scroll-component';
import EasyReportPageTitles from "./eventsListPageTitles/EventsListPageTitles";
import {daysInMonth, qwe, trailingZero} from "../../data/helpers/timeHelper";
import EventItem from "./event/EventItem";
import API from "../../data/api/Api";
import FilterSection from "./FilterSection";
import ReportButtonSection from "./ReportButtonSection";
import {CircularProgress} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  underHeaderBlock: {
    marginLeft: 15,
    marginRight: 20,
    [theme.breakpoints.up("sm")]: {
      marginRight: 30,
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: 30,
      marginRight: 60,
    },
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  loader: {
    paddingTop: 20,
    width: "100%",
    justifyContent: "center",
    display: "flex",
    height: "50px"
  }
}));

const limit = 20;

export const fetchEvents = (gardenId, setEventsListData, updateEventsListData, setCountStatus, group, from, to, offset) => {
  API.eventsList
    .getEventsList(gardenId, {
      clsId: group || null,
      childId: null,
      from: from,
      to: to || null,
      text: null,
      generalTagIds: [],
      staffId: null,
      limit: limit,
      offset: offset * limit || 0,
      isApproved: null,
    })
    .then((res) => {
      setCountStatus(res.data.length === limit);
      if (offset) {
        updateEventsListData(res.data)
      } else {
        setEventsListData(res.data)
      }
    })
    .catch((err) => {
      setCountStatus(false);
      console.error(err);
    });
};

const EventsListPage = ({
                          gardenId,
                          selectedEvents,
                          setGardenGroups,
                          eventsList,
                          setIncrementOffset,
                          setEventsListData,
                          updateEventsListData,
                          filterProps
                        }) => {
  const classes = useStyles();
  const [disable, setDisable] = useState(false);
  const [disableBtn, setDisableBtn] = useState(true);
  const [countStatus, setCountStatus] = useState(true);

  useEffect(() => {
    if (gardenId) {
      API.eventsList.getClasses(gardenId).then((res) => {
        let groups = [];
        groups.push({id: null, name: null})
        res.data?.map(val => {
          groups.push({
            id: val.id,
            name: val.name
          });
        });
        setGardenGroups(groups);
      }).catch((err) => console.log(err))
    }
  }, [gardenId]);

  useEffect(() => {
    if (gardenId) {
      const {group, day, offset, month, year} = filterProps?.toJS() || {};
      fetchEvents(gardenId, setEventsListData, updateEventsListData, setCountStatus,
        group,
        qwe(year, month ? month : "01",
          day && month ? trailingZero(day)
            : "01"
        ),
        qwe(year, month ? month : "12",
          day && month ? trailingZero(day)
            : month ? daysInMonth(month, year) : "31"),
        offset);
    }
  }, [gardenId, filterProps]);

  useEffect(() => {
    if (selectedEvents.length === 0) {
      setDisable(false)
      setDisableBtn(true)
    } else if (selectedEvents.length > 0 && selectedEvents.length < 4) {
      setDisable(false)
      setDisableBtn(false)
    } else {
      setDisable(true)
      setDisableBtn(false)
    }
  }, [selectedEvents])

  return (
    <>
      <div className={classes.underHeaderBlock}>
        <EasyReportPageTitles/>

        <div className={classes.flex}>
          <FilterSection/>
          <ReportButtonSection disableBtn={disableBtn}/>
        </div>

      </div>

      <InfiniteScroll
        dataLength={eventsList?.length} //This is important field to render the next data
        next={() => {
          setIncrementOffset()
        }}
        hasMore={countStatus}
        loader={<div className={classes.loader}><CircularProgress/></div>}
      >
        {eventsList?.filter(e => e.docRec?.id)?.length ? eventsList.map((e) => (
            <EventItem key={e.docRec.id} item={e} disable={disable}/>
          ))
          : <div className={classes.loader}>レコードが見つかりません</div>
        }
      </InfiniteScroll>
    </>
  );
}

export default memo(EventsListPage);
