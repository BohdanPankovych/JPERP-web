import React, { memo } from "react";
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
import { useHistory } from "react-router-dom";
import FrontendRoutes from "../../data/constants/FrontendRoutes";
import { required } from "../../data/helpers/validators";
import ModalDialog from "./sharedScreenComponents/ModalDialog";
import API from '../../data/api/Api';


const useStyles = makeStyles(() => ({
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
  imgPreview: {
    width: "auto",
    height: "auto",
    maxHeight: "20vh",
  },
  previewContainer: {
    backgroundColor: "white",
    border: "1px solid #bdbdbd",
    borderRadius: "5px",
    width: "100%",
    minHeight: "25vh",
    marginBottom: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    height: "fit-content",
    marginRight: "10px",
    paddingBottom: "10px",
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
  destination,
  showTagsDialog,
  approve,
  description,
  image,
  setShareReportsImage,
  setShareReportsApprove,
  setShareReportsDescription,
  setDestination,
  gardenId,
  resetSelectedData,
  clsIds,
  childIds,
  textTags,
  tagIds,
  updateEvents
}) => {
  const classes = useStyles();
  const history = useHistory();
  const [showError, setShowError] = React.useState(false);
  const [openModalDialog, setOpenModalDialog] = React.useState(false);

  const onUploadClick = (event) => {
    try{
      let img = event.target.files[0];
      setShareReportsImage(URL.createObjectURL(img));
    }catch( error ){
      console.error(error);
    }
  };

  const convertImgFile = (img) => {
    return img?.indexOf("base64") !== -1 ? img.replace(img.substring(0, img.indexOf(";base64,") + 8), "") : img;
  }

  const toByteArray = str => {
      var arr=[];
      for(var i=0; i<str.length; i++) {
        arr.push(str.charCodeAt(i))
      }
      return new Uint8Array(arr);
    }

  const onSave = () => {
    if (description) {
      if (destination) {
        setShowError(false);
        const data = {
          docRecId: null,
          comment: description,
          tagIds,
          clsIds,
          childIds,
          textTags,
          tagKind: destination,
          approved: false
      };
        var formData = new FormData();

        formData.append("json", new Blob([JSON.stringify(data)], {type: "application/json"}));
        formData.append("file", new Blob([toByteArray(window.atob(convertImgFile(image)))], {type: "image/jpeg"}));

        API.sharedDialog.sendReport(gardenId, formData).then(()=>{
          updateEvents(gardenId);
          resetSelectedData();
          setDestination(null);
          handleClose();
          history.push(FrontendRoutes.EVENTS_LIST_PAGE);
        }).catch((err) => console.error(err))
      } else {
        setOpenModalDialog(true);
      }
    } else {
      setShowError(true);
    }
  };

  const handleClose = () => {
    showTagsDialog(false);
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Typography className={classes.text}>簡単レポート</Typography>
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
          <Container className={classes.previewContainer}>
            {image != null ? (
              <img className={classes.imgPreview} src={image} alt="preview" />
            ) : (
              <Typography>画像無し</Typography>
            )}
          </Container>
          <input
            className={classes.input}
            onChange={onUploadClick}
            id="contained-button-file"
            type="file"
            accept=".jpg, .jpeg, .png, .jfif"
          />
          <label htmlFor="contained-button-file">
            <Button
              className={classes.button}
              variant="outlined"
              color="primary"
              variant="contained"
              component="span"
            >
              ファイルを選択します
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
            <Switch
              value={approve}
              onChange={(e) => setShareReportsApprove(e.target.checked)}
            />
            <Typography>承認</Typography>
          </Container>
        </Box>

        <Box className={classes.rightSide}>
          <SharedScreenListContainer />
        </Box>
      </DialogContent>

      <IconButton
        className={classes.saveButton}
        onClick={onSave}
        aria-label="save"
      >
        <SaveIcon />
      </IconButton>
      <ModalDialog
        open={openModalDialog}
        onClose={setOpenModalDialog}
        title=""
        text="宛先が選択されていません"
      />
    </Dialog>
  );
};

export default memo(SharedScreenDialog);
