import React from "react";
import { connect } from "react-redux";
import { shareReportsActions } from "../../../data/redux/shareReports/shareReportsActions";
import SharedScreenList from "../sharedScreenComponents/SharedScreenList";

const mapStateToProps = state => ({
    classrooms: state.shareReports.get("classrooms"),
    kids: state.shareReports.get("kids"),
    dynamicTags: state.shareReports.get("dynamicTags"),
    textTags: state.shareReports.get("textTags"),
    destination: state.shareReports.get("destination"),
});

const mapDispatchToProps = {
    ...shareReportsActions,
};

const SharedScreenListContainer = props => <SharedScreenList {...props} />;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SharedScreenListContainer);
