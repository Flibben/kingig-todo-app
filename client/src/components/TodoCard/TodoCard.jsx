import React, { useState } from 'react'
import { Grid, Card, CardContent, Typography, Divider } from '@mui/material';
import { TodoModal } from '../TodoModal/TodoModal';
import MDEditor from '@uiw/react-md-editor';
import { textAlign } from '@mui/system';



export const TodoCard = ({ title, body, updatedAt, id }) => {
  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(true);
  }

  const date = new Date(updatedAt)


  return (
    <>
      <Grid item xs={12} sm={6} md={4} >
        <Card onClick={handleOpen} >
          <CardContent sx={{ "&:last-child": { paddingBottom: 1 } }}>
            <MDEditor.Markdown source={title} style={{ wordWrap: "break-word" }} />
            <MDEditor.Markdown source={body} style={{ wordWrap: "break-word" }} />
            <Divider />
            <Typography variant="b2">Updated: {date.toLocaleDateString()}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <TodoModal open={open} setOpen={setOpen} title={title} body={body} id={id} updatedAt={date.toLocaleDateString()} />

    </>
  )
}
