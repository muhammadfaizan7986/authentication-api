const express = require("express");
const {
  getGoals,
  postGoals,
  updateGoals,
  deleteGoals,
} = require("../controllers/goalController");
const protect = require("../middlewares/authorizationMiddleware");

const routes = express.Router();

routes.get("/",protect,getGoals);
routes.post("/",protect,postGoals);
routes.put("/:id", updateGoals);
routes.delete("/:id", deleteGoals);

module.exports = routes;
