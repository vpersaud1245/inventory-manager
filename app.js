const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// Routes

const PORT = process.env.PORT;
app.listen(PORT, () => `Express app listening on port ${PORT}`);

/**
 * TODO
 * Products (CRUD)
 * Category (CRUD)
 * Products List
 * Product Page
 * Category List
 */
