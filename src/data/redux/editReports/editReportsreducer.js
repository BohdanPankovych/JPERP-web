import Immutable from "immutable";
import EditReportsActionTypes from "./editReportsActionTypes";

const defaultState = new Immutable.OrderedMap({
    reports: new Immutable.List()
});

const editReportsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case EditReportsActionTypes.SET_REPORTS:
            return state.set("reports", new Immutable.List(action.payload.events));

        default:
            return state;
    }
};

export default editReportsReducer;
