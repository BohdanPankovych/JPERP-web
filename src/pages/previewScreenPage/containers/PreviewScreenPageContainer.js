import React from "react";
import { connect } from "react-redux";
import { setTimeFilter } from "../../../data/redux/common/commonActions";
import { editReportsActions } from "../../../data/redux/editReports/editReportActions";
import { addEvent } from "../../../data/redux/eventsList/eventsListActions";
import { setSelectedEvents } from "../../../data/redux/selectedEvents/selectedEventsActions";
import { setShareReportsImage } from "../../../data/redux/shareReports/shareReportsActions";
import { showTagsDialog } from "../../../data/redux/common/commonActions";
import PreviewScreenPage from "../PreviewScreenPage";

const mapStateToProps = (state) => ({
  timeFilter: state.common.get("timeFilter"),
  gardenName: state.common.get("gardenName"),
  title: state.selectedEvents.get("title"),
  bgColor: state.selectedEvents.get("bgColor"),
  description: state.selectedEvents.get("description"),
  selectCreator: state.selectedEvents.get("selectCreator"),
  selectedEvents: state.selectedEvents.get("selects")?.toJS(),
});

const mapDispatchToProps = {
  setTimeFilter,
  setSelectedEvents,
  addEvent,
  setShareReportsImage,
  showTagsDialog,
  ...editReportsActions,
};

const PreviewScreenPageContainer = (props) => <PreviewScreenPage {...props} />;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PreviewScreenPageContainer);
