const express = require("express");
const mongoose = require("mongoose")
const cors = require('cors');
const todoRoutes = require('./routes/todoRoute');
require("dotenv").config();

const app = express();
app.use(cors());

app.use("/todos", todoRoutes);

const CONNECTION_URL = `mongodb+srv://admin:${process.env.PASSWORD}@todocluster.hppc4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));