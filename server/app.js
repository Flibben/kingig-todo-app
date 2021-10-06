const express = require("express");
const mongoose = require("mongoose")
const cors = require('cors');
const todoRoute = require('./routes/todoRoute');
const registerRoute = require('./routes/registerRoute')
const loginRoute = require('./routes/loginRoute')
require("dotenv").config();
//importera authfunktionen

const app = express();
app.use(cors());
app.use(express.json())
//app.use(authUser())

app.use("/todos", todoRoute)
app.use("/register", registerRoute)
app.use("/login", loginRoute)

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
