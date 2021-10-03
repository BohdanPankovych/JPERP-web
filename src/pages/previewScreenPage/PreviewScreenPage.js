import React, { memo } from "react";
import SharedScreenDialog from "../sharedScreenDialog/SharedScreenDialog";
import { Button, Container, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CanvasPostcard from "../../reusableComponents/canvasPostcard/CanvasPostcard";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: "10px",
  },
  content: {
    width: "100%",
    height: "80vh",
    display: "flex",
    justifyContent: "center",
  },
  bottom: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    margin: "10px",
  },
  title: {
    marginLeft: "20px",
    marginTop: "10px",
  },
  returnButton: {
    marginLeft: "20px",
    marginTop: "15px",
  },
  canvas: {
    backgroundColor: "gray",
  },
}));
const PreviewScreenPage = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Typography className={classes.title}>Easy report</Typography>
      <Button
        className={classes.returnButton}
        variant="contained"
        color="primary"
      >
        Continue editing
      </Button>

      <Container className={classes.content}>
        <CanvasPostcard
          className={classes.canvas}
          width="650"
          height="750"
          backgroundColor="#FABF8F"
        />
      </Container>

      <Container className={classes.bottom}>
        <Box>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
          >
            Temporarily saved
          </Button>
          <Button className={classes.button} variant="outlined" color="primary">
            Save as PDF
          </Button>
          <Button
            className={classes.button}
            variant="outlined"
            color="primary"
            onClick={handleClickOpen}
          >
            Share with parents
          </Button>
        </Box>
      </Container>
      <SharedScreenDialog open={open} handleClose={handleClose} />
    </>
  );
};

export default memo(PreviewScreenPage);
