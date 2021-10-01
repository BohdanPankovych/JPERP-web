import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    "& p": {
      padding: "2px",
      fontSize: "1em",
      position: "absolute",
      top: 0,
      lineHeight: "15px",
      backgroundColor: "white",
    },
  },
}));

const TextInput = ({
  value,
  validators,
  onChange,
  onValueChange,
  className,
  ...props
}) => {
  const classes = useStyles();
  const [touched, setTouched] = React.useState(false);

  const errorText = (validators || [])
    .map((validator) => validator(value))
    .find((m) => m != null);

  const changeValue = (value) => {
    setTouched(true);
    onValueChange && onValueChange(value);
  };

  const onChangeHandler = (e) => {
    changeValue(e.target.value);
  };

  return (
    <TextField
      className={classes.root + " " + className}
      value={value}
      error={touched && !!errorText}
      onChange={onChangeHandler}
      helperText={touched && !!errorText ? errorText : ""}
      {...props}
    ></TextField>
  );
};

export default TextInput;
