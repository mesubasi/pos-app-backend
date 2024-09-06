//server.js

const express = require("express"); //For Backend
const mongoose = require("mongoose"); //For MongoDB Connection
const dotenv = require("dotenv"); // For .env
const app = express();
const cors = require("cors");
const logger = require("morgan");
const cookieParser = require("cookie-parser");

// routes
const categoryRoute = require("./routes/categories");
const productRoute = require("./routes/products");
const invoiceRoute = require("./routes/invoices");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const verifyJWT = require("./middleware/verifyJWT");
const morgan = require("morgan");

dotenv.config();
const PORT = process.env.PORT || 5000;

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongoDB");
  } catch (err) {
    throw err;
  }
};

//middlewares
app.use(logger("combined"));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use(verifyJWT);
app.use("/api/categories", categoryRoute);
app.use("/api/products", productRoute);
app.use("/api/invoices", invoiceRoute);
app.use("/api/users", userRoute);

connect().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});
