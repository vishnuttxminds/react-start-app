import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    dob: null,
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // ✅ IMPORTANT
    console.log("Form Data:", formData);
    navigate("/dashboard");
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 5,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Registration Form
      </Typography>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <TextField
          fullWidth
          label="Name"
          name="name"
          margin="normal"
          value={formData.name}
          onChange={handleChange}
          required
        />

        {/* Email */}
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          margin="normal"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Gender - Radio */}
        <FormControl margin="normal">
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            row
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>

        {/* Date Picker */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Date of Birth"
            value={formData.dob}
            onChange={(newValue) =>
              setFormData({ ...formData, dob: newValue })
            }
            slotProps={{
              textField: { fullWidth: true, margin: "normal" },
            }}
          />
        </LocalizationProvider>

        {/* Checkbox */}
        <FormControlLabel
          control={
            <Checkbox
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
          }
          label="I agree to the terms & conditions"
        />

        {/* Submit */}
        <Button
          fullWidth
          type="submit"
          variant="contained"
          sx={{ mt: 2 }}
          disabled={!formData.agree}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Form;
