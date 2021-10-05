import SelectedEventsActionTypes from "./selectedEventsActionTypes";

export const setSelectedEvents = selects => ({
    type: SelectedEventsActionTypes.SET_SELECTED,
    payload: { selects },
});

export const editSelectedEvents = (eventId, eventDescription) => ({
    type: SelectedEventsActionTypes.EDIT_EVENT,
    payload: { eventId, eventDescription },
});
