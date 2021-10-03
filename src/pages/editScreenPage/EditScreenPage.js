import React, { memo, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {required, notLong} from '../../data/helpers/validators'
import { TextField, MenuItem, Button } from "@material-ui/core";
import colors from "../../data/constants/Colors";
import EditScreenPageListItem from "./editScreenPageComponents/EditScreenPageListItem";
import ColorSelectItem from "./editScreenPageComponents/ColorSelectItem";
import mock from "../../data/mock/mockData";
import TextInput from "../../reusableComponents/textInput/TextInput";
import LocalisedDatePicker from "./editScreenPageComponents/LocalisedDatePicker";

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
    height: "100%",
    marginLeft: "7px"
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
  },
  commentTitle: {
    marginTop: 0,
  },
  commentContent: {
    paddingTop: "25px",
  },
  commentText: {
    resize: "none",
    width: "45vw",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  headerButton: {
    display: "flex",
    alignItems: "flex-start",
    marginTop: "70px",
  },
  button: {
    marginRight: "80px",
    padding: "5px 15px",
    "&:hover": {
      backgroundColor: "#1db51d",
    },
  },
  list: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    padding: "5px 0",
  },
}));

const EditScreenPage = ({
  reportsList,
  timeFilter,
  title,
  creators,
  color,
  description,
  setTimeFilter,
  setEditReportsCreators,
  setEditReportsData,
  setEditReportsTitle,
  setEditReportsColor,
  setEditReportsDescription,
  setSelectCreator,
}) => {
  const classes = useStyles();
  const [showError, setShowError] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("");

  useEffect(() => {
    setEditReportsColor(colors[0]);
    setEditReportsData(mock.reportPage);
    setEditReportsCreators(mock.creators);
  }, []);

  const handleChange = (value) => {
    setSelectCreator(value);
    setSelectedValue(value);
  };

  const onButtonClick = () => {
    if(title && description && description.length <= 200){
      setShowError(false);
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
              value={selectedValue}
              onValueChange={handleChange}
              showError={showError}
              validators={[required]}
            >
              {creators.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextInput>
          </div>

          <p>レポートの背景色を選択：</p>
          {colors.map((val) => (
            <ColorSelectItem key={val} color={val} selectedColor={color} setColor={setEditReportsColor}></ColorSelectItem>
          ))}
        </div>

        <div className={classes.headerButton}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={onButtonClick}
          >
            プレビューを確認
          </Button>
        </div>
      </div>

      <div className={classes.content}>
        <div className={classes.list}>
          {reportsList.map((val, index) => (
            <EditScreenPageListItem
              key={val.title + " " + index}
              text={val.text}
              title={val.title}
              img={val.img}
              showError={showError}
            />
          ))}
        </div>

        <div className={classes.commentContent}>
          <p className={classes.commentTitle}>先生のコメント</p>
          <TextInput
            className={classes.commentText}
            multiline
            rows="4"
            showError={showError}
            variant="outlined"
            value={description}
            onValueChange={setEditReportsDescription}
            validators={[required, notLong]}
            />
        </div>
      </div>
    </div>
  );
};

export default memo(EditScreenPage);
