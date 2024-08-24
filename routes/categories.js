const express = require("express");
const categoriesRouter = express.Router();
const categoriesController = require("../controllers/categoriesController");

categoriesRouter.get("/", categoriesController.getAllCategories);
categoriesRouter.get(
  "/:categoryId",
  categoriesController.getProductsByCategory
);
module.exports = categoriesRouter;
