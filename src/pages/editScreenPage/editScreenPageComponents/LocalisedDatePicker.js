import React from "react";
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import jaLocale from "date-fns/locale/ja";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiOutlinedInput-input": {
            padding: "4px",
            paddingLeft: "5px",
            fontSize: "16px",
            width: "156px",
        },
    },
}));

const LocalisedDatePicker = ({disable, format, value, onChange}) => {
    const classes = useStyles();
    // console.log('date value', value)
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

export default LocalisedDatePicker;
