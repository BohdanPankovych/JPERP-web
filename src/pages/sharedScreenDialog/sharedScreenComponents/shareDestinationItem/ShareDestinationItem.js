import React, { memo } from 'react';
import { TypeButton } from '../../../../data/constants/ButtonTypeColor'
import {
    ListItem,
    ListItemText,
    Collapse,
    Box,
  } from "@material-ui/core";
import { ExpandMore, ExpandLess } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import SelectDestinationButton from "./SelectDestinationButton";
import mockData from '../../../../data/mock/mockData'

const useStyles = makeStyles((theme) => ({
    tagsList: {
      paddingLeft: theme.spacing(4),
      margin: "5px 0",
    },
  }));

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
            <ListItemText primary={mockData.destination.name} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box className={classes.tagsList}>
              {mockData.destination.items.map((val, index) => (
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
