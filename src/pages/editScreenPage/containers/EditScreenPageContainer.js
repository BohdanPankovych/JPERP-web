import React from "react";
import { connect } from "react-redux";
import EditScreenPage from "../EditScreenPage";
import { setTimeFilter } from "../../../data/redux/common/commonActions";
import { editReportsActions } from "../../../data/redux/editReports/editReportActions";
import { selectedEventsActions } from "../../../data/redux/selectedEvents/selectedEventsActions";
import {
  setSelectedEvents,
  editSelectedEvents,
} from "../../../data/redux/selectedEvents/selectedEventsActions";

const mapStateToProps = (state) => ({
  reportsList: state.reportsList.get("reports")?.toJS(),
  selectedEvents: state.selectedEvents.get("selects")?.toJS(),
  creators: state.reportsList.get("creators")?.toJS(),
  timeFilter: state.common.get("timeFilter").toJS(),
  gardenId: state.common.get('gardenId'),
  title: state.selectedEvents.get("title"),
  bgColor: state.selectedEvents.get("bgColor"),
  description: state.selectedEvents.get("description"),
  selectCreator: state.selectedEvents.get("selectCreator"),

  gardenGroups: state.eventsList.get("groups"),
  group: state.common.getIn(["filterProps", "group"]),
  gardenName: state.common.get("gardenName"),
});

const mapDispatchToProps = {
  setTimeFilter,
  setSelectedEvents,
  editSelectedEvents,
  ...editReportsActions,
  ...selectedEventsActions,
};

const EditScreenPageContainer = (props) => <EditScreenPage {...props} />;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditScreenPageContainer);
