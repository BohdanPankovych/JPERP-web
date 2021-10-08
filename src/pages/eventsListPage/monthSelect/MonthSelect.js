import React, {memo, useCallback} from "react";
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
    test: {
        height: '30px'
    },
}));
const MonthSelect = ({disable, title, value, setValue}) => {
    const classes = useStyles();
    // const [val, setSelectedValue] = useState("");

    const handleChange = useCallback((e) => {
        setValue(e.target.value)
        // console.log('monthSelect', value)
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
            <MenuItem className={classes.test} value={''}>

            </MenuItem>
            <MenuItem value={'01'}>
                一月
            </MenuItem>
            <MenuItem value={'02'}>
                二月
            </MenuItem>
            <MenuItem value={'03'}>
                三月
            </MenuItem>
            <MenuItem value={'04'}>
                四月
            </MenuItem>
            <MenuItem value={'05'}>
                五月
            </MenuItem>
            <MenuItem value={'06'}>
                六月
            </MenuItem>
            <MenuItem value={'07'}>
                七月
            </MenuItem>
            <MenuItem value={'08'}>
                八月
            </MenuItem>
            <MenuItem value={'09'}>
                九月
            </MenuItem>
            <MenuItem value={'10'}>
                十月
            </MenuItem>
            <MenuItem value={'11'}>
                十一月
            </MenuItem>
            <MenuItem value={'12'}>
                十二月
            </MenuItem>
        </TextField>

        <span className={classes.selectTitle}>{title}</span>
    </>
}

export default memo(MonthSelect)
