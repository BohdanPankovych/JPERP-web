import CommonActionTypes from "./commonActionTypes";


export const setTimeFilter = timeFilter => ({
    type: CommonActionTypes.SET_TIME_FILTER,
    payload: {timeFilter}
});

export const setGardenId = gardenId => ({
    type: CommonActionTypes.SET_GARDEN_ID,
    payload: {gardenId}
});

export const setGardenName = gardenName => ({
    type: CommonActionTypes.SET_GARDEN_NAME,
    payload: {gardenName}
});

export const showTagsDialog = (isShown) => ({
    type: CommonActionTypes.SHOW_TAGS_DIALOG,
    payload: {isShown},
});

export const setGroup = group => ({
    type: CommonActionTypes.SET_GROUP,
    payload: {group},
});

export const setMonth = month => ({
    type: CommonActionTypes.SET_MONTH,
    payload: {month},
});

export const setYear = year => ({
    type: CommonActionTypes.SET_YEAR,
    payload: {year},
});

export const setDay = day => ({
    type: CommonActionTypes.SET_DAY,
    payload: {day},
});

export const setOffset = offset => ({
    type: CommonActionTypes.SET_OFFSET,
    payload: {offset},
});

export const setIncrementOffset = () => ({
    type: CommonActionTypes.SET_INCREMENT_OFFSET,
});

export const setDefaultFilterProps = () => ({
    type: CommonActionTypes.SET_DEFAULT_FILTER_PROPS,
});

export const updateFilterProps = filterProps => ({
    type: CommonActionTypes.UPDATE_FILTER_PROPS,
    payload: {filterProps}
});

export const CommonActions = {
    setTimeFilter,
    setGardenId,
    setGardenName,
    showTagsDialog,
    setDefaultFilterProps
}
