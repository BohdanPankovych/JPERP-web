import EventsListActionTypes from "./eventsListActionTypes";

export const setEventsListData = events => ({
    type: EventsListActionTypes.SET_EVENTS,
    payload: { events },
});
