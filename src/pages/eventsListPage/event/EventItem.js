import makeStyles from "@material-ui/core/styles/makeStyles";
import React, {memo, useCallback, useEffect, useState} from "react";
import deleteIcon from "../../../assets/icons/deleteBtnIcon.jpg"
import ModalDelete from "../modalDelete/ModalDelete";
import Api from "../../../data/api/Api";
import EventItemImg from "./EventItemImg";
import {connect} from "react-redux";
import {addSelectedEvent, removeSelectedEvent} from "../../../data/redux/selectedEvents/selectedEventsActions";
import {setEventImage} from "../../../data/redux/eventsList/eventsListActions";

const useStyles = makeStyles((theme) => ({
    event: {
        marginLeft: 10,
        marginRight: 15,
        marginTop: 30,
        display: 'flex',
        [theme.breakpoints.up("sm")]: {
            marginLeft: 20,
            marginRight: 35,
        },
        [theme.breakpoints.up("md")]: {
            marginLeft: 35,
            marginRight: 60,
        },
        [theme.breakpoints.up("lg")]: {
            marginTop: 60,
            marginLeft: 65,
            marginRight: 120,
        },
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
    contentBlock: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between"
    },
    content: {
        marginLeft: '15x',
        width: '45vw',
        [theme.breakpoints.up("xs")]: {
            marginLeft: '20px',
        },
        [theme.breakpoints.up("sm")]: {
            width: '65vw',
        },
        [theme.breakpoints.up("md")]: {
            marginLeft: '35px',
            width: '70vw',

        },
    },
    imgTitle: {
        fontSize: 14,
    },
    imgDescr: {
        fontSize: 12,
        marginTop: 16,
    },
    checkbox: {
        width: '50px',
        [theme.breakpoints.up("sm")]: {
            width: '60px',
        },
        marginTop: 27,
        // position: 'absolute',
        display: 'flex',
        justifyContent: 'space-between',
    },
    line: {
        width: '93vw',
        border: '1px solid #E2E2E2',
        marginTop: '22px',
        marginLeft: 20,
        [theme.breakpoints.up("sm")]: {
            marginLeft: 30,
        },
        [theme.breakpoints.up("md")]: {
            marginLeft: 60,
        },
    },
    delete: {
        cursor: 'pointer',
        height: "fit-content"
    },
    tagList: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    tag: {
        height: '20px',
        marginRight: 10,
        marginBottom: 4,
        color: '#00AE00',
        border: '1px solid #00AE00',
        borderRadius: '24px',
        padding: '4px 10px'
    },
    topContentBlock: {
        display: "flex",
        justifyContent: "space-between"
    }
}));

const EventItem = ({
                       gardenId,
                       item,
                       disable,
                       selectedCheckbox,
                       setEventImage,
                       removeSelectedEvent,
                       addSelectedEvent,
                       key
                   }) => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const deleteModal = useCallback(() => {
        setOpen(true);
    }, [])

    const handleChange = (obj) => {
        let exist = false;
        for (let i = 0; i < selectedCheckbox?.length; i++) {
            if (selectedCheckbox[i].docRec.id === obj.docRec.id) {
                exist = true;
                break;
            }
        }

        if (exist) {
            removeSelectedEvent(obj.docRec.id);
        } else {
            addSelectedEvent(obj);
        }
    };

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
        if (gardenId && item?.docRec && !item?.docRec?.image) {
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
        }
    }, [gardenId, item.docRec.id, item.docRec.image])

    return <React.Fragment key={key}>
        <ModalDelete open={open} setOpen={setOpen} garden_id={gardenId} event_id={item.docRec.id}/>
        <div className={classes.event}>
            <div className={classes.image}>
                <EventItemImg image={item?.docRec?.image} styles={classes.imgMain}/>
            </div>
            <div className={classes.contentBlock}>
                <div className={classes.content}>
                    {/*<p className={classes.imgTitle}>{event.title}</p>*/}
                    <div className={classes.tagList}>
                        {item?.tags?.map((t, id) => (
                            <div key={"tags" + id} className={classes.tag}>{t?.value}</div>))}
                        {item?.clsTags?.map((t, id) => (
                            <div key={"clsTags" + id} className={classes.tag}>{t?.value}</div>))}
                        {item?.childTags?.map((t, id) => (
                            <div key={"childTags" + id} className={classes.tag}>{t?.value}</div>))}
                    </div>
                    <p className={classes.imgDescr}>{item.docRec.comment}</p>
                </div>
                <div className={classes.checkbox}>
                    <input onChange={() => handleChange(item)}
                           checked={isChecked(item.docRec.id)} type="checkbox"
                           disabled={isChecked(item.docRec.id) ? false : disable}
                        // disabled={selectedCheckbox.includes(e.id) && disable ? true: false}
                    />
                    <img onClick={deleteModal} className={classes.delete} src={deleteIcon} alt=""/>
                </div>
            </div>
        </div>
        <div className={classes.line}/>
    </React.Fragment>
}

export default connect(state => ({
        gardenId: state.common.get("gardenId"),
        selectedCheckbox: state.selectedEvents.get('selects')?.toJS(),
    }
), {addSelectedEvent, removeSelectedEvent, setEventImage})(
    memo(EventItem));
