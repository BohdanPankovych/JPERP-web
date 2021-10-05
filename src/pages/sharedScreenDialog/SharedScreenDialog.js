import React, { memo, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import SaveIcon from "@material-ui/icons/Save";
import {
  Box,
  Dialog,
  Slide,
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
  DialogContent,
  Button,
  Switch,
} from "@material-ui/core";
import SharedScreenListContainer from "./containers/SharedScreenListContainer";
import TextInput from "../../reusableComponents/textInput/TextInput";

import { required } from "../../data/helpers/validators";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    backgroundColor: "#F6F6F6",
  },
  input: {
    display: "none",
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
  },
  closeButton: {
    color: "#00AF10",
  },
  text: {
    color: "black",
  },
  content: {
    padding: 0,
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#f5f2f0",
    width: "100vw",
    height: "100%",
  },
  leftSide: {
    display: "flex",
    flexDirection: "column",
    width: "30vw",
    padding: "15px",
  },
  previewContainer: {
    backgroundColor: "white",
    border: "1px solid #bdbdbd",
    borderRadius: "5px",
    width: "100%",
    minHeight: "25vh",
    marginBottom: "15px",
  },
  confirm: {
    padding: 0,
    backgroundColor: "white",
    border: "1px solid #bdbdbd",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  textAreaText: {
    margin: "15px 0",
    borderRadius: "1px",
    fontSize: "16px",
    backgroundColor: "white",
  },
  button: {
    width: "100%",
    "&:hover": {
      backgroundColor: "#1db51d",
    },
  },
  rightSide: {
    backgroundColor: "white",
    border: "1px solid #bdbdbd",
    borderRadius: "5px",
    width: "70vw",
    height: "100%",
    marginRight: "10px",
  },
  saveButton: {
    position: "absolute",
    right: "50px",
    bottom: "50px",
    backgroundColor: "#00AF10",
    color: "white",
    "&:hover": {
      backgroundColor: "#18d629",
    },
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SharedScreenDialog = ({ 
  open,
  handleClose,
  setShareReportsApprove,
  approve,
  description,
  setShareReportsDescription,
  image,
  setShareReportsImage }) => {
  const classes = useStyles();
  const canvasRef = useRef(null);
  const [showError, setShowError] = React.useState(false);

  const onUploadClick = (event) => {
    let file = event.target.files[0];
}

  const onSave = () => {
    if(description){
      setShowError(false);
    }else{
      setShowError(true);
    }
  }

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Typography className={classes.text}>Some text</Typography>
          <IconButton
            className={classes.closeButton}
            edge="end"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      
      <DialogContent className={classes.content}>
        <Box className={classes.leftSide}>
          <Container className={classes.previewContainer}><canvas ref={canvasRef} /></Container>
            <input
              className={classes.input}
              onChange={onUploadClick}
              id="contained-button-file"
              type="file"
            />
            <label htmlFor="contained-button-file">
              <Button className={classes.button} variant="outlined" color="primary"variant="contained" component="span">
                Select a file
              </Button>
            </label>

          <TextInput
            className={classes.textAreaText}
            multiline
            variant="outlined"
            rows={5}
            value={description}
            onValueChange={setShareReportsDescription}
            showError={showError}
            validators={[required]}
          />

          <Container className={classes.confirm}>
            <Switch value={approve} onChange={(e)=>setShareReportsApprove(e.target.checked)} />
            <Typography>some text</Typography>
          </Container>
        </Box>

        <Box className={classes.rightSide}>
          <SharedScreenListContainer/>
        </Box>

      </DialogContent>

      <IconButton className={classes.saveButton} onClick={onSave} aria-label="save">
        <SaveIcon />
      </IconButton>
    </Dialog>
  );
};

export default memo(SharedScreenDialog);
