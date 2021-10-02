import Immutable from "immutable";
import EventsListActionTypes from "./eventsListActionTypes";

const defaultState = new Immutable.OrderedMap({
    events: new Immutable.List()
});

const eventsListReducer = (state = defaultState, action) => {
    switch (action.type) {
        case EventsListActionTypes.SET_EVENTS:
            return state.set("events", new Immutable.List(action.payload.events));

        default:
            return state;
    }
};

export default eventsListReducer;
