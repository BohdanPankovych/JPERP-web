import makeStyles from "@material-ui/core/styles/makeStyles";
import React, {memo} from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    "& .MuiDialog-paperWidthSm": {
        width: 300,
        height: 125,
    },
    "& .MuiDialogTitle-root": {
        textAlign: 'center'
    },
    "& .MuiDialogActions-root": {
        justifyContent: 'center'
    }

}));

const ModalDelete = ({open, setOpen}) => {
    const classes = useStyles();

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Delete this event?"}</DialogTitle>
            <DialogActions>
                <Button onClick={handleClose} variant="contained" color="primary" autoFocus>
                    YES
                </Button>
                <Button onClick={handleClose} color="primary">
                    CANCEL
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default memo(ModalDelete);
