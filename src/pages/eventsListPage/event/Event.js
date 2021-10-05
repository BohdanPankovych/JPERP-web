import React, {memo} from "react";
import EventItem from './EventItem'

const Event = ({ eventsList, monthSelect, yearSelect, handleChange, selectedCheckbox, disable}) => {
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
            }).map((e) => (
                <EventItem item={e} disable={disable} handleChange={handleChange} selectedCheckbox={selectedCheckbox}/>
            ))}
        </>

    );
}

export default memo(Event);
