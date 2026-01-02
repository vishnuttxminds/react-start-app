import React, { useState } from "react";
import { Typography, TextField } from "@mui/material";

const ProfileTab = ({ name, setName }) => {
  return (
    <>
      <Typography variant="h6">Profile Content</Typography>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
    </>
  );
};

export default ProfileTab;
