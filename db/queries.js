const pool = require("./pool");

module.exports = {
  getAllProducts: async function () {
    const { rows } = await pool.query("SELECT * FROM products");
    return rows;
  },
  getAllCategories: async function () {
    const { rows } = await pool.query("SELECT * FROM categories");
    return rows;
  },
  getProductsByCategory: async function (categoryId) {
    const { rows } = await pool.query(
      "SELECT * FROM products WHERE category_id = $1",
      [categoryId]
    );
    return rows;
  },
};
