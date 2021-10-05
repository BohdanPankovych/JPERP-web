import makeStyles from "@material-ui/core/styles/makeStyles";
import React, {memo} from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    dialog: {
        // width: '600px',
        // height: '189px',
        "& .MuiDialog-paperWidthSm": {
            width: 599,
            height: 189,
        },
        "& .MuiDialogTitle-root": {
            marginTop: 27,
            textAlign: 'center'
        },
        "& .MuiDialogActions-root": {
            marginTop: 15,
            justifyContent: 'center'
        }
    },
    btn: {
        width: '130px',
        height: '30px',
    }

}));

const ModalDelete = ({open, setOpen}) => {
    const classes = useStyles();

    const handleClose = () => {
        setOpen(false);
    };

    return (
            <Dialog
                className={classes.dialog}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"このイベントを削除しますか?"}</DialogTitle>
                <DialogActions>
                    <Button className={classes.btn} onClick={handleClose} variant="contained" color="primary">
                        はい
                    </Button>
                    <Button className={classes.btn} onClick={handleClose} color="primary">
                        キャンセル
                    </Button>
                </DialogActions>
            </Dialog>
    );
}

export default memo(ModalDelete);
