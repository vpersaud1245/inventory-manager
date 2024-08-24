const express = require("express");
const productsRouter = express.Router();
const productsController = require("../controllers/productsController");

productsRouter.get("/", productsController.get);

module.exports = productsRouter;
