const {
  createCheckSchema,
} = require("express-validator/lib/middlewares/schema");
const db = require("../db/queries");

module.exports = {
  getAllCategories: async function (req, res) {
    console.log("...Retreiving categories");
    const categories = await db.getAllCategories();
    res.send(categories);
    res.end;
  },
  getProductsByCategory: async function (req, res) {
    const categoryId = req.params["categoryId"];
    console.log(`...Retreiving products in category ${categoryId}`);
    const products = await db.getProductsByCategory(categoryId);
    res.send(products);
    res.end();
  },
  getEditCategoryForm: async function (req, res) {
    const category = await db.getCategoryById(req.params["categoryId"]);
    res.render("editCategory", { category });
  },
  getCreateCategoryForm: async function (req, res) {
    console.log("Getting create category form");
    res.render("createCategory");
  },
  // WRITE METHODS
  editCategory: async function (req, res) {
    try {
      const categoryId = req.params.categoryId;
      req.body.id = categoryId;
      console.log(req.body);
      await db.editCategory(req.body);
      console.log(`${req.body.name} Successfully changed`);
      res.end();
    } catch (error) {}
  },
  createCategory: async function (req, res) {
    try {
      console.log("creating new category");
      const categoryDetails = req.body;
      await db.createCategory(categoryDetails);
      res.end();
    } catch (error) {}
  },
};
