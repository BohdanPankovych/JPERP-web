import makeStyles from "@material-ui/core/styles/makeStyles";
import React, {memo} from "react";
import EasyReportPageTitles from "./eventsListPageTitles/EventsListPageTitles";
import EasyReportPageSelect from "../../reusableComponents/eventsListPageSelects/EventsListPageSelects";

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
        top: -34,
        left: 50,
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
    event: {
        marginTop: 62,
        marginLeft: 67,
        display: 'flex',
        position: 'relative',
    },
    image: {
        width: 87,
        height: 87,
        background: '#C4C4C4'
    },
    imgDescriptionBlock: {
        marginTop: '-20px',
        marginLeft: '37px',
    },
    imgTitle: {
        fontSize: 14,
    },
    imgDescr: {
        fontSize: 12,
    },
    checkbox: {
        position: 'absolute',
        top: 27,
        right: 125
    },
    line: {
        width: '93vw',
        border: '1px solid #E2E2E2',
        marginLeft: '60px',
        marginTop: '22px',
    }
}));

const EventsListPage = ({}) => {
    const classes = useStyles();

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
                        <p className={classes.fourReports}>※一度に選べるレポートは4点までです。</p>
                        <div className={classes.btns}>
                            <button className={classes.deleteBtn}>削除する</button>
                            <button className={classes.editReportBtn}>簡単レポートを編集</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className={classes.event}>
                <div className={classes.image}></div>
                <div className={classes.imgDescriptionBlock}>
                    <p className={classes.imgTitle}>橋本凛</p>
                    <p className={classes.imgDescr}>テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります</p>
                </div>
                <div className={classes.checkbox}>
                    <input type="checkbox" id="scales" name="scales"/>
                </div>
            </div>
            <div className={classes.line}></div>
        </>
    );
}

export default memo(EventsListPage);
