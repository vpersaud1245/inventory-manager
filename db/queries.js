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
  getCategoryById: async function (categoryId) {
    const { rows } = await pool.query(
      "SELECT * FROM categories WHERE id = $1",
      [categoryId]
    );
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
  editProduct: async function (productDetails) {
    const result = await pool.query(
      "UPDATE products SET name = $1, description = $2, price = $3, qty = $4, img_url = $5, category_id = $6 WHERE id = $7",
      [
        productDetails.name,
        productDetails.description,
        productDetails.price,
        productDetails.qty,
        productDetails.img_url,
        productDetails.categoryId,
        productDetails.id,
      ]
    );
    console.log(result);
  },
  editCategory: async function (categoryDetails) {
    const result = await pool.query(
      "UPDATE categories SET name = $1, description = $2 WHERE id = $3",
      [categoryDetails.name, categoryDetails.description, categoryDetails.id]
    );
    console.log(result);
  },
  createCategory: async function (categoryDetails) {
    const result = await pool.query(
      "INSERT INTO categories (name, description) VALUES ($1, $2)",
      [categoryDetails.name, categoryDetails.description]
    );
    console.log(result);
  },
};

/**
 * | name | price | qty | img_url | category_id
 */
