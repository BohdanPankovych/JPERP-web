import Immutable from "immutable";
import SelectedEventsActionTypes from "./selectedEventsActionTypes";

const defaultState = new Immutable.OrderedMap({
    selects: new Immutable.List()
});

const selectedEventsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SelectedEventsActionTypes.SET_SELECTED:
            return state.set("selects", new Immutable.List(action.payload.selects));

        default:
            return state;
    }
};

export default selectedEventsReducer;
