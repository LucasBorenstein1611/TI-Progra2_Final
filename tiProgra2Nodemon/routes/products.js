const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/crear", productController.crear);
router.get("/buscar", productController.buscar);
router.get("/:id", productController.detalle);

module.exports = router;
