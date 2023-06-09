const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const connectDB = require("./config/connectDB");
const errorHandler = require("./middlewares/erorrMiddleware");
const app = express();
const port = process.env.PORT;
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/goal", require("./Routes/goalRouts"));
app.use("/api/user", require("./Routes/userRouts"));
app.use(errorHandler);
app.listen(port, () => console.log(`server started ${port.blue}`));
