import React, {memo, useCallback} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {MenuItem, TextField} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    select: {
        width: 116,
        height: 23,
    },
    selectTitle: {
        fontSize: 14,
        marginLeft: 10,
        marginRight: 10,
        [theme.breakpoints.up("sm")]: {
            marginRight: 20,
        }
    },
    selectInput: {
        "& .MuiOutlinedInput-root": {
          height: '23px',
          fontSize: 14,
            [theme.breakpoints.up("sm")]: {
                fontSize: 16,
            }
        },
        "& .MuiOutlinedInput-input": {
            padding: "5px",
        },
        width: "80px",
        [theme.breakpoints.up("sm")]: {
            width: "116px",
        }
    },
    test: {
        height: '30px'
    },
    eventSelector: {
        paddingBottom: 15
    }
}));
const EventsListPageSelects = ({title, value, setValue, options}) => {
    const classes = useStyles();
    // const [val, setSelectedValue] = useState("");

    const handleChange = useCallback((e) => {
        setValue(e.target.value)
    },[])

    return <div className={classes.eventSelector}>
        <TextField
            select
            className={classes.selectInput}
            variant="outlined"
            value={value}
            onChange={handleChange}
        >
            {options?.map((option) => (
                <MenuItem className={classes.test} key={option} value={option.id}>
                    {option.name}
                </MenuItem>
            ))}
        </TextField>
        {/*<select className={classes.select} name="年">*/}
        {/*    {options?.map(o => (*/}
        {/*        <option value={o}>{o}</option>*/}
        {/*    ))}*/}
        {/*</select>*/}
        <span className={classes.selectTitle}>{title}</span>
    </div>
}

export default memo(EventsListPageSelects)
