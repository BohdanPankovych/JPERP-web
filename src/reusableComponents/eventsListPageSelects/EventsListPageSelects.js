import React, {memo, useCallback, useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {MenuItem, TextField} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    select: {
        width: 116,
        height: 23,
    },
    selectTitle: {
        fontSize: 12,
        marginLeft: 10,
        marginRight: 20,
    },
    selectInput: {
        "& .MuiOutlinedInput-root": {
          height: '23px'
        },
        "& .MuiOutlinedInput-input": {
            padding: "5px",
        },
        width: "116px",
    },
}));
const EventsListPageSelects = ({title, value, setValue, options}) => {
    const classes = useStyles();
    // const [val, setSelectedValue] = useState("");

    const handleChange = useCallback((e) => {
        setValue(e.target.value)
    },[])

    return <>
        <TextField
            select
            className={classes.selectInput}
            variant="outlined"
            value={value}
            onChange={handleChange}
        >
            {options?.map((option) => (
                <MenuItem key={option} value={option}>
                    {option}
                </MenuItem>
            ))}
        </TextField>
        {/*<select className={classes.select} name="年">*/}
        {/*    {options?.map(o => (*/}
        {/*        <option value={o}>{o}</option>*/}
        {/*    ))}*/}
        {/*</select>*/}
        <span className={classes.selectTitle}>{title}</span>
    </>
}

export default memo(EventsListPageSelects)
