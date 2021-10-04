import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "45px",
    marginRight: "10px",
  },
}));


const SelectDestinationButton = ({select, onButtonClick, children, className, setDestination, ...props}) => {
    const classes = useStyles();

    const onClick = () => {
        onButtonClick(children);
        setDestination(children);
    }

    return (
    <Button
        className={classes.root + " " + className}
        variant={select === children ? "contained" : "outlined"}
        onClick={onClick}
        color="primary"
        {...props}
    >
        {children}
    </Button>
    );
}

export default SelectDestinationButton;