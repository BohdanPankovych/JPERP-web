import Immutable from "immutable";
import EditReportsActionTypes from "./editReportsActionTypes";

const defaultState = new Immutable.OrderedMap({
  reports: new Immutable.List(),
  creators: new Immutable.List(),
  selectCreators: "",
  title: "",
  description: "",
  color: "",
});

const editReportsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case EditReportsActionTypes.SET_REPORTS:
      return state.set("reports", new Immutable.List(action.payload.reports));
    case EditReportsActionTypes.SET_TITLE:
      return state.set("title", action.payload.title);
    case EditReportsActionTypes.SET_COLOR:
      return state.set("color", action.payload.color);
    case EditReportsActionTypes.SET_DESCRIPTION:
      return state.set("description", action.payload.description);

    case EditReportsActionTypes.SET_CREATORS:
      return state.set("creators", new Immutable.List(action.payload.creators));
    
    case EditReportsActionTypes.SELECT_CREATOR:
      return state.set("selectCreators", action.payload.creator);

    default:
      return state;
  }
};

export default editReportsReducer;
