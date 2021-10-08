import React, { memo } from "react";
import { ListItem, ListItemText, Collapse, Box } from "@material-ui/core";
import { ExpandMore, ExpandLess } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import SelectTagButton from "../../../reusableComponents/button/SelectTagButton";

const useStyles = makeStyles((theme) => ({
  tagsList: {
    paddingLeft: theme.spacing(4),
    margin: "5px 0",
  },
}));

const SharedScreenListItem = ({ title, tags, ...props }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState([]);

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
          {tags &&
            tags.map((val, index) => (
              <SelectTagButton
                key={val.id || index}
                id={val.id || val}
                setSelected={setSelected}
                selected={selected}
                {...props}
              >
                {val.name || val}
              </SelectTagButton>
            ))}
        </Box>
      </Collapse>
    </>
  );
};

export default memo(SharedScreenListItem);
