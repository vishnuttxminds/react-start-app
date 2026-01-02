import { TextField, Typography, MenuItem } from "@mui/material";

const ProfileTab = ({ profile, setProfile }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <Typography variant="h6">Profile Details</Typography>

      <TextField
        label="Name"
        name="name"
        value={profile.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Age"
        name="age"
        type="number"
        value={profile.age}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Gender"
        name="gender"
        select
        value={profile.gender}
        onChange={handleChange}
        fullWidth
        margin="normal"
      >
        <MenuItem value="male">Male</MenuItem>
        <MenuItem value="female">Female</MenuItem>
        <MenuItem value="other">Other</MenuItem>
      </TextField>
    </>
  );
};

export default ProfileTab;
