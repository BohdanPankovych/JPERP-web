import React, { memo, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { required, notLong } from "../../data/helpers/validators";
import { MenuItem, Button } from "@material-ui/core";
import colors from "../../data/constants/Colors";
import EditScreenPageListItem from "./editScreenPageComponents/EditScreenPageListItem";
import ColorSelectItem from "./editScreenPageComponents/ColorSelectItem";
import mock from "../../data/mock/mockData";
import TextInput from "../../reusableComponents/textInput/TextInput";
import LocalisedDatePicker from "./editScreenPageComponents/LocalisedDatePicker";
import FrontendRoutes from "../../data/constants/FrontendRoutes";
import { useHistory } from "react-router-dom";
import API from "../../data/api/Api";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10px",
  },
  optionText: {
    margin: 0,
    fontSize: "12px",
  },
  title: {
    fontSize: "18px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
  titleWrapper: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  input: {
    "& .MuiOutlinedInput-input": {
      padding: "5px",
    },
    "& p": {
      fontSize: "0.5em",
    },
    height: "100%",
    marginLeft: "7px",
    [theme.breakpoints.down("sm")]: {
      width: "150px",
    },
  },
  selectInput: {
    "& .MuiOutlinedInput-input": {
      padding: "5px",
    },
    width: "165px",
    marginLeft: "50px",
  },
  content: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  commentTitle: {
    marginTop: 0,
  },
  commentContent: {
    paddingTop: "25px",
  },
  commentText: {
    width: "45vw",
    [theme.breakpoints.down("sm")]: {
      width: "80vw",
    },
  },
  header: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
    justifyContent: "space-between",
  },
  headerButton: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "70px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px",
      width: "100%",
      alignItems: "center",
    },
  },
  button: {
    marginRight: "80px",
    padding: "5px 15px",
    "&:hover": {
      backgroundColor: "#1db51d",
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: "20px",
      fontSize: 8,
      width: "60vw",
    },
  },
  list: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    padding: "5px 0",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },
  },
  notification: {
    color: "red",
    fontSize: "12px",
  },
}));

const EditScreenPage = ({
  timeFilter,
  selectedEvents,
  title,
  creators,
  selectCreator,
  bgColor,
  description,
  setTimeFilter,
  setEditReportsCreators,
  setEditReportsData,
  setEditReportsTitle,
  setEditReportsColor,
  setEditReportsComment,
  setSelectCreator,
  editSelectedEvents,
  addCreator,
}) => {
  const classes = useStyles();
  const [showError, setShowError] = React.useState(false);
  const [disable, setDisable] = useState(true);

  const history = useHistory();

  useEffect(() => {
    //Try to get all creators Name
    // API.getCreatorsId()
    //   .then((res) =>
    //     res.data.map((val) =>
    //       API.getCreatorName(val.usrId)
    //         .then(res => addCreator({id: val.usrId, name: res.data.familyName}))
    //         .catch((err) => console.error(err))
    //     )
    //   )
    //   .catch((err) => console.error(err));

    setEditReportsData(mock.reportPage);
    setEditReportsCreators(mock.creators);
  }, []);

  const checkValidation = (items) =>
    items.every(
      (val) => val.docRec.comment.length > 0 && val.docRec.comment.length <= 200
    );

  useEffect(() => {
    if (
      title &&
      description &&
      selectCreator &&
      description.length <= 200 &&
      checkValidation(selectedEvents)
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [title, description, selectCreator, selectedEvents]);

  const handleChange = (value) => {
    setSelectCreator(value);
  };

  const onButtonClick = () => {
    if (title && description) {
      setShowError(false);
      history.push(FrontendRoutes.PREVIEW_LiST_PAGE);
    } else {
      setShowError(true);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.headerOptions}>
          <p>簡単レポート</p>

          <div className={classes.titleWrapper}>
            <p className={classes.title}>タイトル:</p>
            <TextInput
              variant="outlined"
              className={classes.input}
              onValueChange={setEditReportsTitle}
              value={title}
              showError={showError}
              validators={[required]}
            />
          </div>

          <div className={classes.titleWrapper}>
            <p className={classes.optionText}>レポート表示日：</p>
            <LocalisedDatePicker
              format={"yyyy/MM/dd"}
              value={timeFilter.day}
              onChange={setTimeFilter}
            />
          </div>

          <div className={classes.titleWrapper}>
            <p className={classes.optionText}>作成：</p>
            <TextInput
              select
              className={classes.selectInput}
              variant="outlined"
              value={selectCreator}
              onValueChange={handleChange}
              showError={showError}
              validators={[required]}
            >
              {creators.map((option) => (
                <MenuItem key={option.id} value={option.name}>
                  {option.name}
                </MenuItem>
              ))}
            </TextInput>
          </div>

          <p>レポートの背景色を選択：</p>
          {colors.map((val) => (
            <ColorSelectItem
              key={val}
              color={val}
              selectedColor={bgColor}
              setColor={setEditReportsColor}
            ></ColorSelectItem>
          ))}
        </div>

        <div className={classes.headerButton}>
          <Button
            disabled={disable}
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={onButtonClick}
          >
            プレビューを確認
          </Button>
          {disable && (
            <p className={classes.notification}>
              すべての必須フィールドに入力します
            </p>
          )}
        </div>
      </div>

      <div className={classes.content}>
        <div className={classes.list}>
          {selectedEvents &&
            selectedEvents.map((val, index) => (
              <EditScreenPageListItem
                key={val.id + "_" + index}
                data={val}
                showError={showError}
                editSelectedEvents={editSelectedEvents}
              />
            ))}
        </div>

        <div className={classes.commentContent}>
          <p className={classes.commentTitle}>先生のコメント</p>
          <TextInput
            className={classes.commentText}
            multiline
            minRows="4"
            showError={showError}
            variant="outlined"
            value={description}
            onValueChange={setEditReportsComment}
            validators={[required, notLong]}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(EditScreenPage);
