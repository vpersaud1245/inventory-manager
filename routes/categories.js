const express = require("express");
const categoriesRouter = express.Router();
const categoriesController = require("../controllers/categoriesController");

categoriesRouter.get("/create", categoriesController.getCreateCategoryForm);
categoriesRouter.get(
  "/:categoryId",
  categoriesController.getProductsByCategory
);
categoriesRouter.get(
  "/edit/:categoryId",
  categoriesController.getEditCategoryForm
);
categoriesRouter.get("/", categoriesController.getAllCategories);
categoriesRouter.post("/edit/:categoryId", categoriesController.editCategory);
categoriesRouter.post("/create", categoriesController.createCategory);

module.exports = categoriesRouter;
