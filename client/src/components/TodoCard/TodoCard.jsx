import React, { useState } from 'react'
import { Grid, Card, CardContent, Typography, Modal, Box } from '@mui/material';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const TodoCard = ({ title, body, last_modified }) => {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Grid item xs={12} sm={6} md={2}>
        <Card onClick={handleOpen}>
          <CardContent>
            <Typography>{title}</Typography>
            <Typography>{body}</Typography>
            <Typography>{last_modified}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography>En lista med saker</Typography>
        </Box>
      </Modal>
    </>
  )
}
