import React from "react";
import { connect } from "react-redux";
import { shareReportsActions } from "../../../data/redux/shareReports/shareReportsActions";
import SharedScreenDialog from "../SharedScreenDialog";
import { addEvent } from "../../../data/redux/eventsList/eventsListActions";
import { setSelectedEvents } from "../../../data/redux/selectedEvents/selectedEventsActions";

const mapStateToProps = (state) => ({
  description: state.shareReports.get("description"),
  image: state.shareReports.get("image"),
  approve: state.shareReports.get("approve"),
  destination: state.shareReports.get("destination"),
  tags: state.shareReports.get("tags"),
  newEvent: {
    //DELETE IT IN FURURE
    docRec: {
      id: "",
      gardenId: state.common.get("gardenId"),
      dateTime: state.common.get("timeFilter"),
      comment: state.shareReports.get("description"),
      mediaSha256: state.shareReports.get("image"),
      mediaType: state.shareReports.get("image"),
      remarks: "",
      effectiveFrom: null,
      effectiveUntil: null,
      createdUsrId: null, //creatorId
      lastModified: null,
      lastModifiedUsrId: null,
      approved: state.shareReports.get("approve"),
    },
    maybeAdminTag: [],
    maybeAppliTag: [],
    tags: state.shareReports.get("tagIds")?.toJS(),
    textTags: state.shareReports.get("textTags")?.toJS(),
    clsTags: state.shareReports.get("clsIds")?.toJS(),
    childTags: state.shareReports.get("childIds")?.toJS(),
    staffId: null,
    staffName: "",
    purchased: "",
  },
});

const mapDispatchToProps = {
  ...shareReportsActions,
  setSelectedEvents,
  addEvent,
};

const SharedScreenDialogContainer = (props) => (
  <SharedScreenDialog {...props} />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SharedScreenDialogContainer);
