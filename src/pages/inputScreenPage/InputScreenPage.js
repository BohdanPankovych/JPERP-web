import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, MenuItem, Button } from "@material-ui/core";
import colors from "../../data/constants/Colors";
import InputScreenListItem from "./inputScreenComponents/InputScreenListItem";
import ColorSelectItem from "./inputScreenComponents/ColorSelectItem";
import mock from "../../data/mock/mockData";
import TextInput from "../../reusableComponents/textInput/TextInput";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10px",
  },
  optionText: {
    margin: 0,
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
  },
  selectInput: {
    "& .MuiOutlinedInput-input": {
      padding: "5px",
    },
    width: "150px",
  },
  content: {
    display: "flex",
  },
  commentContent: {
    paddingTop: "25px",
  },
  commentText: {
    resize: "none",
    width: "40vw",
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
    backgroundColor: "#00AE00",
    padding: "5px 15px",
    color: "white",
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

const selectValue = [
  {
    label: "橋本凛",
    value: "橋本凛",
  },
  {
    label: "春野サクラ",
    value: "春野サクラ",
  },
  {
    label: "カヌー優子",
    value: "カヌー優子",
  },
];

const InputScreenPage = () => {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = React.useState("橋本凛");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const onButtonClick = () => {};

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.headerOptions}>
          <p>簡単レポート</p>

          <div className={classes.titleWrapper}>
            <p className={classes.optionText}>タイトル：</p>
            <TextField
              variant="outlined"
              className={classes.input}
              value="今日のうさぎ組"
            />
          </div>

          <div className={classes.titleWrapper}>
            <p className={classes.optionText}>レポート表示日：</p>
            <input className={classes.input} value="2021年8月13日" />
          </div>

          <div className={classes.titleWrapper}>
            <p className={classes.optionText}>作成：</p>
            <TextField
              select
              className={classes.selectInput}
              variant="outlined"
              value={selectedValue}
              onChange={handleChange}
            >
              {selectValue.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>

          <p>レポートの背景色を選択：</p>
          {colors.map((val) => (
            <ColorSelectItem key={val} color={val}></ColorSelectItem>
          ))}
        </div>

        <div className={classes.headerButton}>
          <Button
            className={classes.button}
            variant="contained"
            onClick={onButtonClick}
          >
            プレビューを確認
          </Button>
        </div>
      </div>

      <div className={classes.content}>
        <div className={classes.list}>
          {mock.reportPage.map((val, index) => (
            <InputScreenListItem
              key={val.title + " " + index}
              text={val.text}
              title={val.title}
              img={val.img}
            />
          ))}
        </div>

        <div className={classes.commentContent}>
          <TextInput
            className={classes.commentText}
            multiline
            variant="outlined"
            defaultValue="ますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります"
          />
        </div>
      </div>
    </div>
  );
};

export default InputScreenPage;
