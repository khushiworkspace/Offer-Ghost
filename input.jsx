import React from 'react';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields({ width, name, label, onchange, value, disable, readOnly }) {
    return (
        <TextField
            required
            value={value}
            // label={label}
            placeholder={label}
            name={name}
            sx={{
                width: width ? width : '90%',
                textDecorationColor: 'yellow',
                color: "black"
            }}
            style={{ backgroundColor: 'white', borderColor: disable ? 'red' : 'inherit' }}
            onChange={onchange}
            disabled={disable}
            InputProps={{
                readOnly: readOnly ? readOnly : false,
                autoComplete: "new-password",
                style: {
                  borderColor: 'red', // Set the color of the input
              }
                
            }}
            inputProps={{
                style: {
                    borderColor: 'red', // Set the color of the input
                }
            }}
            aria-disabled={disable}
            
        />
    );
}
