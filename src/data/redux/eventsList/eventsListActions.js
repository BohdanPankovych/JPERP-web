import EventsListActionTypes from "./eventsListActionTypes";

export const setEventsListData = events => ({
    type: EventsListActionTypes.SET_EVENTS,
    payload: { events },
});

export const addEvent = event => ({
    type: EventsListActionTypes.ADD_EVENT,
    payload: { event },
});

export const deleteEvent = eventID => ({
    type: EventsListActionTypes.DELETE_EVENT,
    payload: { eventID },
});

export const setGardenGroups = groups => ({
    type: EventsListActionTypes.SET_GARDEN_GROUPS,
    payload: { groups },
})
