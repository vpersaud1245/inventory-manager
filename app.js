const express = require("express");
const app = express();
const productsRouter = require("./routes/products");
const categoriesRouter = require("./routes/categories");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}`));

/**
 * JUST COMPLETED
 * EDIT COMPLETED ITEMS CAN BE EDITED 10/3/2024
 * DB IS POPULATED, SCRIPT WAS MADE TO POPULATE IT
 * DB IS NAMED top_inventory
 */
/**
 * TODO
 * WORK ON CREATING CATEGORIES NEXT
 * Edit product
 * Add category
 * Edit category details
 * Remove category
 * Add edge cases (If no products exist or no categories exist. If there are no products in that category)
 * Add views
 * Backend form validation
 */
