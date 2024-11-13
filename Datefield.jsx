import React from 'react';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields({ name, label, onchange ,value,disable }) {
  return (
    <TextField
      required
      type="date"
      // label={label}
      value={value}
      name={name}
      sx={{
        width: '250px',
      }}
      style={{ backgroundColor: 'white' }}
      onChange={onchange}
      InputLabelProps={{
        shrink: true,
      }}
      disabled={disable}
    />
  );
}