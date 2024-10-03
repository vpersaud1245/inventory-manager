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
};
