import axios from 'axios';

const loginGrantString = window.localStorage.getItem("loginGrant");
const loginGrant = loginGrantString ? JSON.parse(loginGrantString) : null;

const headers = { Authorization: loginGrant && (loginGrant?.token_type  + " " + loginGrant?.access_token)}

const textExtencion = type => {
    const ext = type?.split('/')
    return ext ? '.' + ext[ext.length -1] : ''
}

const API = {
    garden: {
        getGardenId: () => axios.get('/api/v1/Garden', {headers}),
    },
    eventsList: {
        getImg: (garden_id, id) => axios.get(`/api/v1/Garden/${garden_id}/Img/doc/s/${id}.jpeg`, {headers}),
        getImgTwo: (garden_id, id, type) => axios.get(`/api/v1/Garden/${garden_id}/Img/doc/${id}${textExtencion(type)}`, {headers}),

        getEventsList: (garden_id, eventTypes) => axios.post(`/api/v1/Garden/${garden_id}/DocRec/search`, eventTypes, {headers}),
        getClasses: (garden_id) => axios.get( `/api/v1/Garden/${garden_id}/Cls`, {headers}),
        deleteEvent: (garden_id, event_id) => axios.delete(` /api/v1/Garden/${garden_id}/DocRec/${event_id}`, {headers})
    },
    editPage: {
        getCreatorsId: (garden_id) => axios.get(`/api/v1/Garden/${garden_id}/Staff`, {headers}),
        getCreatorName: (user_id) => axios.get(`/api/v1/Usr/${user_id}`, {headers})
    },
    previewPage: {
        getTagList: (garden_id) => axios.get(` /api/v1/Garden/${garden_id}/DocRec/tags`, {headers}),
        setApproveEvent: (garden_id, event_id) => axios.post(`/api/v1/Garden/${garden_id}/DocRec/${event_id}/approve`, {headers})
    },
    sharedDialog: {
        sendReport: (garden_id, DocRecUpsertRequest) => axios.post(`/api/v1/Garden/${garden_id}/DocRec`, DocRecUpsertRequest, {headers}),
    }
};

export default API;
