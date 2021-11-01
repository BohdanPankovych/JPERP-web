import Immutable from 'immutable';
import TimeFilter from "../../immutableEntities/DateFilter";
import CommonActionTypes from "./commonActionTypes";
import {dateToYMD} from "../../helpers/timeHelper";
import FilterProps from "../../immutableEntities/FilterProps";

const defaultState = new Immutable.OrderedMap({
  timeFilter: new TimeFilter(),
  gardenId: '',
  gardenName: '',
  isTagDialogShown: false,
  filterProps: new FilterProps()
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
      return state.setIn(["filterProps", "group"], action.payload.group);

    case CommonActionTypes.SET_MONTH:
      return state.setIn(["filterProps", "month"], action.payload.month);

    case CommonActionTypes.SET_YEAR:
      return state.setIn(["filterProps", "year"], action.payload.year);

    case CommonActionTypes.SET_DAY:
      return state.setIn(["filterProps", "day"], action.payload.day);

    case CommonActionTypes.SET_OFFSET:
      return state.setIn(["filterProps", "offset"], action.payload.offset);

    case CommonActionTypes.SET_INCREMENT_OFFSET:
      return state.updateIn(["filterProps", "offset"], offset => offset + 1);

    case CommonActionTypes.SET_DEFAULT_FILTER_PROPS:
      return state.set("filterProps", new FilterProps());

    case CommonActionTypes.UPDATE_FILTER_PROPS:
      return state.update("filterProps", filterProps =>
        new FilterProps({...filterProps?.toJS(), ...action.payload.filterProps})
    );

    default:
      return state;
  }
};


export default commonReducer;
