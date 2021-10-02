import makeStyles from "@material-ui/core/styles/makeStyles";
import React, {memo, useEffect} from "react";


const useStyles = makeStyles((theme) => ({

    event: {
        marginTop: 62,
        marginLeft: 67,
        display: 'flex',
        position: 'relative',
    },
    image: {
        width: 87,
        height: 87,
        // background: '#C4C4C4'
    },
    imgDescriptionBlock: {
        marginTop: '-20px',
        marginLeft: '37px',
    },
    imgTitle: {
        fontSize: 14,
    },
    imgDescr: {
        fontSize: 12,
        marginTop: 20,
    },
    checkbox: {
        position: 'absolute',
        top: 27,
        right: 125
    },
    line: {
        width: '93vw',
        border: '1px solid #E2E2E2',
        marginLeft: '60px',
        marginTop: '22px',
    }
}));

const Event = ({event}) => {
    const classes = useStyles();

    console.log('event', event)
    return (
        <>
            <div className={classes.event}>
                <div className={classes.image}>
                    <img src={event.img} alt=""/>
                </div>
                <div className={classes.imgDescriptionBlock}>
                    <p className={classes.imgTitle}>{event.title}</p>
                    <p className={classes.imgDescr}>{event.description}</p>
                </div>
                <div className={classes.checkbox}>
                    <input type="checkbox" id="scales" name="scales"/>
                </div>
            </div>
            <div className={classes.line}></div>
        </>

    );
}

export default memo(Event);
