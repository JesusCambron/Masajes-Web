const Joi = require("joi");

const schema = Joi.object({
    cliente: Joi.string(),
    servicios: Joi.string(),
    fecha: Joi.date(),
    duracion: Joi.number(),
    total: Joi.number()
});

module.exports = schema;