import Immutable from "immutable";
import img1 from "../mock/mockImg/img1.png";

const EventDTO = new Immutable.Record({
    docRec: null,
    maybeAdminTag: [],
    maybeAppliTag: [],
    tags: [],
    textTags: [],
    clsTags: [],
    childTags: [],
    staffId: null,
    staffName: '',
    purchased: '',
    // id: 0,
    // img: null,
    // title: "",
    // tagList: [],
    // description: "",
    // date: "",
    // month: '',
    // day: '',
    // group: '',
  });

  export default EventDTO;
