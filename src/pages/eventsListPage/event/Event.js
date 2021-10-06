import React, {memo} from "react";
import EventItem from './EventItem'

const Event = ({ group, deleteEvent, parsedDay, eventsList, monthSelect, yearSelect, handleChange, selectedCheckbox, disable}) => {
    return (
        <>
            {eventsList.sort((a, b) => a - b).filter(f => {
                if (monthSelect) {
                    return f.month.toLowerCase().includes(monthSelect.toLowerCase())
                }
                return f
            }).filter(y => {
                if (yearSelect) {
                    return y.date.includes(yearSelect)
                }
                return y
            }).filter(d => {
                if (parsedDay) {
                    return d?.day.includes(parsedDay)
                }
                return d
            }).filter(g => {
                if (group) {
                    return g?.group.includes(group)
                }
                return g
            }).map((e) => (
                <EventItem deleteEvent={deleteEvent} item={e} disable={disable} handleChange={handleChange} selectedCheckbox={selectedCheckbox} eventsList={eventsList}/>
            ))}
        </>

    );
}

export default memo(Event);
