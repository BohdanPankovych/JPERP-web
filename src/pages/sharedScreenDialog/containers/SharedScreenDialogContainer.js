import React from "react";
import { connect } from "react-redux";
import { shareReportsActions } from "../../../data/redux/shareReports/shareReportsActions";
import SharedScreenDialog from "../SharedScreenDialog";
import { addEvent } from "../../../data/redux/eventsList/eventsListActions";
import { setSelectedEvents,resetSelectedData  } from "../../../data/redux/selectedEvents/selectedEventsActions";
import {showTagsDialog} from "../../../data/redux/common/commonActions";

const mapStateToProps = (state) => ({
  open: state.common.get('isTagDialogShown'),
  description: state.shareReports.get("description"),
  image: state.shareReports.get("image"),
  approve: state.shareReports.get("approve"),
  destination: state.shareReports.get("destination"),
  tags: state.shareReports.get("tags"),
  gardenId: state.common.get("gardenId"),

  tagIds: state.selectedEvents.get("tagIds")?.toJS(),
  textTags: state.selectedEvents.get("textTags")?.toJS(),
  clsIds: state.selectedEvents.get("clsIds")?.toJS(),
  childIds: state.selectedEvents.get("childIds")?.toJS(),
});

const mapDispatchToProps = {
  ...shareReportsActions,
  showTagsDialog,
  setSelectedEvents,
  resetSelectedData,
  addEvent,
};

const SharedScreenDialogContainer = (props) => (
  <SharedScreenDialog {...props} />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SharedScreenDialogContainer);
