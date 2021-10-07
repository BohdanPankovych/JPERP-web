import React from "react";
import { connect } from "react-redux";
import { shareReportsActions } from "../../../data/redux/shareReports/shareReportsActions";
import SharedScreenList from "../sharedScreenComponents/SharedScreenList";

const mapStateToProps = (state) => ({
  clsChildTags: state.shareReports.get("clsChildTags")?.toJS(),
  generalTags: state.shareReports.get("generalTags")?.toJS(),
  textTags: state.shareReports.get("textTags"),
  destination: state.shareReports.get("destination"),
});

const mapDispatchToProps = {
  ...shareReportsActions,
};

const SharedScreenListContainer = (props) => <SharedScreenList {...props} />;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SharedScreenListContainer);
