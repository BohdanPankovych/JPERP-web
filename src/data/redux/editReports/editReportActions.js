import EditReportsActionTypes from "./editReportsActionTypes";

export const setEditReportsData = reports => ({
    type: EditReportsActionTypes.SET_REPORTS,
    payload: { reports },
});
