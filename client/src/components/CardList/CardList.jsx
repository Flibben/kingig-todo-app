import React, { useContext, useEffect } from 'react';
import { CircularProgress, Grid } from '@mui/material';
import { TodoCard } from '../TodoCard/TodoCard';
import { TodoContext } from '../../context/TodoProvider';
import { BASE_URL } from '../../constants';

export const CardList = () => {
  const {
    todoList, setTodoList, token, setDisplayName,
  } = useContext(TodoContext);

  useEffect(() => {
    fetch(`${BASE_URL}todos`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => response.json()).then((data) => {
      setTodoList(data.todos);
      setDisplayName(data.displayName);
    });
  }, [setTodoList, setDisplayName, token]);

  return (
    <Grid container spacing={2} marginTop={1}>
      {
        !todoList ? <CircularProgress />
          : todoList.map(({
            _id, title, body, updatedAt,
          }) => (
            <TodoCard key={_id} id={_id} title={title} body={body} updatedAt={updatedAt} />
          ))
      }
    </Grid>
  );
};
