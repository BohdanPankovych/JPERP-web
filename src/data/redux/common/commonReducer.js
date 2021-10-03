import Immutable from 'immutable';
import TimeFilter from "../../immutableEntities/DateFilter";
import CommonActionTypes from "./commonActionTypes";

const defaultState = new Immutable.OrderedMap({
    timeFilter: new TimeFilter(),

});

const commonReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CommonActionTypes.SET_TIME_FILTER:
            return state.set('timeFilter', new TimeFilter(action.payload.timeFilter));

        default:
            return state;
    }
};


export default commonReducer;
