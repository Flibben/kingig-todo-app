import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'
import useStyles from "./styles";

export const InputNewTodo = () => {
  const [value, setValue] = useState({ title: "", body: "" });
  const classes = useStyles();
  console.log(value)

  const handleChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  return (
    <form className={classes.form} onChange={handleChange}>
      <TextField name="title" value={value.title} label="Title" />
      <TextField
        name="body"
        label="Text"
        multiline
        value={value.body}
      />
      <Button color="primary" variant="contained">Save note</Button>
    </form>
  )
}
