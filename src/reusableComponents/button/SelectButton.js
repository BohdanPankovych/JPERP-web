import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "45px",
    marginRight: "10px",
  },
}));

const SelectButton = ({ children, onClick, className, ...props }) => {
  const classes = useStyles();
  const [select, setSelect] = React.useState(false);

  const onButtonClick = () => {
    setSelect(!select);
  };

  return (
    <Button
      className={classes.root + " " + className}
      variant={select ? "contained" : "outlined"}
      onClick={onButtonClick}
      color="primary"
      {...props}
    >
      {children}
    </Button>
  );
};

export default SelectButton;
