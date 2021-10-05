import EventsListActionTypes from "./eventsListActionTypes";

export const setEventsListData = events => ({
    type: EventsListActionTypes.SET_EVENTS,
    payload: { events },
});

export const addEvent = event => ({
    type: EventsListActionTypes.ADD_EVENT,
    payload: { event },
});
