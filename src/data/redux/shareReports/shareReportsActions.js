import ShareReportsActionsTypes from "./ShareReportsActionsTypes";

export const setShareReportsImage = image => ({
    type: ShareReportsActionsTypes.SET_IMAGE,
    payload: { image },
});

export const setShareReportsDescription = description => ({
    type: ShareReportsActionsTypes.SET_DESCRIPRTION,
    payload: { description },
});

export const setShareReportsApprove = approve => ({
    type: ShareReportsActionsTypes.SET_APPROVE,
    payload: { approve },
});

export const setShareReportsTag = tag => ({
    type: ShareReportsActionsTypes.SET_TAG,
    payload: { tag }
})

export const setDestination = destination => ({
    type: ShareReportsActionsTypes.SET_DESTINATION,
    payload: { destination }
})

export const setShareReportsClassroom = classrooms => ({
    type: ShareReportsActionsTypes.SET_CLASSROOMS,
    payload: { classrooms }
})

export const setShareReportsKids = kids => ({
    type: ShareReportsActionsTypes.SET_KIDS,
    payload: { kids }
})

export const setDynamicTags = tags => ({
    type: ShareReportsActionsTypes.SET_DYNAMIC_TAGS,
    payload: { tags }
})


export const shareReportsActions = {
    setShareReportsImage,
    setShareReportsDescription,
    setShareReportsApprove,
    setShareReportsTag,
    setDestination,
    setShareReportsClassroom,
    setShareReportsKids,
    setDynamicTags,
}
