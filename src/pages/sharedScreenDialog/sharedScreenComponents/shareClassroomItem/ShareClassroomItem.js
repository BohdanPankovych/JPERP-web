import React, { memo } from "react";
import { ListItem, ListItemText, Collapse, Box } from "@material-ui/core";
import { ExpandMore, ExpandLess } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import SelectTagButton from "../../../../reusableComponents/button/SelectTagButton";

const useStyles = makeStyles((theme) => ({
  tagsList: {
    paddingLeft: theme.spacing(4),
    margin: "5px 0",
  },
}));

const ShareClassroomItem = ({ title, selectedTags, tags, ...props }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState([]); //FIXME

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box className={classes.tagsList}>
          {tags?.map((val) => (
              <SelectTagButton
                key={val.parent.id}
                id={val.parent.id}
                setSelected={setSelected}
                selected={selectedTags.includes(val.parent.id)}
                {...props}
              >
                {val.parent.name}
              </SelectTagButton>
            ))}
        </Box>
      </Collapse>
    </>
  );
};

export default memo(ShareClassroomItem);
