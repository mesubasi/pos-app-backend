//server.js

const express = require("express"); //For Backend
const mongoose = require("mongoose"); //For MongoDB Connection
const dotenv = require("dotenv"); // For .env
const app = express();
const cors = require("cors");
const PORT = 5000;

// routes
const categoryRoute = require("./routes/categories");
const productRoute = require("./routes/products");
const invoiceRoute = require("./routes/invoices");

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongoDB");
  } catch (err) {
    throw err;
  }
};

//middlewares
app.use(express.json());
app.use(cors());

app.use("/api/categories", categoryRoute);
app.use("/api/products", productRoute);
app.use("/api/invoices", invoiceRoute);

app.listen(PORT, () => {
  connect();
  console.log(`Server listening on port ${PORT}`);
});
