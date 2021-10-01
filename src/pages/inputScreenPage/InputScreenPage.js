import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import colors from "../../data/сonstants/Colors";
import InputScreenListItem from "./InputScreenListItem";
import ColorSelectItem from "./ColorSelectItem";
import mock from "../../data/mock/mockData";

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
    height: "100%",
  },
  selectInput: {
    width: "150px",
  },
  content: {
    display: "flex",
  },
  commentTitle: {
    marginBottom: "5px",
  },
  commentText: {
    resize: "none",
    padding: "10px",
    width: "35vw",
    height: "87%",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  headerButton: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    marginRight: "80px",
    backgroundColor: "#00AE00",
    border: "1px solid #00AE00",
    borderRadius: "5px",
    padding: "5px 15px",
    color: "white",
    "&:hover": {
      backgroundColor: "#1db51d",
      cursor: "pointer",
    },
  },
}));

const InputScreenPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.headerOptions}>
          <p>簡単レポート</p>
          <div className={classes.titleWrapper}>
            <p className={classes.optionText}>タイトル：</p>
            <input className={classes.input} value="今日のうさぎ組"></input>
          </div>
          <div className={classes.titleWrapper}>
            <p className={classes.optionText}>レポート表示日：</p>
            <input className={classes.input} value="2021年8月13日"></input>
          </div>
          <div className={classes.titleWrapper}>
            <p className={classes.optionText}>作成：</p>
            <select className={classes.selectInput} value="橋本凛">
              <option value="value1">橋本凛</option>
              <option value="value2">橋本凛</option>
              <option value="value3">橋本凛</option>
            </select>
          </div>
          <p>レポートの背景色を選択：</p>

          {colors.map((val) => (
            <ColorSelectItem key={val} color={val}></ColorSelectItem>
          ))}
        </div>

        <div className={classes.headerButton}>
          <button className={classes.button} onClick={() => alert("test")}>
            プレビューを確認
          </button>
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
          <p className={classes.commentTitle}>
            先生のコメント（200文字まで入力可能）
          </p>
          <textarea
            className={classes.commentText}
            value="テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります"
          />
        </div>
      </div>
    </div>
  );
};

export default InputScreenPage;
