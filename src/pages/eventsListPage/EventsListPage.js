import makeStyles from "@material-ui/core/styles/makeStyles";
import React, {memo, useEffect, useState} from "react";
import EasyReportPageTitles from "./eventsListPageTitles/EventsListPageTitles";
import EasyReportPageSelect from "../../reusableComponents/eventsListPageSelects/EventsListPageSelects";
import {setEventsListData} from "../../data/redux/eventsList/eventsListActions";
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

const EventsListPage = ({selectedEvents, setSelectedEvents, eventsList, setEventsListData}) => {
    const classes = useStyles();
    const [monthSelect, setMonthSelect] = useState('');
    const [yearSelect, setYearSelect] = useState('');
    const [selectedDate, handleDateChange] = useState(null);
    const [disable, setDisable] = useState(false)

    useEffect(() => {
        setEventsListData(mock.eventsList)
    }, []);

    const handleChange = (id) => {
        const findIdx = selectedEvents?.indexOf(id);

        if (findIdx > -1) {
            selectedEvents?.splice(findIdx, 1);
        } else {
            selectedEvents?.push(id);
        }

        if (selectedEvents?.length === 4) {
            setDisable(true)
        } else{
            setDisable(false)
        }
        setSelectedEvents(selectedEvents);
        // console.log('selectedCheckbox', selectedEvents);
        // console.log(disable)
    };



    return (
        <>
            <div className={classes.underHeaderBlock}>
                <EasyReportPageTitles/>
                <div className={classes.flex}>
                    <div className={classes.selects}>
                        <EasyReportPageSelect title={'組'} />
                        <EasyReportPageSelect title={'年'} options={year} value={yearSelect} setValue={setYearSelect}/>
                        <EasyReportPageSelect title={'月'} options={month} value={monthSelect} setValue={setMonthSelect}/>
                        <LocalisedDatePicker
                            format={'dd'}
                            value={selectedDate}
                            onChange={handleDateChange}
                        />
                        <span className={classes.selectTitle}>日</span>
                        {/*<EasyReportPageSelect title={'日'}/>*/}
                    </div>
                    <div className={classes.reportBlock}>
                        {/*<p className={classes.fourReports}>※一度に選べるレポートは4点までです。</p>*/}

                        <div className={classes.btns}>
                            <Button component={Link} to={FrontendRoutes.EDIT_REPORTS} className={classes.editReportBtn} disabled={disable ? false : true} variant="contained" color="primary">
                                簡単レポートを編集
                            </Button>

                        </div>

                    </div>
                </div>
            </div>

            <Event eventsList={eventsList} monthSelect={monthSelect} yearSelect={yearSelect} handleChange={handleChange} selectedCheckbox={selectedEvents} disable={disable} setDisable={setDisable}/>
        </>
    );
}

export default memo(EventsListPage);
