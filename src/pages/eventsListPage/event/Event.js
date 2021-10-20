import React, {memo} from "react";
import EventItem from './EventItem'

const Event = ({ eventsList, disable }) => {
    return (
        <>
            {eventsList.map((e) => (
                <EventItem key={e.docRec.id} item={e} disable={disable}/>
            ))}
        </>

    );
}

export default memo(Event);
