import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "45px",
    marginRight: "10px",
  },
}));

const SelectTagButton = ({
  children,
  id,
  onClick,
  className,
  setTag,
  selected,
  setSelected,
  ...props
}) => {
  const classes = useStyles();
  const [select, setSelect] = React.useState(false);

  const onButtonClick = () => {
    setTag(id);
    // !selected.includes(children) && setSelected((prev) => [...prev, children]);
    // selected.includes(children) &&
    //   setSelected((prev) => prev.filter((val) => val !== children));
    // // setSelect(!select);
  };

  return (
    <Button
      className={classes.root + " " + className}
      variant={selected ? "contained" : "outlined"}
      onClick={onButtonClick}
      color="primary"
      {...props}
    >
      {children}
    </Button>
  );
};

export default SelectTagButton;
