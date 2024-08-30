const db = require("../db/queries");
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
};
