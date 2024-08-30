const express = require("express");
const productsRouter = express.Router();
const productsController = require("../controllers/productsController");

productsRouter.get("/", productsController.getAllProducts);
productsRouter.get("/create", productsController.getCreateProductForm);
productsRouter.get("/views/:productId", productsController.getProductById);
productsRouter.post("/create", productsController.addProduct);

module.exports = productsRouter;
