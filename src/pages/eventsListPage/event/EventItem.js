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

const EventItem = ({item, disable, handleChange, selectedCheckbox }) => {
const classes = useStyles();

 let checked = false;

const isChecked = (id) => {
    let check = false;
    for(let i=0; i < selectedCheckbox.length; i++){
        if(selectedCheckbox[i].id === id){
            check = true;
            break;
        }
    }
    return check;
}

useEffect(()=>{
    
}, [selectedCheckbox, disable])

return  <>
<div className={classes.event}>
    <div className={classes.image}>
        <img src={item.img} alt=""/>
    </div>
    <div className={classes.imgDescriptionBlock}>
        {/*<p className={classes.imgTitle}>{event.title}</p>*/}
        <div className={classes.tagList}>{item.tagList.map(t => (
            <div className={classes.tag}>{t}</div>))}</div>

        <p className={classes.imgDescr}>{item.description}</p>
    </div>
    <div className={classes.checkbox}>
        {console.log(item.id, checked, checked ? false : disable)}
        <input onChange={() => handleChange(item)}
               selected={isChecked(item.id)} type="checkbox"
               disabled={isChecked(item.id) ? false : disable}
               // disabled={selectedCheckbox.includes(e.id) && disable ? true: false}
        />
        <img className={classes.delete} src={deleteIcon} alt=""/>
    </div>
</div>
<div className={classes.line}></div>
</>
}

export default EventItem;