import React, {memo} from "react";
import EventItem from './EventItem'

const Event = ({ gardenId, deleteEvent, eventsList, handleChange, selectedCheckbox, disable, setEventImage}) => {
    return (
        <>
            {eventsList.map((e) => (
                <EventItem
                    gardenId={gardenId}
                    deleteEvent={deleteEvent}
                    item={e} disable={disable}
                    handleChange={handleChange}
                    selectedCheckbox={selectedCheckbox}
                    eventsList={eventsList}
                    setEventImage={setEventImage}
                />
            ))}
        </>

    );
}

export default memo(Event);
