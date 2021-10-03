import CommonActionTypes from "./commonActionTypes";


export const setTimeFilter = timeFilter => ({
    type: CommonActionTypes.SET_TIME_FILTER,
    payload: {timeFilter}
});
