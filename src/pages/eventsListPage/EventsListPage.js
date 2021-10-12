import makeStyles from "@material-ui/core/styles/makeStyles";
import React, {memo, useEffect, useState} from "react";
import EasyReportPageTitles from "./eventsListPageTitles/EventsListPageTitles";
import EasyReportPageSelect from "../../reusableComponents/eventsListPageSelects/EventsListPageSelects";
import Event from "./event/Event";
import LocalisedDatePicker from "../editScreenPage/editScreenPageComponents/LocalisedDatePicker";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import FrontendRoutes from "../../data/constants/FrontendRoutes";
import {dateToD, qwe} from "../../data/helpers/timeHelper";
import MonthSelect from "./monthSelect/MonthSelect";
import Api from '../../data/api/Api'
import years from "../../data/constants/Year";
import jpMonths from "../../data/constants/JpMonths";


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

const EventsListPage = ({ setGroup, setMonth, setYear, setDay, group, month, year, day, gardenId, selectedEvents, gardenGroups, setGardenGroups, eventsList, deleteEvent, addSelectedEvent, removeSelectedEvent, setEventsListData}) => {
    const classes = useStyles();
    // const [group, setGroup] = useState('')
    const [daySelect, setDaySelect] = useState('');
    const [disable, setDisable] = useState(false);
    const [disableBtn, setDisableBtn] = useState(true)
    const [disableDay, setDisableDay] = useState(true)

    // console.log("GARDEN ID!!!!!!!!!!!!", gardenId)
    useEffect(() => {
        if (gardenId) {
            Api.eventsList.getClasses(gardenId).then((res)=>{
                let groups = [];
                res.data?.map(val=>{
                    groups.push({
                        id: val.id,
                        name:val.name
                    });
                });
                setGardenGroups(groups);
            }).catch((err)=>console.log(err))
        }
    }, [gardenId]);

    const handleChange = (obj) => {
        let exist = false;
        for (let i = 0; i < selectedEvents?.length; i++) {
            if (selectedEvents[i].docRec.id === obj.docRec.id) {
                exist = true;
                break;
            }
        }

        if (exist) {
            removeSelectedEvent(obj.docRec.id);
        } else {
            console.log(obj)
            addSelectedEvent(obj);
        }
    };

    useEffect(()=>{
        if (selectedEvents.length > 0 && selectedEvents.length < 4) {
            setDisable(false)
            setDisableBtn(false)
        } else {
            setDisable(true)
            setDisableBtn(false)
        }

        if (selectedEvents.length === 0) {
            setDisable(false)
            setDisableBtn(true)
        }
    },[selectedEvents])

    useEffect(() => {
        if (daySelect) {
            setDay(dateToD(daySelect))
        }
        if (year && month) {
            setDisableDay(false)
        } else {
            setDisableDay(true)
        }
    }, [year, month, daySelect])
    console.log('eventsList', eventsList)

    useEffect(() => {
        let test = qwe(year, month, day)
        console.log('test', test)
    },[year, month, day])

    //let testDate = eventsList.map(e => e.docRec.dateTime)
    //console.log('eventsList date', parsedDay)
    return (
        <>
            <div className={classes.underHeaderBlock}>
                <EasyReportPageTitles/>
                <div className={classes.flex}>
                    <div className={classes.selects}>
                        <EasyReportPageSelect title={'組'} options={gardenGroups} value={group} setValue={setGroup}/>
                        <EasyReportPageSelect title={'年'} options={years} value={year} setValue={setYear}/>
                        <EasyReportPageSelect title={'月'} options={jpMonths} value={month}
                                              setValue={setMonth}/>
                        {/*<MonthSelect title={'月'} setValue={setMonth}*/}
                        {/*             value={month}/>*/}

                        <LocalisedDatePicker
                            disable={disableDay}
                            format={'dd'}
                            value={daySelect ? daySelect : month && year ? `${year}/${month}` : null}
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

            <Event gardenId={gardenId} eventsList={eventsList} group={group} monthSelect={month} parsedDay={day}
                   deleteEvent={deleteEvent}
                   yearSelect={year} handleChange={handleChange} selectedCheckbox={selectedEvents}
                   disable={disable} setDisable={setDisable}/>
        </>
    );
}

export default memo(EventsListPage);
