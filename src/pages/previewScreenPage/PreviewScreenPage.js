import React, { memo, useRef } from "react";
import SharedScreenDialog from "../sharedScreenDialog/SharedScreenDialog";
import { Button, Container, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CanvasPostcard from "../../reusableComponents/canvasPostcard/CanvasPostcard";
import mockData from '../../data/mock/mockData'
import { jsPDF } from 'jspdf';

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
  const stageRef = useRef(null);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSave = () => {
    var pdf = new jsPDF();
    pdf.addImage(
      stageRef.current.toDataURL({ pixelRatio: 1.5 }),
      0,
      0,
    );
    pdf.save('canvas.pdf');
  }

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
          reference={stageRef}
          className={classes.canvas}
          width={530}
          height={750}
          backgroundColor="#FBE5D6"
          title="今日のうさぎ組"
          date="2021年8月13日"
          firstEvent={mockData.reportPage[0]}
          secondEvent={mockData.reportPage[1]}
          thirdEvent={mockData.reportPage[2]}
          fourthEvent={mockData.reportPage[3]}
          description={mockData.reportPage[1].text}
        />
      </Container>

      <Container className={classes.bottom}>
        <Box>
          <Button
            className={classes.button}
            variant="outlined"
            color="primary"
          >
            Temporarily saved
          </Button>
          <Button className={classes.button} onClick={onSave} variant="outlined" color="primary">
            Save as PDF
          </Button>
          <Button
            className={classes.button}
            variant="contained"
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
