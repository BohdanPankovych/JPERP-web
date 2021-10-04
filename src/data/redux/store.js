import { combineReducers, createStore } from "redux";
import eventsListReducer from "./eventsList/eventsListReducer";
import commonReducer from "./common/commonReducer";
import editReportsReducer from "./editReports/editReportsReducer";
import shareReportsReducer from './shareReports/shareReportsReducer'

const rootReducer = combineReducers({
    common: commonReducer,
    eventsList: eventsListReducer,
    reportsList: editReportsReducer,
    shareReports: shareReportsReducer,
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
