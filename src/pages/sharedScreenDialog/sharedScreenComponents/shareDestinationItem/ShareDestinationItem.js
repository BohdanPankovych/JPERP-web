import React, { memo } from "react";
import { ListItem, ListItemText, Collapse, Box } from "@material-ui/core";
import { ExpandMore, ExpandLess } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import SelectDestinationButton from "./SelectDestinationButton";

const useStyles = makeStyles((theme) => ({
  tagsList: {
    paddingLeft: theme.spacing(4),
    margin: "5px 0",
  },
}));

const ShareDestinationItem = ({ tags, setDestination }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [select, setSelect] = React.useState("");

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={tags?.parent.name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box className={classes.tagsList}>
          {tags?.children.map((val) => (
            <SelectDestinationButton
              key={val.id}
              tagKind={val.tagKind}
              onButtonClick={setSelect}
              select={select}
              color="primary"
              setDestination={setDestination}
            >
              {val.name}
            </SelectDestinationButton>
          ))}
        </Box>
      </Collapse>
    </>
  );
};

export default memo(ShareDestinationItem);
