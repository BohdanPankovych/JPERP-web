import Immutable from "immutable";
import EditReportsActionTypes from "./editReportsActionTypes";
import CreatorDTO from '../../immutableEntities/CreatorDTO'

const toImmList = (model) => (arr) =>
  new Immutable.List(arr.map((e) => new model(e)));

const defaultState = new Immutable.OrderedMap({
  reports: new Immutable.List(),
  creators: new Immutable.List(),
});

const editReportsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case EditReportsActionTypes.SET_REPORTS:
      return state.set("reports", new Immutable.List(action.payload.reports)); //DELETE

    case EditReportsActionTypes.SET_CREATORS:
      return state.set("creators", new Immutable.List(action.payload.creators));

    case EditReportsActionTypes.ADD_CREATOR:
      return state.update("creators", creators => toImmList(CreatorDTO)(creators.push(action.payload.creator))) 

    default:
      return state;
  }
};

export default editReportsReducer;
