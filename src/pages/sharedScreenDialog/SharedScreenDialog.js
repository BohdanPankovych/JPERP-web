import React from "react";
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
  TextareaAutosize,
  Switch,
} from "@material-ui/core";
import SharedScreenList from "./sharedScreenComponents/SharedScreenList";
import mockData from "../../data/mock/mockData";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    backgroundColor: "#F6F6F6",
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
    marginBottom: "5px",
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
    margin: "5px 0",
    border: "1px solid #bdbdbd",
    borderRadius: "5px",
    fontSize: "16px",
    width: "99%",
    resize: "none",
  },
  button: {
    backgroundColor: "#00AF10",
    color: "white",
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

const SharedScreenDialog = ({ open, handleClose }) => {
  const classes = useStyles();

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
          <Container className={classes.previewContainer}></Container>
          <Button className={classes.button}>Some Button</Button>
          <TextareaAutosize
            className={classes.textAreaText}
            minRows={5}
          ></TextareaAutosize>
          <Container className={classes.confirm}>
            <Switch />
            <Typography>some text</Typography>
          </Container>
        </Box>
        <Box className={classes.rightSide}>
          <SharedScreenList items={mockData.sharedPage} />
        </Box>
      </DialogContent>
      <IconButton className={classes.saveButton} aria-label="save">
        <SaveIcon />
      </IconButton>
    </Dialog>
  );
};

export default SharedScreenDialog;
