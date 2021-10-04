import Immutable from 'immutable';
import TimeFilter from "../../immutableEntities/DateFilter";
import CommonActionTypes from "./commonActionTypes";
import {dateToYMD} from "../../helpers/timeHelper";

const defaultState = new Immutable.OrderedMap({
    timeFilter: new TimeFilter(),

});

const commonReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CommonActionTypes.SET_TIME_FILTER:
            return state.setIn(['timeFilter', 'day'], dateToYMD(action.payload.timeFilter));

        default:
            return state;
    }
};


export default commonReducer;
