const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

const PORT = 5000;
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongoDB");
  } catch (err) {
    throw err;
  }
};

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(PORT, () => {
  connect();
  console.log(`Server listening on port ${PORT}`);
});
