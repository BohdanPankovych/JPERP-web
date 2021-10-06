import React from "react";
import { connect } from "react-redux";
import {deleteEvent, setEventsListData} from "../../../data/redux/eventsList/eventsListActions";
import EventsListPage from "../EventsListPage";
import {setSelectedEvents} from "../../../data/redux/selectedEvents/selectedEventsActions";

const mapStateToProps = state => ({
    eventsList: state.eventsList.get("events")?.toJS(),
    selectedEvents: state.selectedEvents.get('selects')?.toJS(),
});

const mapDispatchToProps = {
    setEventsListData,
    setSelectedEvents,
    deleteEvent,
};

const EventsListPageContainer = props => <EventsListPage {...props} />;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventsListPageContainer);
