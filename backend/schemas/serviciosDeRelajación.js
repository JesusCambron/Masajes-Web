const Joi = require("joi");

const schema = Joi.object({
    nombre: Joi.string().pattern(new RegExp("^[0-9a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,-]+$")).required().min(1).max(45),
    duracionMinutos: Joi.number().min(1),
    costo: Joi.number().required().min(0)
});

module.exports = schema;