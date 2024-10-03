const db = require("../db/queries");
const { getAllCategories } = require("./categoriesController");
module.exports = {
  getAllProducts: async (req, res) => {
    console.log("...Retreiving products page");
    const products = await db.getAllProducts();
    res.send(products);
    res.end();
  },
  getProductById: async (req, res) => {
    const productId = req.params["productId"];
    console.log(`...Retreiving product with Id ${productId}`);
    const product = await db.getProductById(productId);
    res.send(product);
    res.end();
  },
  getCreateProductForm: async (req, res) => {
    const categories = await db.getAllCategories();
    res.render("createProduct", { categories });
  },
  getDeleteProductForm: async (req, res) => {
    const products = await db.getAllProducts();
    res.render("deleteProduct", { products });
  },
  getEditProductForm: async (req, res) => {
    const product = await db.getProductById(req.params["productId"]);
    const categories = await db.getAllCategories();
    console.log(product);
    res.render("editProduct", { product, categories });
  },
  addProduct: async (req, res) => {
    try {
      await db.addProduct(req.body);
      console.log(`${req.body.name} Successfully added`);
      res.end();
    } catch (error) {}
  },
  deleteProduct: async (req, res) => {
    try {
      await db.deleteProduct(req.body.productId);
      const products = await db.getAllProducts();
      res.render("deleteProduct", { products });
    } catch (error) {}
  },
  editProduct: async (req, res) => {
    try {
      const productId = req.params.productId;
      req.body.id = productId;
      console.log(req.body);
      await db.editProduct(req.body);
      console.log(`${req.body.name} Successfully changed`);
      res.end();
    } catch (error) {}
  },
};
