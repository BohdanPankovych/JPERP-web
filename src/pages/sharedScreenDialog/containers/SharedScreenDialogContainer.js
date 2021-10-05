import React from "react";
import { connect } from "react-redux";
import {shareReportsActions} from "../../../data/redux/shareReports/shareReportsActions";
import SharedScreenDialog from "../SharedScreenDialog";

const mapStateToProps = state => ({
    description: state.shareReports.get("description"),
    image: state.shareReports.get("image"),
    approve: state.shareReports.get("approve"),
    destination: state.shareReports.get("destination"),
    tags: state.shareReports.get("tags"),
});

const mapDispatchToProps = {
    ...shareReportsActions,
};

const SharedScreenDialogContainer = props => <SharedScreenDialog {...props} />;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SharedScreenDialogContainer);
