import React from "react";
import { Box } from "@mui/material";

const TabPanel = ({ children, value, index }) => {
  return value === index && <Box sx={{ p: 3 }}>{children}</Box>;
};

export default TabPanel;
