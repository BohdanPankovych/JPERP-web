import React from 'react';
import { TypeButton } from './ButtonTypeColor'
import {
    ListItem,
    ListItemText,
    Collapse,
    Box,
  } from "@material-ui/core";
import { ExpandMore, ExpandLess } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import SelectDestinationButton from "./SelectDestinationButton";

const useStyles = makeStyles((theme) => ({
    tagsList: {
      paddingLeft: theme.spacing(4),
      margin: "5px 0",
    },
  }));
  

const tags = [
    {
        text: "Share internally",
        type: TypeButton.SHARE,
    },
    {
        text: "Share with parents",
        type: TypeButton.SHARE,
    },
    {
        text: "Emergency contact (internal)",
        type: TypeButton.EMERGENCY,
    },
    {
        text: "Emergency contact (parent)",
        type: TypeButton.EMERGENCY,
    },
];

const ShareDestinationItem = ({ setDestination }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [select, setSelect] = React.useState("");

  const handleClick = () => {
    setOpen(!open);
  };

    return (
        <>
          <ListItem button onClick={handleClick}>
            <ListItemText primary="Share destination" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box className={classes.tagsList}>
              {tags.map((val, index) => (
                <SelectDestinationButton 
                key={val + "_" + index} 
                onButtonClick={setSelect} 
                select={select} 
                color={TypeButton.SHARE === val.type? "primary": "secondary"}
                setDestination={setDestination}
                >
                {val.text}
                </SelectDestinationButton>
              ))}
            </Box>
          </Collapse>
        </>
      );
}

export default ShareDestinationItem;