import SelectedEventsActionTypes from "./selectedEventsActionTypes";

export const setSelectedEvents = selects => ({
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

export const selectedEventsActions = {
    setSelectedEvents,
    editSelectedEvents,
    addSelectedEvent,
    removeSelectedEvent,
}
