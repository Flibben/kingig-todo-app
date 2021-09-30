const express = require("express");
// import mongoose from "mongoose";
// import cors from "cors";

const app = express();
// app.use(cors());

// app.use("/posts", postRoutes);

const CONNECTION_URL = "";

const PORT = process.env.PORT || 5000;

// mongoose
//   .connect(CONNECTION_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() =>
//     app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`))
//   )
//   .catch((error) => console.log(error.message));

// mongoose.set("useFindAndModify", false);

app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`))