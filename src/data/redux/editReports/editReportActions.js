import EditReportsActionTypes from "./editReportsActionTypes";

export const setEditReportsData = (reports) => ({
  type: EditReportsActionTypes.SET_REPORTS,
  payload: { reports },
});

// export const setEditReportsTitle = (title) => ({
//   type: EditReportsActionTypes.SET_TITLE,
//   payload: { title },
// });

// export const setEditReportsColor = (color) => ({
//   type: EditReportsActionTypes.SET_COLOR,
//   payload: { color },
// });

// export const setEditReportsComment = (description) => ({
//   type: EditReportsActionTypes.SET_REPORT_COMMENT,
//   payload: { description },
// });

export const setEditReportsCreators = (creators) => ({
  type: EditReportsActionTypes.SET_CREATORS,
  payload: { creators },
});

// export const setSelectCreator = (creator) => ({
//   type: EditReportsActionTypes.SELECT_CREATOR,
//   payload: { creator },
// });

export const editReportsActions = {
  setEditReportsData,
//   setEditReportsTitle,
//   setEditReportsColor,
//   setEditReportsComment,
  setEditReportsCreators,
//   setSelectCreator,
};
