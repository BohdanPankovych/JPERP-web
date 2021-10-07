import React from "react";
import { connect } from "react-redux";
import Root from '../Root'
import {setEventsListData} from "../../../data/redux/eventsList/eventsListActions";
import {CommonActions} from "../../../data/redux/common/commonActions";

const mapStateToProps = state => ({
    eventsList: state.eventsList.get("events")?.toJS(),
    gardenId: state.common.get('gardenId')
});

const mapDispatchToProps = {
    setEventsListData,
    ...CommonActions,
};

const RootContainer = props => <Root {...props} />;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RootContainer);
