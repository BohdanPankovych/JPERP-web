import Immutable from 'immutable';
import TimeFilter from "../../immutableEntities/DateFilter";
import CommonActionTypes from "./commonActionTypes";
import {dateToYMD, trailingZero} from "../../helpers/timeHelper";

const defaultState = new Immutable.OrderedMap({
    timeFilter: new TimeFilter(),
    gardenId: '',
    gardenName: '',
    isTagDialogShown: false,
    group: '',
    month: trailingZero(new Date().getMonth() + 1),
    year: new Date().getFullYear() + "",
    day: 1,
    offset: 0,
});

const commonReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CommonActionTypes.SET_TIME_FILTER:
            return state.setIn(['timeFilter', 'day'], dateToYMD(action.payload.timeFilter));

        case CommonActionTypes.SET_GARDEN_ID:
            return state.set("gardenId", action.payload.gardenId);

        case CommonActionTypes.SET_GARDEN_NAME:
            return state.set("gardenName", action.payload.gardenName);

        case CommonActionTypes.SHOW_TAGS_DIALOG:
            return state.set("isTagDialogShown", action.payload.isShown);

        case CommonActionTypes.SET_GROUP:
            return state.set("group", action.payload.group);

        case CommonActionTypes.SET_MONTH:
            return state.set("month", action.payload.month);

        case CommonActionTypes.SET_YEAR:
            return state.set("year", action.payload.year);

        case CommonActionTypes.SET_DAY:
            return state.set("day", action.payload.day);

        case CommonActionTypes.SET_OFFSET:
            return state.set("offset", action.payload.offset);

        case CommonActionTypes.SET_INCREMENT_OFFSET:
            return state.set("offset", state.get("offset") + 1);

        default:
            return state;
    }
};


export default commonReducer;
