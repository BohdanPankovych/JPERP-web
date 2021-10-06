import React, { memo, useRef } from "react";
import SharedScreenDialogContainer from "../sharedScreenDialog/containers/SharedScreenDialogContainer";
import { Button, Container, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CanvasPostcard from "../../reusableComponents/canvasPostcard/CanvasPostcard";
import { jsPDF } from 'jspdf';
import {Link, useHistory } from "react-router-dom";
import FrontendRoutes from "../../data/constants/FrontendRoutes";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: "10px",
  },
  content: {
    width: "100%",
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

const PreviewScreenPage = ({selectCreator, timeFilter, title, color, description, selectedEvents, addEvent, setShareReportsImage}) => {
  const stageRef = useRef(null);
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setShareReportsImage(stageRef.current.toDataURL({ pixelRatio: 1.5 }));
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
    pdf.save('report.pdf');
  }

  const onTempSave = () => {
    addEvent({
    id: 284478378,
    img: null,
    title: title,
    tagList: [],
    description: description,
    date: timeFilter,
    })
    history.push(FrontendRoutes.EVENTS_LIST_PAGE)
  }

  return (
    <>
      <Typography className={classes.title}>簡単レポート</Typography>
      <Button
        className={classes.returnButton}
        variant="contained"
        color="primary"
        component={Link}
        to={FrontendRoutes.EDIT_REPORTS}
      >
        編集画面へ戻る
      </Button>

      <Container className={classes.content}>
        <CanvasPostcard
          reference={stageRef}
          className={classes.canvas}
          width={530}
          height={750}
          backgroundColor={color}
          title={title}
          date={timeFilter?.day}
          description={description}
          selectCreator={selectCreator}
          selectedEvents={selectedEvents}
          schoolName="日本標準こども園"
        />
      </Container>

      <Container className={classes.bottom}>
        <Box>
          {/* <Button
            className={classes.button}
            variant="outlined"
            color="primary"
            onClick={handleClickOpen}
          >
            一時保存
          </Button> */}
          <Button className={classes.button} onClick={onSave} variant="outlined" color="primary">
            PDFで保存
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleClickOpen}
          >
            保護者と共有
          </Button>
        </Box>
      </Container>
      <SharedScreenDialogContainer open={open} handleClose={handleClose} />
    </>
  );
};

export default memo(PreviewScreenPage);
