import React, {memo} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    select: {
        width: 116,
        height: 23,
    },
    selectTitle: {
        fontSize: 12,
        marginLeft: 10,
        marginRight: 20,
    }
}));
const EventsListPageSelects = ({title, setValue}) => {
    const classes = useStyles();

    function handleChange(e) {
        setValue(e.target.value)
    }

    return <>
        <select className={classes.select} name="年">
            <option value=""></option>

        </select>
        <span className={classes.selectTitle}>{title}</span>
    </>
}

export default memo(EventsListPageSelects)
