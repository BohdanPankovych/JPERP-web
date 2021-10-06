import Immutable from "immutable";

const EventDTO = new Immutable.Record({
  parent: { id: "", name: "", kind: "" },
  children: [],
});

export default EventDTO;
