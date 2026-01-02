
import React from 'react'
import {
  Tabs,
  Tab,
  Box,
  Typography,
} from "@mui/material";

const TabScreen = () => {
    const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", mt: 4 }}>
      {/* Tabs Header */}
      <Tabs
        value={value}
        onChange={handleChange}
        centered
      >
        <Tab label="Profile" />
        <Tab label="Orders" />
        <Tab label="Settings" />
      </Tabs>

      {/* Tab Content */}
      <Box sx={{ p: 3 }}>
        {value === 0 && (
          <Typography variant="h6">
            Profile Content
          </Typography>
        )}

        {value === 1 && (
          <Typography variant="h6">
            Orders Content
          </Typography>
        )}

        {value === 2 && (
          <Typography variant="h6">
            Settings Content
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default TabScreen