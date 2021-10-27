import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  input: {
    display: "none",
    "&:checked+label": {
      "& span": {
        transform: "scale(1.25) translate(-2%, -2%)",
        border: "1px solid black",
      },
    },
  },
  label: {
    display: "inline-block",
    width: "25px",
    height: "25px",
    cursor: "pointer",
    paddingRight: "15px",
    paddingBottom: "15px",
    "&:hover": {
      "& span": {
        transform: "scale(1.25) translate(-2%, -2%)",
      },
    },
    "& span": {
      display: "block",
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      transition: "transform .2s ease-in-out",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 14px 20px",
    },
  },
}));

const ColorSelectItem = ({ color, selectedColor, setColor }) => {
  const classes = useStyles();
  return (
    <>
      <input className={classes.input} onChange={()=>setColor(color)} checked={color === selectedColor} type="radio" name="color" id={color} />
      <label className={classes.label} htmlFor={color}>
        <span style={{ backgroundColor: color }}/>
      </label>
    </>
  );
};

export default ColorSelectItem;
