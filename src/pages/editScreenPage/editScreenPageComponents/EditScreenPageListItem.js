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
  img: {
    margin: "20px 10px 0",
    display: "block",
    width: "auto",
    height: "10vh",
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

const EditScreenPageListItem = ({ text, img, showError }) => {
  const classes = useStyles();

  const [textValue, setTextValue] = React.useState(text);

  return (
    <div className={classes.root}>
      <img className={classes.img} alt="img" src={img} />
      <div>
        <TextInput
          multiline
          rows="4"
          variant="outlined"
          className={classes.text}
          value={textValue}
          onValueChange={setTextValue}
          showError={showError}
          validators={[required, notLong]}
        />
      </div>
    </div>
  );
};

export default EditScreenPageListItem;
