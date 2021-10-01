import React, {memo} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";


const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: '18px',
        fontWeight: 400,
    },
    redText: {
        color: '#FF0000',
        fontSize: '12px',
    },
    conditions: {
        marginRight: '10px',
        fontSize: '12px',
    },
    select: {
        fontSize: '12px',

    }

}));

const EventsListPageTitles = () => {
    const classes = useStyles();


    return <>
        <div>header</div>
        <p className={classes.title}>簡単レポート</p>
        <span className={classes.conditions}>作成条件 </span>
        <span className={classes.select}> (作成するクラスや日にちを選択) </span>
        <span className={classes.redText}> ※特定の組を選択しない場合は、園全体の園全体の投稿写真が検索されます</span>
    </>

}

export default memo(EventsListPageTitles)
