import React, {useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextInput from "../../../reusableComponents/textInput/TextInput";
import { required, notLong } from "../../../data/helpers/validators";
import { ResizeImg } from '../../../data/helpers/resizeImg'
import Api from "../../../data/api/Api";

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



const EditScreenPageListItem = ({ gardenId, data, showError, editSelectedEvents }) => {
  const classes = useStyles();
  const [img, setImg] = useState('');


  useEffect(() => {
    Api.eventsList.getImg(gardenId, data.docRec.id)
        .then(((res) => {
          setImg(res?.data);
          console.log(res)
        }))
        .catch((err) => console.error(err))
  },[gardenId, data])


  const onChange = (value) => {
    editSelectedEvents( data.docRec.id, value);
  }

  return (
    <div className={classes.root}>
      <div className={classes.imgContainer}>
        <img className={classes.img} width="auto" height="100" alt="img" src={img} />
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
