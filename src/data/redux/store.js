import { combineReducers, createStore } from "redux";
import eventsListReducer from "./eventsList/eventsListReducer";

const rootReducer = combineReducers({
    // common: commonReducer,
    eventsList: eventsListReducer,
    // signIn: signInReducer,
    // overview: overviewReducer,
    // driversList: driversListReducer,
    // invitations: invitationsReducer,
    // driverOverview: driverOverviewReducer,
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
