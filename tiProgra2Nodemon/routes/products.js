const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/agregar", productController.agregar);
router.post("/guardar", productController.guardar);
router.post("/:id/comentario", productController.agregarComentario);
router.get("/:id", productController.detalle);

module.exports = router;
