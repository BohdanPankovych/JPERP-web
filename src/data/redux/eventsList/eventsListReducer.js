import Immutable from "immutable";
import EventsListActionTypes from "./eventsListActionTypes";
import EventDTO from '../../immutableEntities/EventDTO'

const toImmList = (model) => (arr) =>
  new Immutable.List(arr.map((e) => new model(e)));

const defaultState = new Immutable.OrderedMap({
    events: new Immutable.List(),
    groups: [],
});

const eventsListReducer = (state = defaultState, action) => {
    switch (action.type) {
        case EventsListActionTypes.SET_EVENTS:
            return state.set("events", toImmList(EventDTO)(action.payload.events));
        case EventsListActionTypes.ADD_EVENT:
            const prevState =  state.get("events").unshift(action.payload.event)
            return state.set("events", toImmList(EventDTO)(prevState));
        case EventsListActionTypes.DELETE_EVENT:
            return state.update("events", events => events.filter(e => e.docRec.id !== action.payload.eventID))
        case EventsListActionTypes.SET_GARDEN_GROUPS:
            return state.set("groups", action.payload.groups)

        default:
            return state;
    }
};

export default eventsListReducer;
