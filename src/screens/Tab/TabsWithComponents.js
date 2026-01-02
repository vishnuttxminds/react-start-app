import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import ProfileTab from "./ProfileTab";
import OrdersTab from "./OrdersTab";
import SettingsTab from "./SettingsTab";
import TabPanel from "./TabPanel";

const TabsWithComponents = () => {
  const [value, setValue] = useState(0);
  const [name, setName] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", mt: 4 }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Profile" />
        <Tab label="Orders" />
        <Tab label="Settings" />
      </Tabs>

      <TabPanel value={value} index={0}>
        <ProfileTab name={name} setName={setName} />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <OrdersTab />
      </TabPanel>

      <TabPanel value={value} index={2}>
        <SettingsTab name={name} />
      </TabPanel>
    </Box>
  );
};

export default TabsWithComponents;
