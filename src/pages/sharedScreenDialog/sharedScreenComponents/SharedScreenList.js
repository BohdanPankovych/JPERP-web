import React, { useState, memo } from "react";
import { List, TextField } from "@material-ui/core";
import SharedScreenListItem from "./SharedScreenListItem";
import ShareDestinationItem from "./shareDestinationItem/ShareDestinationItem";
import ShareKidsItem from "./shareChildrenItem/ShareKidsItem";
import ShareClassroomItem from "./shareClassroomItem/ShareClassroomItem";
import { makeStyles } from "@material-ui/core/styles";

import { generalTagsMock } from "../../../data/mock/generalTagsMock";
import { clsChildTagsMock } from "../../../data/mock/clsChildTagsMock";

const useStyles = makeStyles((theme) => ({
  textInput: {
    width: "98%",
    marginLeft: "10px",
  },
}));

const SharedScreenList = ({
  clsChildTags,
  generalTags,
  addTag,
  setDestination,
  setChildTags,
  setGeneralTags,
  setTextTag,
  selectTagId,
  selectClassId,
  selectChildId,
  textTags,
  tagIds,
  clsIds,
  childIds,
}) => {
  const classes = useStyles();
  const [text, setText] = useState("");

  React.useEffect(() => {
    setChildTags(clsChildTagsMock);
    setGeneralTags(generalTagsMock);
  }, []);

  const onEnterPress = (e) => {
    if (e.key === "Enter") {
      addTag(text);
      setText("");
    }
  };

  return (
    <>
      <List>
        {generalTags && (
          <ShareDestinationItem
            setDestination={setDestination}
            tags={generalTags?.[0]}
          />
        )}
        {clsChildTags && (
          <ShareClassroomItem
            title="クラス"
            setTag={selectClassId}
            tags={clsChildTags}
            selectedTags={clsIds}
          />
        )}
        {clsChildTags && (
          <ShareKidsItem
            title="子供"
            setTag={selectChildId}
            tags={clsChildTags}
            selectedTags={childIds}
          />
        )}
        {generalTags &&
          generalTags
            .slice(1) //remove destination section
            .map((val) => (
              <SharedScreenListItem
                setTag={selectTagId}
                key={val.parent.id}
                title={val.parent.name}
                tags={val.children}
                selectedTags={tagIds}
              />
            ))}
        <SharedScreenListItem
          title="都度設定"
          setTag={setTextTag}
          color="secondary"
          tags={textTags}
          selectedTags={textTags}
        />
      </List>
      <hr />
      <TextField
        className={classes.textInput}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={onEnterPress}
      />
    </>
  );
};

export default memo(SharedScreenList);
