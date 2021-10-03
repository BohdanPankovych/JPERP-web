import { combineReducers, createStore } from "redux";
import eventsListReducer from "./eventsList/eventsListReducer";
import commonReducer from "./common/commonReducer";
import editReportsReducer from "./editReports/editReportsReducer";

const rootReducer = combineReducers({
    common: commonReducer,
    eventsList: eventsListReducer,
    reportsList: editReportsReducer,
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
