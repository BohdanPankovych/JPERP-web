import EditReportsActionTypes from "./editReportsActionTypes";

export const setEditReportsData = (reports) => ({
  type: EditReportsActionTypes.SET_REPORTS,
  payload: { reports },
});

export const setEditReportsCreators = (creators) => ({
  type: EditReportsActionTypes.SET_CREATORS,
  payload: { creators },
});

export const addCreator = (creator) => ({
  type: EditReportsActionTypes.ADD_CREATOR,
  payload: { creator },
})

export const editReportsActions = {
  setEditReportsData,
  setEditReportsCreators,
  addCreator,
};
