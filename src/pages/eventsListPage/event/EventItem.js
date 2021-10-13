import makeStyles from "@material-ui/core/styles/makeStyles";
import React, {memo, useCallback, useEffect, useState} from "react";
import deleteIcon from "../../../assets/icons/deleteBtnIcon.jpg"
import ModalDelete from "../modalDelete/ModalDelete";
import Api from "../../../data/api/Api";


const useStyles = makeStyles(() => ({

    event: {
        marginTop: 62,
        marginLeft: 67,
        display: 'flex',
        position: 'relative',
    },
    image: {
        maxWidth: 87,
        maxHeight: 87,
        // background: '#C4C4C4'
    },
    imgMain: {
        width: 'auto',
        height: 'auto',
        maxWidth: '100px',
        maxHeight: '100px',
        display: 'block',
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
        width: '70vw',
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
        height: '20px',
        marginRight: 10,
        color: '#00AE00',
        border: '1px solid #00AE00',
        borderRadius: '24px',
        padding: '4px 10px'
    }
}));

const EventItem = ({gardenId, deleteEvent, item, disable, handleChange, selectedCheckbox, eventsList, setEventImage}) => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const deleteModal = useCallback(() => {
        setOpen(true);
    },[])

    const isChecked = (id, checkName) => {
        let check = false;
        for (let i = 0; i < selectedCheckbox.length; i++) {
            if (selectedCheckbox[i].docRec.id === id) {
                check = true;
                break;
            }
        }
        return check
    }

    useEffect(() => {
        // console.log('selectedCheckbox', selectedCheckbox)
        // console.log('item', item)
    }, [selectedCheckbox, disable])

    useEffect(() => {
        Api.eventsList.getImg(gardenId, item.docRec.id)
            .then(((res) => {
                let reader = new window.FileReader();
                reader.readAsDataURL(res.data);
                reader.onload = function () {
                    let imageDataUrl = reader.result;
                    setEventImage(item.docRec.id, imageDataUrl);
                };
            }))
            .catch((err) => console.error(err))
    },[gardenId, item])

    return <>
        <ModalDelete open={open} setOpen={setOpen} garden_id={gardenId} event_id={item.docRec.id} deleteEvent={deleteEvent} eventsList={eventsList}/>
        <div className={classes.event}>
            <div className={classes.image}>
                <img className={classes.imgMain} src={item?.docRec?.image} alt=""/>
            </div>
            <div className={classes.imgDescriptionBlock}>
                {/*<p className={classes.imgTitle}>{event.title}</p>*/}
                <div className={classes.tagList}>{item?.tags?.map(t => (
                    <div className={classes.tag}>{t?.value}</div>))}</div>

                <p className={classes.imgDescr}>{item.docRec.comment}</p>
            </div>
            <div className={classes.checkbox}>
                {/*{console.log(item.id, checked, checked ? false : disable)}*/}
                <input onChange={() => handleChange(item)}
                       checked={isChecked(item.docRec.id)} type="checkbox"
                       disabled={isChecked(item.docRec.id) ? false : disable}
                    // disabled={selectedCheckbox.includes(e.id) && disable ? true: false}
                />
                <img onClick={deleteModal} className={classes.delete} src={deleteIcon} alt=""/>
            </div>
        </div>
        <div className={classes.line}/>
    </>
}

export default memo(EventItem);
