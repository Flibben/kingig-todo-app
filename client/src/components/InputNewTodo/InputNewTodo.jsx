import React, { useState, useContext } from 'react'
import { TextField, Button } from '@mui/material'
import useStyles from "./styles";
import { TodoContext } from '../../context/TodoProvider';

export const InputNewTodo = () => {
  const [value, setValue] = useState({ title: "", body: "" });
  const classes = useStyles();
  const { todoList, setTodoList } = useContext(TodoContext)

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
