import React from "react";
import {
  ListItem,
  ListItemText,
  Collapse,
  Box,
  Button,
} from "@material-ui/core";
import { ExpandMore, ExpandLess } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  tagsList: {
    paddingLeft: theme.spacing(4),
    margin: "5px 0",
  },
}));

const SharedScreenListItem = ({ title, tags }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

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
          {tags.map((val, index) => (
            <Button key={val + "_" + index} variant="outlined">
              {val}
            </Button>
          ))}
        </Box>
      </Collapse>
    </>
  );
};

export default SharedScreenListItem;
