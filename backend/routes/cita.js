const express = require("express");
const router = express.Router();
const citasController = require("../controllers/cita");
const {validarDatos} = require("../middlewares");
const citasSchema = require("../schemas/citas");

router.post("/", validarDatos(citasSchema) ,citasController.agregar);
router.get("/", citasController.obtenerCitas);
router.get("/:_id", citasController.obtenerCita);
router.put("/:_id", validarDatos(citasSchema) ,citasController.editar);
router.delete("/:_id", citasController.eliminar);

module.exports = router;