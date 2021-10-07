import React, { memo } from "react";
import {
  ListItem,
  ListItemText,
  Collapse,
  Box,
  Button,
} from "@material-ui/core";
import { ExpandMore, ExpandLess } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import SelectTagButton from "../../../../reusableComponents/button/SelectTagButton";

const useStyles = makeStyles((theme) => ({
  tagsList: {
    paddingLeft: theme.spacing(4),
    margin: "5px 0",
  },
}));

const ShareKidsItem = ({ tags, title, setTag }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [select, setSelect] = React.useState(null);

  const [selectedTags, setSelectedTags] = React.useState([]);

  const handleClick = () => {
    setOpen(!open);
  };

  const onClassSelect = (name) => {
    setSelect(name);
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box className={classes.tagsList}>
          {tags &&
            tags.map((val) => (
              <Button
                key={val.parent.id}
                color={select === val.parent.name ? "primary" : ""}
                onClick={() => onClassSelect(val.parent.name)}
              >
                {val.parent.name}
              </Button>
            ))}
        </Box>
        <Box className={classes.tagsList}>
          {tags.map((val) => {
            if (select === val.parent.name) {
              return val.children.map((val) => (
                <SelectTagButton
                  key={val.id}
                  setTag={setTag}
                  selected={selectedTags}
                  setSelected={setSelectedTags}
                >
                  {val.name}
                </SelectTagButton>
              ));
            }
          })}
        </Box>
      </Collapse>
    </>
  );
};

export default memo(ShareKidsItem);
