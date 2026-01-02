import { Typography } from "@mui/material";

const SettingsTab = ({ profile }) => {
  return (
    <>
      <Typography variant="h6">Settings</Typography>
      <Typography>Name: {profile.name}</Typography>
      <Typography>Age: {profile.age}</Typography>
      <Typography>Gender: {profile.gender}</Typography>
    </>
  );
};

export default SettingsTab;
