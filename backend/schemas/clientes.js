const Joi = require("joi");

const schema = Joi.object({
    nombre: Joi.string().min(1).max(45).required(),
    apellido: Joi.string().min(1).max(45).required(),
    edad: Joi.number().min(0).max(120), 
    correo: Joi.string().pattern(new RegExp(".*")), 
    celular: Joi.string().min(10).max(13),
    //clienteRecomendador: Joi.array()
    clienteRecomendador: Joi.string().optional().allow("")
});

module.exports = schema;