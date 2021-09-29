import React, { useState } from 'react'
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { TodoModal } from '../TodoModal/TodoModal';



export const TodoCard = ({ title, body, lastModified, id }) => {
  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(true);
  }

  return (
    <>
      <Grid item xs={12} sm={6} md={2}>
        <Card onClick={handleOpen}>
          <CardContent>
            <Typography>{title}</Typography>
            <Typography>{body}</Typography>
            <Typography>{lastModified}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <TodoModal open={open} setOpen={setOpen} title={title} body={body} id={id} lastModified={lastModified} />

    </>
  )
}
