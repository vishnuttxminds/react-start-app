import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import ProfileTab from "./ProfileTab";
import OrdersTab from "./OrdersTab";
import SettingsTab from "./SettingsTab";
import TabPanel from "./TabPanel";

const TabsWithComponents = () => {
  const [value, setValue] = useState(0);

  const [profile, setProfile] = useState({
    name: "",
    age: "",
    gender: "",
  });

  return (
    <Box sx={{ width: "100%", mt: 4 }}>
      <Tabs
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
        centered
      >
        <Tab label="Profile" />
        <Tab label="Orders" />
        <Tab label="Settings" />
      </Tabs>

      <TabPanel value={value} index={0}>
        <ProfileTab profile={profile} setProfile={setProfile} />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <OrdersTab />
      </TabPanel>

      <TabPanel value={value} index={2}>
        <SettingsTab profile={profile} />
      </TabPanel>
    </Box>
  );
};

export default TabsWithComponents;
