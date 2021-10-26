import React, { useContext, useState } from 'react';
import {
  Typography, Modal, Box, TextField, Button,
} from '@mui/material';
import { TodoContext } from '../../context/TodoProvider';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const TodoModal = ({
  open, setOpen, title, body, id, updatedAt,
}) => {
  const { todoList, setTodoList, token } = useContext(TodoContext);
  const [todoValue, setTodoValue] = useState({ title, body, _id: id });

  const handleChange = (event) => {
    setTodoValue({ ...todoValue, [event.target.name]: event.target.value });
  };

  const handleDelete = () => {
    // No need to close the modal since it gets filtered out and doesn't render.
    fetch(`http://localhost:5000/todos/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(() => {
      setTodoList(todoList.filter((todo) => todo._id !== id));
    });
  };

  const handleClose = () => setOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/todos', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(todoValue),
    }).then((res) => res.json()).then((data) => {
      setTodoList(todoList.map((todo) => {
        if (todo._id !== id) {
          return todo;
        }
        return data;
      }));
      handleClose();
    });
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <form onSubmit={handleSubmit} onChange={handleChange}>
          <TextField value={todoValue.title} name="title" spellCheck={false} />
          <TextField value={todoValue.body} name="body" spellCheck={false} multiline />
          <Typography>{updatedAt}</Typography>
          <Button variant="contained" type="submit">Update</Button>
          <Button variant="contained" color="error" onClick={handleDelete}>Delete</Button>
        </form>
      </Box>
    </Modal>
  );
};
