const express = require("express");
const routerIndex = express.Router();
const clientesRouter = require("./clientes");
const serviciosRouter = require("./serviciosDeRelajación");
const citaRouter = require("./cita");

routerIndex.use("/clientes", clientesRouter);
routerIndex.use("/servicios", serviciosRouter);
routerIndex.use("/citas", citaRouter);

module.exports = routerIndex;