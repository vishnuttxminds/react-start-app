import React, { useState } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";

const TabsNav = () => {
  const [value, setValue] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log("Input Value on Tab Change:", inputValue);
    setInputValue(inputValue);
  };

  return (
    <Box sx={{ width: "100%", mt: 4 }}>
      {/* Tabs Header */}
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Profile" />
        <Tab label="Orders" />
        <Tab label="Settings" />
      </Tabs>

      {/* Tab Content */}
      <Box sx={{ p: 3 }}>
        {value === 0 && (
          <Box>
            <Typography variant="h6">Profile Content</Typography>

            <input
              type="text"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              placeholder="Enter name"
            />
          </Box>
        )}

        {value === 1 && <Typography variant="h6">Orders Content</Typography>}

        {value === 2 && (
          <Box>
            <Typography variant="h6">Settings Content</Typography>

            <Typography>value from tab1 : {inputValue}</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default TabsNav;
