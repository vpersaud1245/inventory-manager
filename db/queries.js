const pool = require("./pool");

module.exports = {
  /*
    READ QUERIES
  */
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
  getProductById: async function (productId) {
    const { rows } = await pool.query("SELECT * FROM products WHERE id = $1", [
      productId,
    ]);
    return rows;
  },
  /*
    WRITE QUERIES
  */
  addProduct: async function (productDetails) {
    const result = await pool.query(
      "INSERT INTO products (name, description, price, qty, img_url, category_id) VALUES ($1, $2, $3, $4, $5, $6)",
      [
        productDetails.name,
        productDetails.description,
        productDetails.price,
        productDetails.qty,
        productDetails.img_url,
        productDetails.categoryId,
      ]
    );
    console.log(result);
  },
  deleteProduct: async function (productId) {
    const result = await pool.query("DELETE FROM products WHERE id = $1", [
      productId,
    ]);
    console.log(result);
  },
};

/**
 * | name | price | qty | img_url | category_id
 */
