import makeStyles from "@material-ui/core/styles/makeStyles";
import React, {memo, useEffect} from "react";
import EasyReportPageTitles from "./eventsListPageTitles/EventsListPageTitles";
import EasyReportPageSelect from "../../reusableComponents/eventsListPageSelects/EventsListPageSelects";
import {setEventsListData} from "../../data/redux/eventsList/eventsListActions";
import mock from "../../data/mock/mockData";
import Event from "./event/Event";

const useStyles = makeStyles((theme) => ({
    underHeaderBlock: {
        marginLeft: 30,
        marginRight: 60,
    },
    selects: {
        marginTop: 20,
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
        width: '130px',
        height: '30px',
        background: '#00AE00',
        color: 'white',
        border: '1px solid #00AE00',
        borderRadius: '5px',
        fontSize: '12px',
        marginLeft: '15px',
    },
    reportBlock: {
        position: 'relative',
        marginTop: '25px',
    },

}));

const EventsListPage = ({eventsList, setEventsListData}) => {
    const classes = useStyles();

    useEffect(() => {
        setEventsListData(mock.eventsList)
    }, []);

    // console.log('eventsList', eventsList)
    return (
        <>
            <div className={classes.underHeaderBlock}>
                <EasyReportPageTitles/>
                <div className={classes.flex}>
                    <div className={classes.selects}>
                        <EasyReportPageSelect title={'組'}/>
                        <EasyReportPageSelect title={'年'}/>
                        <EasyReportPageSelect title={'月'}/>
                        <EasyReportPageSelect title={'日'}/>
                    </div>
                    <div className={classes.reportBlock}>
                        {/*<p className={classes.fourReports}>※一度に選べるレポートは4点までです。</p>*/}
                        <div className={classes.btns}>
                            <button className={classes.editReportBtn}>簡単レポートを編集</button>
                        </div>

                    </div>
                </div>
            </div>
            {eventsList.map((e) => (
                <Event key={e.id} event={e}/>
            ))}
        </>
    );
}

export default memo(EventsListPage);
