import React from "react";
import { connect } from "react-redux";
import {setEventsListData} from "../../../data/redux/eventsList/eventsListActions";
import EventsListPage from "../EventsListPage";

const mapStateToProps = state => ({
    // timeFilter: state.common.get('timeFilter').toJS(),
    // fleetId: state.common.getIn(['currentUser', 'fleets', 0]),
    eventsList: state.eventsList.get("events")?.toJS(),
    // userSettings: state.common.get('userSettings')?.toJS()
});

const mapDispatchToProps = {
    setEventsListData,

};

const EventsListPageContainer = props => <EventsListPage {...props} />;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventsListPageContainer);
