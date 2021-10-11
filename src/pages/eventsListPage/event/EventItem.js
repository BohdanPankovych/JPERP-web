import makeStyles from "@material-ui/core/styles/makeStyles";
import React, {memo, useCallback, useEffect, useState} from "react";
import deleteIcon from "../../../assets/icons/deleteBtnIcon.jpg"
import ModalDelete from "../modalDelete/ModalDelete";
import Api from "../../../data/api/Api";


const useStyles = makeStyles((theme) => ({

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

const EventItem = ({gardenId, deleteEvent, item, disable, handleChange, selectedCheckbox, eventsList}) => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const deleteModal = useCallback((e) => {
        setOpen(true);
    },[])

    const isChecked = (id) => {
        let check = false;
        for (let i = 0; i < selectedCheckbox.length; i++) {
            if (selectedCheckbox[i].docRec.id === id) {
                check = true;
                break;
            }
        }
        return check;
    }

    useEffect(() => {
        // console.log('selectedCheckbox', selectedCheckbox)
        // console.log('item', item)
    }, [selectedCheckbox, disable])

    const [img, setImg] = useState();

    console.log('IMAGE!!!', img)
    useEffect(() => {
        Api.eventsList.getImg(gardenId, item.docRec.id,)
            .then(((res) => {
                
                // console.log('Buffer', new Buffer(res.data).toString("base64"))
                console.log('res', res)
                console.log("uInt8 array", new Uint8Array(res.data))
                console.log("BLOB!!!", new Blob( new Uint8Array(res.data), {type : 'image/jpeg'}))
                console.log("media type", new Blob(item.docRec.mediaSha256))
                setImg(res.data);
            }))
            .catch((err) => console.error(err))

        // Api.eventsList.getImgTwo(gardenId, item.docRec.id, item.docRec.mediaType)
        //     .then(((res) => {
        //         // setImg(res.data);
        //         console.log('res2', res)
        //         console.log("uInt8 array2", new Uint8Array(res.data))
        //         console.log("BLOB!!!2", new Blob( new Uint8Array(res.data), {type : 'image/jpeg'}))
        //         setImg(res.data);
        //     }))
        //     .catch((err) => console.error(err))

    },[gardenId, item])

    return <>
        <ModalDelete open={open} setOpen={setOpen} id={item.docRec.id} deleteEvent={deleteEvent} eventsList={eventsList}/>
        <div className={classes.event}>
            <div className={classes.image}>
                <img className={classes.imgMain} src={img ? URL.createObjectURL(new Blob( new Uint8Array(img), {type : 'image/jpeg'})) : null} alt=""/>
                {/* <img className={classes.imgMain} src={img} alt=""/> */}
            </div>
            <div className={classes.imgDescriptionBlock}>
                {/*<p className={classes.imgTitle}>{event.title}</p>*/}
                <div className={classes.tagList}>{item.tags.map(t => (
                    <div className={classes.tag}>{t?.value}</div>))}</div>

                <p className={classes.imgDescr}>{item.docRec.comment}</p>
            </div>
            <div className={classes.checkbox}>
                {/*{console.log(item.id, checked, checked ? false : disable)}*/}
                <input onChange={() => handleChange(item)}
                       selected={isChecked(item.docRec.id)} type="checkbox"
                       disabled={isChecked(item.docRec.id) ? false : disable}
                    // disabled={selectedCheckbox.includes(e.id) && disable ? true: false}
                />
                <img onClick={deleteModal} className={classes.delete} src={deleteIcon} alt=""/>
            </div>
        </div>
        <div className={classes.line}></div>
    </>
}

export default memo(EventItem);
