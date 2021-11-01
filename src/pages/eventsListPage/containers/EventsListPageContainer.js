import React from "react";
import {connect} from "react-redux";
import {
    setEventsListData,
    setGardenGroups,
    updateEventsListData
} from "../../../data/redux/eventsList/eventsListActions";
import EventsListPage from "../EventsListPage";
import {selectedEventsActions} from "../../../data/redux/selectedEvents/selectedEventsActions";
import {setIncrementOffset} from "../../../data/redux/common/commonActions";

const mapStateToProps = state => ({
    eventsList: state.eventsList.get("events")?.toJS(),
    selectedEvents: state.selectedEvents.get('selects')?.toJS(),
    gardenId: state.common.get("gardenId"),
    filterProps: state.common.get("filterProps"),
});

const mapDispatchToProps = {
    ...selectedEventsActions,
    setGardenGroups,
    setIncrementOffset,
    setEventsListData,
    updateEventsListData
};

const EventsListPageContainer = props => <EventsListPage {...props} />;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventsListPageContainer);
