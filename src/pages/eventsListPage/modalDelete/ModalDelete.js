import makeStyles from "@material-ui/core/styles/makeStyles";
import React, {memo, useCallback} from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Api from '../../../data/api/Api'

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

const ModalDelete = ({open, setOpen, event_id, garden_id, eventsList, deleteEvent}) => {
    const classes = useStyles();

    const handleClose = () => {
        setOpen(false);
    };


    const deleteItem = () => {
        Api.eventsList.deleteEvent(garden_id, event_id).then((res)=>{
            deleteEvent(event_id)
            setOpen(false);
        }).catch((err)=>console.error(err))
    }

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
                <Button className={classes.btn} onClick={deleteItem} variant="contained" color="primary">
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
