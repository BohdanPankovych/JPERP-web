import React from "react";
import { connect } from "react-redux";
import { shareReportsActions } from "../../../data/redux/shareReports/shareReportsActions";
import { selectedEventsActions} from '../../../data/redux/selectedEvents/selectedEventsActions'
import SharedScreenList from "../sharedScreenComponents/SharedScreenList";

const mapStateToProps = (state) => ({
  clsChildTags: state.shareReports.get("clsChildTags")?.toJS(),
  generalTags: state.shareReports.get("generalTags")?.toJS(),
  destination: state.shareReports.get("destination"),

  textTags: state.selectedEvents.get("textTags"),
  tagIds: state.selectedEvents.get("tagIds"),
  clsIds: state.selectedEvents.get("clsIds"),
  childIds: state.selectedEvents.get("childIds"),
});

const mapDispatchToProps = {
  ...shareReportsActions,
  ...selectedEventsActions,
};

const SharedScreenListContainer = (props) => <SharedScreenList {...props} />;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SharedScreenListContainer);
