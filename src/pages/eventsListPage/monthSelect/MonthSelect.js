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
const MonthSelect = ({disable, title, value, setValue}) => {
    const classes = useStyles();
    // const [val, setSelectedValue] = useState("");

    const handleChange = useCallback((e) => {
        setValue(e.target.value)
    }, [])

    return <>
        <TextField
            disabled={disable}
            select
            className={classes.selectInput}
            variant="outlined"
            value={value}
            onChange={handleChange}
        >

            <MenuItem value={'January'}>
                一月
            </MenuItem>
            <MenuItem value={'February'}>
                二月
            </MenuItem>
            <MenuItem value={'March'}>
                三月
            </MenuItem>
            <MenuItem value={'April'}>
                四月
            </MenuItem>
            <MenuItem value={'May'}>
                五月
            </MenuItem>
            <MenuItem value={'June'}>
                六月
            </MenuItem>
            <MenuItem value={'July'}>
                七月
            </MenuItem>
            <MenuItem value={'August'}>
                八月
            </MenuItem>
            <MenuItem value={'September'}>
                九月
            </MenuItem>
            <MenuItem value={'Octover'}>
                十月
            </MenuItem>
            <MenuItem value={'November'}>
                十一月
            </MenuItem>
            <MenuItem value={'December'}>
                十二月
            </MenuItem>
        </TextField>

        <span className={classes.selectTitle}>{title}</span>
    </>
}

export default memo(MonthSelect)
