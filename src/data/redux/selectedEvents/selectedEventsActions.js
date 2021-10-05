import SelectedEventsActionTypes from "./selectedEventsActionTypes";

export const setSelectedEvents = selects => ({
    type: SelectedEventsActionTypes.SET_SELECTED,
    payload: { selects },
});
