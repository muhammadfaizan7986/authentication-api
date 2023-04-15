const express = require("express");
const {
  loginUser,
  registerUser,
  getSpecificUser,
} = require("../controllers/userController");
const protect = require("../middlewares/authorizationMiddleware");

const routes = express.Router();

routes.post("/login", loginUser);
routes.post("/register", registerUser);
routes.get("/getUser", protect, getSpecificUser);

module.exports = routes;
