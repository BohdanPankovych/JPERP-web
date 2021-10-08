import axios from 'axios';


const API = {
    garden: {
        getGardenId: () => axios.get('/api/v1/Garden'),
    },
    eventsList: {
        getEventsList: (garden_id, eventTypes) => axios.post(`/api/v1/Garden/${garden_id}/DocRec/search`, eventTypes),
        getClasses: () => axios.get(' /api/v1/Cls'),
        deleteEvent: (garden_id, event_id) => axios.delete(` /api/v1/Garden/${garden_id}/DocRec/${event_id}`)
    },
    editPage: {
        getCreatorsId: () => axios.get(' /api/v1/Staff/'),
        getCreatorName: (user_id) => axios.get(`/api/v1/Usr/${user_id}`)
    },
    previewPage: {
        getTagList: (garden_id) => axios.get(` /api/v1/Garden/${garden_id}/DocRec/tags`),
        setApproveEvent: (garden_id, event_id) => axios.post(`/api/v1/Garden/${garden_id}/DocRec/${event_id}/approve`)
    },
    sharedDialog: {
        sendReport: (garden_id, DocRecUpsertRequest) => axios.post(`/api/v1/Garden/${garden_id}/DocRec`, DocRecUpsertRequest),
    }
};

export default API;
