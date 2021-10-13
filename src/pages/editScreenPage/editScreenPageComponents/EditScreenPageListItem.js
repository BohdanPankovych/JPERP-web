import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextInput from "../../../reusableComponents/textInput/TextInput";
import { required, notLong } from "../../../data/helpers/validators";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: "10px",
    [theme.breakpoints.down('sm')]: {
      flexDirection: "column",
      alignItems: "center",
     },
  },
  imgContainer:{
    maxWidth: 100,
    maxHeight: 100,
    display: "flex",
    justifyContent: "center"
  },
  img: {
    margin: "20px 10px 0",

    width: "auto",
    height: "auto",
    maxWidth: "100px",
    maxHeight: "100px",
    display: "block",
  },
  text: {
    [theme.breakpoints.down('sm')]: {
      fontSize: "10px"
     },
    padding: "10px",
    width: "45vw",
    [theme.breakpoints.down('sm')]: {
      width: "80vw",
     },
  },
  title: {
    margin: 0,
  },
}));



const EditScreenPageListItem = ({ data, showError, editSelectedEvents }) => {
  const classes = useStyles();

  const onChange = (value) => {
    editSelectedEvents( data.docRec.id, value);
  }

  return (
    <div className={classes.root}>
      <div className={classes.imgContainer}>
        <img className={classes.img} width="auto" height="100" alt="img" src={data.docRec?.image} />
      </div>
      <div>
        <TextInput
          multiline
          minRows="4"
          variant="outlined"
          className={classes.text}
          value={data?.docRec.comment}
          onValueChange={onChange}
          showError={showError}
          validators={[required, notLong]}
        />
      </div>
    </div>
  );
};

export default EditScreenPageListItem;
