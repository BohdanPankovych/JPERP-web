import makeStyles from "@material-ui/core/styles/makeStyles";
import React, {memo, useEffect, useState} from "react";
import EasyReportPageTitles from "./eventsListPageTitles/EventsListPageTitles";
import EasyReportPageSelect from "../../reusableComponents/eventsListPageSelects/EventsListPageSelects";
import Event from "./event/Event";
import LocalisedDatePicker from "../editScreenPage/editScreenPageComponents/LocalisedDatePicker";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import FrontendRoutes from "../../data/constants/FrontendRoutes";
import {dateToD} from "../../data/helpers/timeHelper";
import Api from '../../data/api/Api'
import years from "../../data/constants/Year";
import jpMonths from "../../data/constants/JpMonths";


const useStyles = makeStyles((theme) => ({
    underHeaderBlock: {
        marginLeft: 15,
        marginRight: 20,
        [theme.breakpoints.up("sm")]: {
            marginRight: 30,
        },
        [theme.breakpoints.up("md")]: {
            marginLeft: 30,
            marginRight: 60,
        },
    },
    selects: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            flexDirection: "row"
        },
        flexDirection: "column",
        marginTop: 20,
    },
    fourReports: {
        color: '#FF0000',
        fontSize: '10px',
        padding: "5px 14px ",
        [theme.breakpoints.up("sm")]: {
            marginRight: '12px',
            padding: "5px 10px ",
        },
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
        height: '25px',
        fontSize: '0.75rem',
        [theme.breakpoints.up("sm")]: {
            height: '30px',
            fontSize: '0.875rem',
        },
    },
    reportBlock: {
        marginTop: '40px',
        width: "165px",
        [theme.breakpoints.up("md")]: {
            marginTop: '20px',
            display: "block",
        },
    },
    selectTitle: {
        fontSize: 14,
        marginLeft: 10,
        marginRight: 10,
        [theme.breakpoints.up("md")]: {
            marginRight: 20,
        },
    },

}));

const EventsListPage = ({
                            setGroup,
                            setMonth,
                            setYear,
                            setDay,
                            group,
                            month,
                            year,
                            gardenId,
                            selectedEvents,
                            gardenGroups,
                            setGardenGroups,
                            eventsList
                        }) => {
    const classes = useStyles();
    const [daySelect, setDaySelect] = useState('');
    const [disable, setDisable] = useState(false);
    const [disableBtn, setDisableBtn] = useState(true)
    const [disableDay, setDisableDay] = useState(true)

    useEffect(() => {
        if (gardenId) {
            Api.eventsList.getClasses(gardenId).then((res) => {
                let groups = [];
                groups.push({id: null, name: null})
                res.data?.map(val => {
                    groups.push({
                        id: val.id,
                        name: val.name
                    });
                });
                setGardenGroups(groups);
            }).catch((err) => console.log(err))
        }
    }, [gardenId]);

    useEffect(() => {
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
    }, [selectedEvents])

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

                        <div>
                            <LocalisedDatePicker
                                disable={disableDay}
                                format={'dd'}
                                value={daySelect ? daySelect : month && year ? `${year}/${month}` : null}
                                onChange={setDaySelect}
                            />
                            <span className={classes.selectTitle}>日</span>
                        </div>
                    </div>
                    <div className={classes.reportBlock}>
                        {/*<p className={classes.fourReports}>※一度に選べるレポートは4点までです。</p>*/}
                        <Button component={Link} to={FrontendRoutes.EDIT_REPORTS} className={classes.editReportBtn}
                                disabled={disableBtn} variant="contained" color="primary">
                            簡単レポートを編集
                        </Button>
                        {disableBtn ? (<div className={classes.fourReports}>※一度に選べるレポートは4点までです。</div>) : null}
                    </div>
                </div>
            </div>

            <Event eventsList={eventsList} disable={disable}/>
        </>
    );
}

export default memo(EventsListPage);
