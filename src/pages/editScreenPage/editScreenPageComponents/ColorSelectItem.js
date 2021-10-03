import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  input: {
    display: "none",
    "&:checked+label": {
      "& span": {
        transform: "scale(1.25) translate(-2%, -2%)",
        border: "1px solid black",
      },
    },
  },
  label: {
    display: "inline-block",
    width: "25px",
    height: "25px",
    cursor: "pointer",
    marginRight: "15px",
    "&:hover": {
      "& span": {
        transform: "scale(1.25) translate(-2%, -2%)",
      },
    },
    "& span": {
      display: "block",
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      transition: "transform .2s ease-in-out",
    },
  },
}));

const ColorSelectItem = ({ color }) => {
  const classes = useStyles();
  return (
    <>
      <input className={classes.input} type="radio" name="color" id={color} />
      <label className={classes.label} htmlFor={color}>
        <span style={{ backgroundColor: color }}></span>
      </label>
    </>
  );
};

export default ColorSelectItem;
