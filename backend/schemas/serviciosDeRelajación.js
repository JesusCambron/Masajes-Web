const Joi = require("joi");

const schema = Joi.object({
    nombre: Joi.string().min(1).max(45).required(),
    duracionMinutos: Joi.number().min(1),
    costo: Joi.number().required().min(0)
});

module.exports = schema;