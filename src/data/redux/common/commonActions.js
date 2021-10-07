import CommonActionTypes from "./commonActionTypes";


export const setTimeFilter = timeFilter => ({
    type: CommonActionTypes.SET_TIME_FILTER,
    payload: {timeFilter}
});

export const setGardenId = gardenId => ({
    type: CommonActionTypes.SET_GARDEN_ID,
    payload: {gardenId}
});
