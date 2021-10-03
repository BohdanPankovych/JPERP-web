import EditReportsActionTypes from "./editReportsActionTypes";

export const setEditReportsData = reports => ({
    type: EditReportsActionTypes.SET_REPORTS,
    payload: { reports },
});

export const setEditReportsTitle = title =>({
    type: EditReportsActionTypes.SET_TITLE,
    payload: { title },
});

export const setEditReportsColor = color =>({
    type: EditReportsActionTypes.SET_COLOR,
    payload: { color },
});

export const setEditReportsDescription = description =>({
    type: EditReportsActionTypes.SET_DESCRIPTION,
    payload: { description },
});

export const setEditReportsCreators = creators =>({
    type: EditReportsActionTypes.SET_CREATORS,
    payload: { creators },
});

export const setSelectCreator = creator =>({
    type: EditReportsActionTypes.SELECT_CREATOR,
    payload: { creator },
});

export const editReportsActions = {
    setEditReportsData,
    setEditReportsTitle,
    setEditReportsColor,
    setEditReportsDescription,
    setEditReportsCreators,
    setSelectCreator,
}
