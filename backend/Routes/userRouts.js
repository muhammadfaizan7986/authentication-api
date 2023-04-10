const express = require("express");
const {
  loginUser,
  registerUser,
  getSpecificUser,
} = require("../controllers/userController");

const routes = express.Router();

routes.post("/login", loginUser);
routes.post("/register", registerUser);
routes.get("/getUser", getSpecificUser);

module.exports = routes;