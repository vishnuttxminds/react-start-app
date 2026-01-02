import React, { useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import CustomDialog from "./CustomDialog";

const DialogExample = () => {
  const [open, setOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (data) => {
    setSubmittedData(data);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open Dialog
      </Button>

      <CustomDialog
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={handleSubmit}
      />

      {submittedData && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6">Submitted Data</Typography>
          <Typography>Name: {submittedData.name}</Typography>
          <Typography>Email: {submittedData.email}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default DialogExample;
