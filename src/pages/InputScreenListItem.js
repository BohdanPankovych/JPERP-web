import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: "20px",
  },
  img: {
    margin: "30px 20px 0",
    display: "block",
    width: "auto",
    height: "15vh",
  },
  text: {
    resize: "none",
    padding: "10px",
    width: "50vw",
    fontSize: "12px",
  },
  title: {
    margin: 0,
  },
}));

const InputScreenListItem = ({ text, title, img }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img className={classes.img} alt="img" src={img} />
      <div>
        <p className={classes.title}>{title}</p>
        <TextareaAutosize
          className={classes.text}
          defaultValue={text}
        ></TextareaAutosize>
      </div>
    </div>
  );
};

export default InputScreenListItem;
