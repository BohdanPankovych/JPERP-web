import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextInput from "../../../reusableComponents/textInput/TextInput";
import { required, notLong } from "../../../data/helpers/validators";
import { ResizeImg } from '../../../data/helpers/resizeImg'

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
    width: "5vw",
    display: "flex",
    justifyContent: "center"
  },
  img: {
    margin: "20px 10px 0",
    display: "block",
    width: "auto",
    height: "auto",
    maxWidth: "100px",
    maxHeight: "100px",
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

const EditScreenPageListItem = ({ errorText, data, showError, editSelectedEvents }) => {
  const classes = useStyles();

  const [textValue, setTextValue] = React.useState(data?.description);
  // console.log('edit page', data)
  // console.log("img", data.img?.naturalWidth)

  const onChange = (value) => {
    editSelectedEvents( data.id, value);
  }

  return (
    <div className={classes.root}>
      <div className={classes.imgContainer}>
        <img className={classes.img} width="auto" height="100" alt="img" src={data.img} />
      </div>
      <div>
        <TextInput
          multiline
          minRows="4"
          variant="outlined"
          className={classes.text}
          value={data?.description}
          onValueChange={onChange}
          showError={showError}
          validators={[required, notLong]}
        />
      </div>
    </div>
  );
};

export default EditScreenPageListItem;
