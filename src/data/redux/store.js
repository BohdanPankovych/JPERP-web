import { combineReducers, createStore } from "redux";
import eventsListReducer from "./eventsList/eventsListReducer";
import commonReducer from "./common/commonReducer";
import editReportsReducer from "./editReports/editReportsReducer";
import selectedEventsReducer from "./selectedEvents/selectedEventsReducer";

const rootReducer = combineReducers({
    common: commonReducer,
    eventsList: eventsListReducer,
    reportsList: editReportsReducer,
    selectedEvents: selectedEventsReducer,
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
