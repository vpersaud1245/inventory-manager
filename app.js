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
 * DB IS POPULATED, SCRIPT WAS MADE TO POPULATE IT
 * DB IS NAMED top_inventory
 */
/**
 * TODO
 * Products (CRUD)
 * Category (CRUD)
 * Products List
 * Product Page
 * Category List
 */
