import Immutable from "immutable";
import ShareReportsActionsTypes from "./ShareReportsActionsTypes";
import TagListDTO from "../../immutableEntities/TagListDTO";

const toImmList = (model) => (arr) =>
  new Immutable.List(arr.map((e) => new model(e)));

const defaultState = new Immutable.OrderedMap({
  image: null,
  description: "",
  approve: false,
  destination: "",
  clsChildTags: null,
  generalTags: null,
  textTags: new Immutable.List([]), //tags that are added
  tags: new Immutable.List([]), //tags that are selected
});

const eventsListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ShareReportsActionsTypes.SET_IMAGE:
      return state.set("image", action.payload.image);
    case ShareReportsActionsTypes.SET_DESCRIPRTION:
      return state.set("description", action.payload.description);
    case ShareReportsActionsTypes.SET_APPROVE:
      return state.set("approve", action.payload.approve);

    case ShareReportsActionsTypes.SET_DESTINATION:
      return state.set("destination", action.payload.destination);
    case ShareReportsActionsTypes.SET_CHILD_TAGS:
      return state.set(
        "clsChildTags",
        toImmList(TagListDTO)(action.payload.kids)
      );
    case ShareReportsActionsTypes.SET_GENERAL_TAGS:
      return state.set(
        "generalTags",
        toImmList(TagListDTO)(action.payload.tags)
      );

    case ShareReportsActionsTypes.ADD_TAG:
      return state.update("textTags", (textTags) =>
        textTags.push({ name: action.payload.tag })
      );

    case ShareReportsActionsTypes.SET_TAG:
      return state.update("tags", (tags) => {
        if (tags.includes(action.payload.tag)) {
          return tags.filter((val) => val !== action.payload.tag);
        } else {
          return tags.push(action.payload.tag);
        }
      });
    default:
      return state;
  }
};

export default eventsListReducer;
