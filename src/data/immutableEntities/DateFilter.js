import Immutable from 'immutable';
import {dateToYMD} from "../helpers/timeHelper";


const TimeFilter = new Immutable.Record( {
    day: dateToYMD(new Date())
});

export default TimeFilter;
