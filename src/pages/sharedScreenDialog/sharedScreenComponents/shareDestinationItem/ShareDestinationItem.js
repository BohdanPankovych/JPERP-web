import React, { memo } from 'react';
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
        text: "内部で共有する",
        type: TypeButton.SHARE,
    },
    {
        text: "両親と共有する",
        type: TypeButton.SHARE,
    },
    {
        text: "緊急連絡先（内部）",
        type: TypeButton.EMERGENCY,
    },
    {
        text: "緊急連絡先（親）",
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
            <ListItemText primary="宛先を共有する" />
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

export default memo(ShareDestinationItem);
