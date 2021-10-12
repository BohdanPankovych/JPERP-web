import React, {memo} from "react";
import EventItem from './EventItem'
import {dateToM} from "../../../data/helpers/timeHelper";

const Event = ({ gardenId, group, deleteEvent, parsedDay, eventsList, monthSelect, yearSelect, handleChange, selectedCheckbox, disable}) => {
    return (
        <>
            {eventsList.map((e) => (
                <EventItem gardenId={gardenId} deleteEvent={deleteEvent} item={e} disable={disable} handleChange={handleChange} selectedCheckbox={selectedCheckbox} eventsList={eventsList}/>
            ))}
        </>

    );
}

export default memo(Event);
