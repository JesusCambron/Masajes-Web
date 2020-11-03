const express = require("express");
const router = express.Router();
const serviciosController = require("../controllers/serviciosDeRelajacion");
const {validarDatos} = require("../middlewares");
const serviciosSchema = require("../schemas/serviciosDeRelajación");

router.post("/", validarDatos(serviciosSchema) ,serviciosController.agregar);
router.get("/", serviciosController.obtenerServicios);
router.get("/:_id", serviciosController.obtenerServicio);
router.put("/:_id", validarDatos(serviciosSchema) ,serviciosController.editar);
router.delete("/:_id", serviciosController.eliminar);

module.exports = router;