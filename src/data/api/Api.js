import axios from 'axios';


const API = {
    garden: {
        getGardenId: () => axios.get('/api/v1/Garden'),
    },
    eventsList: {
        getEventsList: (garden_id) => axios.post(`/api/v1/Garden/${garden_id}/DocRec/search`)
    },
    previewPage: {
      getTagList: (garden_id) => axios.get(` api/v1/Garden/${garden_id}/DocRec/tags`)
    }
};

export default API;
