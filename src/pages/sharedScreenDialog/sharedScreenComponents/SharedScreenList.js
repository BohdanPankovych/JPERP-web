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
  textTags,
  setDestination,
  setChildTags,
  setGeneralTags,
  setShareReportsTag,
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
            setTag={setShareReportsTag}
            tags={clsChildTags}
          />
        )}
        {clsChildTags && (
          <ShareKidsItem
            title="子供"
            setTag={setShareReportsTag}
            tags={clsChildTags}
          />
        )}
        {generalTags &&
          generalTags
            .slice(1) //remove destination section
            .map((val) => (
              <SharedScreenListItem
                setTag={setShareReportsTag}
                key={val.parent.id}
                title={val.parent.name}
                tags={val.children}
              />
            ))}
        <SharedScreenListItem
          title="都度設定"
          setTag={setShareReportsTag}
          color="secondary"
          tags={textTags}
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
