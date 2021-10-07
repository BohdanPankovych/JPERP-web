import Immutable from 'immutable';
import TimeFilter from "../../immutableEntities/DateFilter";
import CommonActionTypes from "./commonActionTypes";
import {dateToYMD} from "../../helpers/timeHelper";

const defaultState = new Immutable.OrderedMap({
    timeFilter: new TimeFilter(),
    gardenId: '',
    gardenName: '',
});

const commonReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CommonActionTypes.SET_TIME_FILTER:
            return state.setIn(['timeFilter', 'day'], dateToYMD(action.payload.timeFilter));

        case CommonActionTypes.SET_GARDEN_ID:
            return state.set("gardenId", action.payload.gardenId);
        
        case CommonActionTypes.SET_GARDEN_NAME:
            return state.set("gardenName", action.payload.gardenName);

        default:
            return state;
    }
};


export default commonReducer;
