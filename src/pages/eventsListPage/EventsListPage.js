import makeStyles from "@material-ui/core/styles/makeStyles";
import React, {memo, useEffect, useState} from "react";
import EasyReportPageTitles from "./eventsListPageTitles/EventsListPageTitles";
import EasyReportPageSelect from "../../reusableComponents/eventsListPageSelects/EventsListPageSelects";
import {deleteEvent, setEventsListData} from "../../data/redux/eventsList/eventsListActions";
import mock from "../../data/mock/mockData";
import Event from "./event/Event";
import year from "../../data/constants/Year";
import month from "../../data/constants/Month";
import LocalisedDatePicker from "../editScreenPage/editScreenPageComponents/LocalisedDatePicker";
import deleteIcon from "../../data/assets/icons/deleteBtnIcon.jpg";
import Button from "@material-ui/core/Button";
import {setSelectedEvents} from "../../data/redux/selectedEvents/selectedEventsActions";
import {Link} from "react-router-dom";
import FrontendRoutes from "../../data/constants/FrontendRoutes";
import {dateToD, dateToY, dateToYMD} from "../../data/helpers/timeHelper";
import jpMonths from "../../data/constants/JpMonths";
import {MenuItem, TextField} from "@material-ui/core";
import MonthSelect from "./monthSelect/MonthSelect";
import groups from "../../data/constants/Groups";

const useStyles = makeStyles((theme) => ({
    underHeaderBlock: {
        marginLeft: 30,
        marginRight: 60,
    },
    selects: {
        marginTop: 20,
        "& .MuiOutlinedInput-root": {
            height: '23px',
            width: '116px',
        }
    },
    fourReports: {
        color: '#FF0000',
        fontSize: '12px',
        position: 'absolute',
        top: 20,
        left: 18,
    },
    flex: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    deleteBtn: {
        width: '130px',
        height: '30px',
        background: '#FF0000',
        color: 'white',
        border: '1px solid #FF0000',
        borderRadius: '5px',
        fontSize: '12px',
    },
    editReportBtn: {
        width: '146',
        height: '30px',
        // background: '#00AE00',
        // color: 'white',
        // border: '1px solid #00AE00',
        // borderRadius: '5px',
        // fontSize: '12px',
        // marginLeft: '15px',
        // cursor: "pointer",
        // "&:hover": {
        //     backgroundColor: "#1db51d",
        //     cursor: "pointer",
        // },
    },
    reportBlock: {
        position: 'relative',
        marginTop: '25px',
    },
    selectTitle: {
        fontSize: 12,
        marginLeft: 10,
        marginRight: 20,
    },

}));

const EventsListPage = ({selectedEvents, setSelectedEvents, eventsList, deleteEvent, addSelectedEvent, removeSelectedEvent, setEventsListData}) => {
    const classes = useStyles();
    const [group, setGroup] = useState('')
    const [monthSelect, setMonthSelect] = useState('');
    const [yearSelect, setYearSelect] = useState('');
    const [daySelect, setDaySelect] = useState('');
    const [parsedDay, setParsedDay] = useState('');
    const [selectedDate, handleDateChange] = useState(null);
    const [disable, setDisable] = useState(false);
    const [disableBtn, setDisableBtn] = useState(true)
    const [disableDay, setDisableDay] = useState(true)

    // useEffect(() => {
    //     setEventsListData(mock.eventsList)
    // }, []);
    //console.log("Selected", selectedEvents);

    const handleChange = (obj) => {
        let exist = false;
        for (let i = 0; i < selectedEvents?.length; i++) {
            if (selectedEvents[i].docRec.id === obj.docRec.id) {
                exist = true;
                //index = i;
                break;
            }
        }

        if (exist) {
            removeSelectedEvent(obj.docRec.id);
        } else {
            console.log(obj)
            addSelectedEvent(obj);
        }
        
        //setSelectedEvents(selectedEvents);
    };

    useEffect(()=>{
        if (selectedEvents.length > 0 && selectedEvents.length < 4) {
            setDisable(false)
            setDisableBtn(false)
        } else {
            setDisable(true)
        }

        if (selectedEvents.length === 0) {
            setDisable(false)
            setDisableBtn(true)
        }
    },[selectedEvents])

    useEffect(() => {
        if (daySelect) {
            setParsedDay(dateToD(daySelect))
        }
        if (yearSelect && monthSelect) {
            setDisableDay(false)
        } else {
            setDisableDay(true)
        }
    }, [yearSelect, monthSelect, daySelect])

    //let testDate = eventsList.map(e => e.docRec.dateTime)
    //console.log('eventsList date', parsedDay)
    return (
        <>
            <div className={classes.underHeaderBlock}>
                <EasyReportPageTitles/>
                <div className={classes.flex}>
                    <div className={classes.selects}>
                        <EasyReportPageSelect title={'組'} options={groups} value={group} setValue={setGroup}/>
                        <EasyReportPageSelect title={'年'} options={year} value={yearSelect} setValue={setYearSelect}/>
                        {/*<EasyReportPageSelect title={'月'} options={month} value={monthSelect}*/}
                        {/*                      setValue={setMonthSelect}/>*/}
                        <MonthSelect title={'月'} setValue={setMonthSelect}
                                     value={monthSelect}/>

                        <LocalisedDatePicker
                            disable={disableDay}
                            format={'dd'}
                            value={daySelect ? daySelect : monthSelect && yearSelect ? `${yearSelect}/${monthSelect}` : null}
                            onChange={setDaySelect}
                        />
                        <span className={classes.selectTitle}>日</span>
                        {/*<EasyReportPageSelect title={'日'}/>*/}
                    </div>
                    <div className={classes.reportBlock}>
                        {/*<p className={classes.fourReports}>※一度に選べるレポートは4点までです。</p>*/}

                        <div className={classes.btns}>
                            <Button component={Link} to={FrontendRoutes.EDIT_REPORTS} className={classes.editReportBtn}
                                    disabled={disableBtn} variant="contained" color="primary">
                                簡単レポートを編集
                            </Button>
                            {disableBtn ? (<p className={classes.fourReports}>※一度に選べるレポートは4点までです。</p>) : (null)}

                        </div>

                    </div>
                </div>
            </div>

            <Event eventsList={eventsList} group={group} monthSelect={monthSelect} parsedDay={parsedDay}
                   deleteEvent={deleteEvent}
                   yearSelect={yearSelect} handleChange={handleChange} selectedCheckbox={selectedEvents}
                   disable={disable} setDisable={setDisable}/>
        </>
    );
}

export default memo(EventsListPage);
