const db = require("../db/queries");
module.exports = {
  get: async (req, res) => {
    console.log("...Retreiving products page");
    const products = await db.getAllProducts();
    res.send(products);
    res.end();
  },
};
