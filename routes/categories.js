const express = require("express");
const categoriesRouter = express.Router();
const categoriesController = require("../controllers/categoriesController");

categoriesRouter.get("/", categoriesController.getAllCategories);
categoriesRouter.get(
  "/:categoryId",
  categoriesController.getProductsByCategory
);
categoriesRouter.get(
  "/edit/:categoryId",
  categoriesController.getEditCategoryForm
);
categoriesRouter.post("/edit/:categoryId", categoriesController.editCategory);

module.exports = categoriesRouter;
