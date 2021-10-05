import React, { memo } from "react";
import {
    ListItem,
    ListItemText,
    Collapse,
    Box,
    Button
  } from "@material-ui/core";
import { ExpandMore, ExpandLess } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import SelectTagButton from '../../../../reusableComponents/button/SelectTagButton'

const useStyles = makeStyles((theme) => ({
    tagsList: {
      paddingLeft: theme.spacing(4),
      margin: "5px 0",
    },
  }));

const ShareKidsItem = ({ tags, setTag }) => {
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
            <ListItemText primary={tags.title} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box className={classes.tagsList}>
              {tags && tags.classes.map((val, index) => (
                <Button key={val.class + "_" + index} color={select === val.class? "primary" : ""} onClick={() => onClassSelect(val.class)} >{val.class}</Button>
              ))} 
            </Box>
            <Box className={classes.tagsList}>
            {tags.classes.map((val) => {
                    if(select === val.class) {
                        return val.kids.map((val, index) => <SelectTagButton key={val + "_" + index} setTag={setTag} selected={selectedTags} setSelected={setSelectedTags}>{val}</SelectTagButton>)
                    }
                }
              )}
            </Box>
          </Collapse>
        </>
      );
}

export default memo(ShareKidsItem);