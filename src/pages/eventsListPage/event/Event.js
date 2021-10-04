import makeStyles from "@material-ui/core/styles/makeStyles";
import React, {memo, useEffect, useState} from "react";
import deleteIcon from "../../../data/assets/icons/deleteBtnIcon.jpg"


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
                <>
                    <div className={classes.event}>
                        <div className={classes.image}>
                            <img src={e.img} alt=""/>
                        </div>
                        <div className={classes.imgDescriptionBlock}>
                            {/*<p className={classes.imgTitle}>{event.title}</p>*/}
                            <div className={classes.tagList}>{e.tagList.map(t => (
                                <div className={classes.tag}>{t}</div>))}</div>

                            <p className={classes.imgDescr}>{e.description}</p>
                        </div>
                        <div className={classes.checkbox}>
                            <input onChange={() => handleChange(e)}
                                   selected={selectedCheckbox.includes(e.id)} type="checkbox" disabled={disable ? true: false}/>
                            <img className={classes.delete} src={deleteIcon} alt=""/>
                        </div>
                    </div>
                    <div className={classes.line}></div>
                </>
            ))}
        </>

    );
}

export default memo(Event);
