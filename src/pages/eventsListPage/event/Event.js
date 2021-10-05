import makeStyles from "@material-ui/core/styles/makeStyles";
import React, {memo, useEffect, useState} from "react";
import deleteIcon from "../../../data/assets/icons/deleteBtnIcon.jpg"
import EventItem from './EventItem'

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
        width: '60px',
        position: 'absolute',
        top: 27,
        right: 125,
        display: 'flex',
        justifyContent: 'space-between',
    },
    line: {
        width: '93vw',
        border: '1px solid #E2E2E2',
        marginLeft: '60px',
        marginTop: '22px',
    },
    delete: {
        cursor: 'pointer'
    },
    tagList: {
        display: 'flex',
    },
    tag: {
        marginRight: 10,
        color: '#00AE00',
        border: '1px solid #00AE00',
        borderRadius: '24px',
        padding: '4px 10px'
    }
}));

const Event = ({eventsList, monthSelect, yearSelect, handleChange, selectedCheckbox, disable}) => {
    const classes = useStyles();

    

    

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
