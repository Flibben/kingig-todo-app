import React, { useState } from 'react'
import { TextField } from '@mui/material'

export const InputNewTodo = () => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <TextField
            id="outlined-multiline-flexible"
            label="Add new todo"
            multiline
            maxRows={4}
            value={value}
            onChange={handleChange}
        />
    )
}
