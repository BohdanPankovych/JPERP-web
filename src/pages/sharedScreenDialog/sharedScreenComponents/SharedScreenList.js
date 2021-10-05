import React, { useState, memo } from 'react'
import { List, TextField } from "@material-ui/core";
import SharedScreenListItem from "./SharedScreenListItem";
import ShareDestinationItem from './shareDestinationItem/ShareDestinationItem';
import ShareKidsItem from './shareChildrenItem/ShareKidsItem';
import mockData from '../../../data/mock/mockData';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textInput: {
    width: "98%",
    marginLeft: "10px",
  },
}));

const SharedScreenList = ({
  classrooms,
  kids,
  addTag,
  textTags,
  dynamicTags,
  setDestination,
  setShareReportsClassroom,
  setShareReportsKids,
  setDynamicTags,
  setShareReportsTag,
  }) => {
  const classes = useStyles();
  const [text, setText] = useState("")

  React.useEffect(()=>{
    setShareReportsClassroom(mockData.sharedPageClass.tags);
    setShareReportsKids(mockData.sharedPageChildren);
    setDynamicTags(mockData.sharedPage);
  },[])

  const onEnterPress = (e) => {
    if (e.key === "Enter") {
      addTag(text);
      setText("");
    }
  };

  return (
    <>
      <List>
        <ShareDestinationItem  setDestination={setDestination}/>
        {classrooms && <SharedScreenListItem title="クラス" tags={classrooms} setTag={setShareReportsTag}/>}
        {kids && <ShareKidsItem setTag={setShareReportsTag} tags={kids}/>}
        {dynamicTags && dynamicTags.map((val, index) => (
          <SharedScreenListItem setTag={setShareReportsTag} key={index} title={val.title} tags={val.tags} />
        ))}
        <SharedScreenListItem title="都度設定" setTag={setShareReportsTag} color="secondary" tags={textTags}/>
      </List>
      <hr/>
      <TextField className={classes.textInput} value={text} onChange={(e) => setText(e.target.value)} onKeyPress={onEnterPress}  />
    </>
  );
};

export default memo(SharedScreenList);
