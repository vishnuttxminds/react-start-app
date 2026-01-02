import React from "react";
import { Typography } from "@mui/material";

const SettingsTab = ({ name }) => {
  return (
    <>
      <Typography variant="h6">Settings Content</Typography>
      <Typography>Name from Profile: {name}</Typography>
    </>
  );
};

export default SettingsTab;
