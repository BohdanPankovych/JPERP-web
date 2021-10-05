import Immutable from "immutable";
import ShareReportsActionsTypes from "./ShareReportsActionsTypes";

const defaultState = new Immutable.OrderedMap({
    image: null,
    description: "",
    approve: false,
    destination: "",
    classrooms: null,
    kids: null,
    dynamicTags: null,
    tags: new Immutable.List([]),
    textTags: new Immutable.List([]),
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
        case ShareReportsActionsTypes.SET_CLASSROOMS:
            return state.set("classrooms", new Immutable.List(action.payload.classrooms));
        case ShareReportsActionsTypes.SET_KIDS:
            return state.set("kids",  action.payload.kids);
        case ShareReportsActionsTypes.SET_DYNAMIC_TAGS:
            return state.set("dynamicTags", new Immutable.List(action.payload.tags));
        
        case ShareReportsActionsTypes.ADD_TAG:
            return state.update("textTags", textTags => textTags.push(action.payload.tag));

        case ShareReportsActionsTypes.SET_TAG:
            return state.update("tags", tags => {
                if(tags.includes(action.payload.tag)){
                    return tags.filter(val => val !== action.payload.tag);
                }else{
                    return tags.push(action.payload.tag);
                }  
            });
        default:
            return state;
    }
};

export default eventsListReducer;
