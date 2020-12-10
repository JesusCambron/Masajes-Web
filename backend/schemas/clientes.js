const Joi = require("joi");

const schema = Joi.object({
    nombre: Joi.string().pattern(new RegExp("^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,-]+$")).required().min(1).max(45),
    apellido: Joi.string().pattern(new RegExp("^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,-]+$")).required().min(1).max(45),
    edad: Joi.number().min(0).max(120), 
    correo: Joi.string().pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
    celular: Joi.string().min(10).max(13),
    //clienteRecomendador: Joi.array()
    clienteRecomendador: Joi.string().optional().allow("")
});

module.exports = schema;