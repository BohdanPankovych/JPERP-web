import React, { memo } from "react";
import SharedScreenDialog from "../sharedScreenDialog/SharedScreenDialog";
import { Button } from "@material-ui/core";

const PreviewScreenPage = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button>
      <SharedScreenDialog open={open} handleClose={handleClose} />
    </>
  );
};

export default memo(PreviewScreenPage);
