import SelectedEventsActionTypes from "./selectedEventsActionTypes";

export const setSelectedEvents = (selects) => ({
  type: SelectedEventsActionTypes.SET_SELECTED,
  payload: { selects },
});

export const editSelectedEvents = (eventId, eventDescription) => ({
  type: SelectedEventsActionTypes.EDIT_EVENT,
  payload: { eventId, eventDescription },
});

export const addSelectedEvent = (event) => ({
  type: SelectedEventsActionTypes.ADD_SELECTED_EVENT,
  payload: { event },
});

export const removeSelectedEvent = (eventID) => ({
  type: SelectedEventsActionTypes.REMOVE_SELECTED_EVENT,
  payload: { eventID },
});

export const addTag = (tag) => ({
  type: SelectedEventsActionTypes.ADD_TAG,
  payload: { tag },
});

export const selectTagId = (tagId) => ({
  type: SelectedEventsActionTypes.SELECT_TAG_ID,
  payload: { tagId },
});

export const selectClassId = (classId) => ({
  type: SelectedEventsActionTypes.SELECT_CLASS_ID,
  payload: { classId },
});

export const selectChildId = (childId) => ({
  type: SelectedEventsActionTypes.SELECT_CHILD_ID,
  payload: { childId },
});

export const setEditReportsTitle = (title) => ({
  type: SelectedEventsActionTypes.SET_TITLE,
  payload: { title },
});

export const setEditReportsColor = (bgColor) => ({
  type: SelectedEventsActionTypes.SET_COLOR,
  payload: { bgColor },
});

export const setEditReportsComment = (description) => ({
  type: SelectedEventsActionTypes.SET_REPORT_COMMENT,
  payload: { description },
});

export const setSelectCreator = (creator) => ({
  type: SelectedEventsActionTypes.SELECT_CREATOR,
  payload: { creator },
});

export const resetSelectedData = () => ({
  type: SelectedEventsActionTypes.RESET_SELECTED_DATA,
});

export const selectedEventsActions = {
  setSelectedEvents,
  editSelectedEvents,
  addSelectedEvent,
  removeSelectedEvent,
  addTag,
  selectTagId,
  selectClassId,
  selectChildId,
  setEditReportsTitle,
  setEditReportsColor,
  setEditReportsComment,
  setSelectCreator,
  resetSelectedData,
};
