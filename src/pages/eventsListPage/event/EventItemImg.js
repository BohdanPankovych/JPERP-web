import React, {memo} from "react";


const EventItemImg = ({image, styles, ...props}) => {

    return (
            <img className={styles} src={image} alt="" {...props} />
        )
}

export default memo(EventItemImg);
