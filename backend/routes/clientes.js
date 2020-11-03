const express = require("express");
const router = express.Router();
const clientesController = require("../controllers/clientesController");
const {validarDatos} = require("../middlewares");
const clientesSchema = require("../schemas/clientes");

router.post("/", validarDatos(clientesSchema) ,clientesController.agregar);
router.get("/", clientesController.obtenerClientes);
router.get("/:_id", clientesController.obtenerCliente);
router.put("/:_id", validarDatos(clientesSchema) ,clientesController.editar);
router.delete("/:_id", clientesController.eliminar);

module.exports = router;