import ShareReportsActionsTypes from "./ShareReportsActionsTypes";

export const setShareReportsImage = (image) => ({
  type: ShareReportsActionsTypes.SET_IMAGE,
  payload: { image },
});

export const setShareReportsDescription = (description) => ({
  type: ShareReportsActionsTypes.SET_DESCRIPRTION,
  payload: { description },
});

export const setShareReportsApprove = (approve) => ({
  type: ShareReportsActionsTypes.SET_APPROVE,
  payload: { approve },
});

export const setTextTag = (tag) => ({
  type: ShareReportsActionsTypes.SET_TAG,
  payload: { tag },
});

export const setDestination = (destination) => ({
  type: ShareReportsActionsTypes.SET_DESTINATION,
  payload: { destination },
});

export const setChildTags = (kids) => ({
  type: ShareReportsActionsTypes.SET_CHILD_TAGS,
  payload: { kids },
});

export const setGeneralTags = (tags) => ({
  type: ShareReportsActionsTypes.SET_GENERAL_TAGS,
  payload: { tags },
});

export const shareReportsActions = {
  setShareReportsImage,
  setShareReportsDescription,
  setShareReportsApprove,
  setTextTag,
  setDestination,
  setChildTags,
  setGeneralTags,
};
