import React, { useState, useEffect } from 'react';
import {
    Chip,
    Divider,
    Typography,
    TextField,
} from '@mui/material';
import { LoginSignupInput } from './CustomInputStyles';

export function CustomInput({ name, value, setValue, error, type}) {

    const handleChange = ( event ) => {
        setValue(event.target.value)
    }

    return (
        <div>
            {!error && (
                <TextField
                    type={type}
                    placeholder={ name }
                    variant="standard"
                    value={value}
                    onChange={handleChange}
                    sx={LoginSignupInput}
                    InputProps={{ disableUnderline: true }}
                />
            )}
            {error && (
                <TextField
                    error
                    type={type}
                    helperText={ error }
                    value={value}
                    onChange={handleChange}
                    variant="standard"
                    sx={LoginSignupInput}
                    InputProps={{ disableUnderline: true }}
                />
            )}
        </div>
    )
}