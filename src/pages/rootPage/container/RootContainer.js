import React from "react";
import { connect } from "react-redux";
import Root from '../Root'
import {setEventsListData} from "../../../data/redux/eventsList/eventsListActions";

const mapStateToProps = state => ({
    eventsList: state.eventsList.get("events")?.toJS(),
});

const mapDispatchToProps = {
    setEventsListData,
};

const RootContainer = props => <Root {...props} />;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RootContainer);
