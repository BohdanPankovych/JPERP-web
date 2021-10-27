import React, {memo, useEffect, useMemo, useRef, useState} from "react";
import { Button, Container, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CanvasPostcard from "../../reusableComponents/canvasPostcard/CanvasPostcard";
import { jsPDF } from "jspdf";
import { Link, useHistory } from "react-router-dom";
import FrontendRoutes from "../../data/constants/FrontendRoutes";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    margin: "10px",
  },
  content: {
    padding: "20px 30px 0",
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

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

const PreviewScreenPage = ({
  selectCreator,
  showTagsDialog,
  gardenName,
  timeFilter,
  title,
  bgColor,
  description,
  selectedEvents,
  setShareReportsImage,
  resetSelectedData
}) => {
  const stageRef = useRef(null);
  const history = useHistory();
  const classes = useStyles();
  const size = useWindowSize();
  const canvasWidth = useMemo(() => size?.width > 550 ? 530 : size?.width - 20, [size]);
  const scale = canvasWidth / 530

  const handleClickOpen = () => {
    setShareReportsImage(stageRef.current.toDataURL({ pixelRatio: 1.5, mimeType: 'image/jpeg' }));
    showTagsDialog(true);
  };

  const onSave = () => {
    var pdf = new jsPDF();
    stageRef.current.setAttrs({width: 530, height:750, scaleY: 1, scaleX: 1 })
    pdf.addImage(stageRef.current.toDataURL({ pixelRatio: 1.5 }), 0, 0);
    pdf.save(`${title}_report.pdf`);
  };

  const onTempSave = () => {
    resetSelectedData();//reset data after send API
    history.push(FrontendRoutes.EVENTS_LIST_PAGE);
  };

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
        {size.width &&<CanvasPostcard
          reference={stageRef}
          className={classes.canvas}
          fullheigh={750 * scale}
          fullwidth={530 * scale}
          height={750}
          width={530}
          scale={scale}
          backgroundColor={bgColor}
          title={title}
          date={timeFilter?.day}
          description={description}
          selectCreator={selectCreator}
          selectedEvents={selectedEvents}
          schoolName={gardenName}
        />}
      </Container>

      <Container className={classes.bottom}>
        <Box>
          {/* <Button
            className={classes.button}
            variant="outlined"
            color="primary"
            onClick={onTempSave}
          >
            一時保存
          </Button> */}
          <Button
            className={classes.button}
            onClick={onSave}
            variant="outlined"
            color="primary"
          >
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
    </>
  );
};

export default memo(PreviewScreenPage);
