import React from "react";
import { connect } from "react-redux";
import {setGardenGroups} from "../../../data/redux/eventsList/eventsListActions";
import EventsListPage from "../EventsListPage";
import {selectedEventsActions} from "../../../data/redux/selectedEvents/selectedEventsActions";
import {setDay, setGroup, setIncrementOffset, setMonth, setYear} from "../../../data/redux/common/commonActions";

const mapStateToProps = state => ({
    eventsList: state.eventsList.get("events")?.toJS(),
    selectedEvents: state.selectedEvents.get('selects')?.toJS(),
    gardenGroups: state.eventsList.get("groups"),
    gardenId: state.common.get("gardenId"),
    group: state.common.get("group"),
    month: state.common.get("month"),
    year: state.common.get("year"),
});

const mapDispatchToProps = {
    ...selectedEventsActions,
    setGardenGroups,
    setGroup,
    setMonth,
    setYear,
    setDay,
    setIncrementOffset
};

const EventsListPageContainer = props => <EventsListPage {...props} />;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventsListPageContainer);
