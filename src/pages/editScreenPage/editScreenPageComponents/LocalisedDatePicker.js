import React, {memo} from "react";
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import jaLocale from "date-fns/locale/ja";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiOutlinedInput-input": {
            padding: "4px",
            paddingLeft: "5px",
            fontSize: "14px",
            width: props => props.fullwidth ? "156px" : "76px",
            [theme.breakpoints.up("sm")]: {
                width: props => props.fullwidth ? "156px" : "107px",
                fontSize: "16px",
            }
        },
        "& .MuiInputBase-root": {
            color: props => props.unselected && "white",
        },
    }
}));

const LocalisedDatePicker = ({ disable, format, value, onChange, fullwidth}) => {
    const classes = useStyles({fullwidth, unselected: /^[0-9]{4}\/[0-9]{2}$/.test(value)});

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={jaLocale}>
                <DatePicker
                    disabled={disable}
                    autoOk
                    disableToolbar
                    className={classes.root}
                    variant="inline"
                    inputVariant="outlined"
                    value={value}
                    format={format}
                    onChange={onChange}
                />
        </MuiPickersUtilsProvider>
    );
};

export default memo(LocalisedDatePicker);
