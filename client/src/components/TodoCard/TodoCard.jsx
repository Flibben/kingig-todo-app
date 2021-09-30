import React, { useState } from 'react'
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { TodoModal } from '../TodoModal/TodoModal';
import MDEditor from '@uiw/react-md-editor';



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
            <MDEditor.Markdown source={title} style={{ wordWrap: "break-word" }} />
            <MDEditor.Markdown source={body} style={{ wordWrap: "break-word" }} />
            <Typography>{lastModified}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <TodoModal open={open} setOpen={setOpen} title={title} body={body} id={id} lastModified={lastModified} />

    </>
  )
}
