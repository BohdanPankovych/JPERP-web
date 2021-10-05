import Immutable from "immutable";

const EventDTO = new Immutable.Record({
    id: 0,
    img: null,
    title: "",
    tagList: [],
    description: "",
    date: "",
    month: '',
  });
  
  export default EventDTO;