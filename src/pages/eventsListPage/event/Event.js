import React, {memo} from "react";
import EventItem from './EventItem'
import {dateToM} from "../../../data/helpers/timeHelper";

const Event = ({ gardenId, group, deleteEvent, parsedDay, eventsList, monthSelect, yearSelect, handleChange, selectedCheckbox, disable}) => {
    return (
        <>
            {eventsList.sort((a, b) => a - b)

                // .filter(y => {
            //     if (yearSelect) {
            //         return y.date.includes(yearSelect)
            //     }
            //     return y
            // }).filter(d => {
            //     if (parsedDay) {
            //         return d?.day.includes(parsedDay)
            //     }
            //     return d
            // }).filter(g => {
            //     if (group) {
            //         return g?.group.includes(group)
            //     }
            //     return g
            // })
            //     .filter(g => {
            //             if (group) {
            //                 return g?.group.includes(group)
            //             }
            //             return g
            //         })
                .filter(d => {
                    if (parsedDay) {
                        return d.docRec.dateTime.includes(yearSelect + '/' + monthSelect + '/' + parsedDay)
                    }
                    return d
                })
                .filter(f => {
                    if (monthSelect) {
                        return f.docRec.dateTime.includes(yearSelect + '/' + monthSelect)
                    }
                    return f
                })
                .filter(y => {
                        if (yearSelect) {
                            return y.docRec.dateTime.includes(yearSelect)
                        }
                        return y
                    })
                .map((e) => (
                <EventItem gardenId={gardenId} deleteEvent={deleteEvent} item={e} disable={disable} handleChange={handleChange} selectedCheckbox={selectedCheckbox} eventsList={eventsList}/>
            ))}
        </>

    );
}

export default memo(Event);
