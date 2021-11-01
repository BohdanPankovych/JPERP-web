import Immutable from 'immutable';
import {trailingZero} from "../helpers/timeHelper";

const FilterProps = new Immutable.Record( {
  group: '',
  month: trailingZero(new Date().getMonth() + 1),
  year: new Date().getFullYear() + '',
  day: null,
  offset: 0,
  }
);

export default FilterProps;
