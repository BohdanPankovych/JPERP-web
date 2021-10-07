import Immutable from "immutable";
import SelectedEventsActionTypes from "./selectedEventsActionTypes";
import EventDTO from '../../immutableEntities/EventDTO'

const toImmList = (model) => (arr) =>
  new Immutable.List(arr.map((e) => new model(e)));

const defaultState = new Immutable.OrderedMap({
    selects: new Immutable.List()
});

const selectedEventsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SelectedEventsActionTypes.SET_SELECTED:
            return state.set("selects", toImmList(EventDTO)(action.payload.selects));
        case SelectedEventsActionTypes.EDIT_EVENT:
            
            return state.update("selects", selects => selects.map(val => {
                if(val.docRec.id === action.payload.eventId){
                    return val.setIn(["docRec", "comment"], action.payload.eventDescription);
                }else{
                    return val;
                }
            }));

        default:
            return state;
    }
};

export default selectedEventsReducer;
