const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/buscar", productController.buscar);
router.get("/agregar", productController.agregar);
router.get("/:id", productController.detalle);

module.exports = router;
