const express = require("express");
const salesController = require("../controllers/sales.controllers");
const verifyToken = require("../middlewares/verifyTokenMiddleware");

const SalesRoutes = express.Router();

SalesRoutes.get("/", verifyToken, salesController.getAllSales);
SalesRoutes.post("/", verifyToken, salesController.createSales);
SalesRoutes.put("/:id", verifyToken, salesController.updateSales);
SalesRoutes.delete("/:id", verifyToken, salesController.deleteSales);

module.exports = SalesRoutes;
