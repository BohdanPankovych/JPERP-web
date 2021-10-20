import Immutable from "immutable";

const EventDTO = new Immutable.Record({
    docRec: {
      id: "",
      gardenId: "",
      dateTime: "",
      comment: "",
      mediaSha256: null,
      mediaType: "",
      remarks: "",
      effectiveFrom: "",
      effectiveUntil: "",
      createdUsrId: "",
      lastModified: "",
      lastModifiedUsrId: "",
      approved: false,
      image: ""
    },
    maybeAdminTag: [],
    maybeAppliTag: [],
    tags: [],
    textTags: [],
    clsTags: [],
    childTags: [],
    staffId: null,
    staffName: '',
    purchased: '',
  });

  export default EventDTO;
