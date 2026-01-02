import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";

const DialogExample = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Open Dialog
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirm Action</DialogTitle>

        <DialogContent>
          <Typography>
            Are you sure you want to continue?
          </Typography>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleClose}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogExample;
