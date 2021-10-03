import React from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import jaLocale from "date-fns/locale/ja";
import { makeStyles } from "@material-ui/core/styles";

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

const LocalisedDatePicker = ({ value, onChange }) => {
  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={jaLocale}>
      <DatePicker
        autoOk
        disableToolbar
        className={classes.root}
        variant="inline"
        inputVariant="outlined"
        value={value}
        format="yyyy/MM/dd"
        onChange={onChange}
      />
    </MuiPickersUtilsProvider>
  );
};

export default LocalisedDatePicker;
