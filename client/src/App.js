import React, { useState } from "react";
import Card from "@mui/material/Card";
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import "./App.css";

const data = [
  {
    id: 1,
    title: "Fett skön titel",
    body: "Work on the sköna in the life",
    lastModified: "2021-09-24"
  },
  {
    id: 2,
    title: "Gymövningar",
    body: "biceps, triceps, chest",
    lastModified: "2021-09-23"
  },
  {
    id: 3,
    title: "Gainfeed",
    body: "only aminoacids for my body",
    lastModified: "2021-09-21"
  },
]

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



const App = () => {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false)
  }


  return <div>
    {data.map((item) => {
      return (
        <>
          <Card onClick={handleOpen}>
            <CardContent>
              <Typography>
                {item.title}
              </Typography>
            </CardContent>
          </Card>
          <Modal
            open={open}
            onClose={handleClose}
          >
            <Box sx={style}>
              <Typography>En lista med saker</Typography>
            </Box>
          </Modal>
        </>
      )
    })}
  </div>;
};

export default App;
