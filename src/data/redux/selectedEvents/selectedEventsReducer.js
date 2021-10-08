import Immutable from "immutable";
import SelectedEventsActionTypes from "./selectedEventsActionTypes";
import EventDTO from "../../immutableEntities/EventDTO";
import colors from "../../constants/Colors";

const toImmList = (model) => (arr) =>
  new Immutable.List(arr.map((e) => new model(e)));

const defaultState = new Immutable.OrderedMap({
  selects: new Immutable.List(),

  selectCreator: "",
  title: "",
  description: "",
  bgColor: colors[0],

  textTags: new Immutable.List([]), //tags that are added
  tagIds: new Immutable.List([]), //selected tags
  clsIds: new Immutable.List([]), //selected class id
  childIds: new Immutable.List([]), //selected child id
});

const selectedEventsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SelectedEventsActionTypes.SET_SELECTED:
      return state.set("selects", toImmList(EventDTO)(action.payload.selects));

    case SelectedEventsActionTypes.ADD_SELECTED_EVENT:
      return state.update("selects", (selects) =>
        toImmList(EventDTO)(selects.push(action.payload.event))
      );
    case SelectedEventsActionTypes.REMOVE_SELECTED_EVENT:
      return state.update("selects", (selects) =>
        selects.filter((val) => val.docRec.id != action.payload.eventID)
      );

    case SelectedEventsActionTypes.EDIT_EVENT:
      return state.update("selects", (selects) =>
        selects.map((val) => {
          if (val.docRec.id === action.payload.eventId) {
            return val.setIn(
              ["docRec", "comment"],
              action.payload.eventDescription
            );
          } else {
            return val;
          }
        })
      );

    case SelectedEventsActionTypes.ADD_TAG:
      return state.update("textTags", (textTags) =>
        textTags.push(action.payload.tag)
      );

    case SelectedEventsActionTypes.SELECT_TAG_ID:
      return state.update("tagIds", (tags) => {
        if (tags.includes(action.payload.tagId)) {
          return tags.filter((val) => val !== action.payload.tagId);
        } else {
          return tags.push(action.payload.tagId);
        }
      });

    case SelectedEventsActionTypes.SELECT_CLASS_ID:
      return state.update("clsIds", (tags) => {
        if (tags.includes(action.payload.classId)) {
          return tags.filter((val) => val !== action.payload.classId);
        } else {
          return tags.push(action.payload.classId);
        }
      });

    case SelectedEventsActionTypes.SELECT_CHILD_ID:
      return state.update("childIds", (tags) => {
        if (tags.includes(action.payload.childId)) {
          return tags.filter((val) => val !== action.payload.childId);
        } else {
          return tags.push(action.payload.childId);
        }
      });

    case SelectedEventsActionTypes.SET_TITLE:
      return state.set("title", action.payload.title);
    case SelectedEventsActionTypes.SET_COLOR:
      return state.set("bgColor", action.payload.bgColor);
    case SelectedEventsActionTypes.SET_REPORT_COMMENT:
      return state.set("description", action.payload.description);
    case SelectedEventsActionTypes.SELECT_CREATOR:
      return state.set("selectCreator", action.payload.creator);

    case SelectedEventsActionTypes.RESET_SELECTED_DATA:
      return defaultState;

    default:
      return state;
  }
};

export default selectedEventsReducer;
