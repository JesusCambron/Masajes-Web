const mongoose = require("mongoose");
const {Schema} = mongoose;

const schema = new Schema({
    nombre:{type:String, required:true},
    apellido:{type:String, required:true},
    edad:{type:Number, required:true},
    correo:{type:String},
    celular:{type:String, required:true},
    clienteRecomendador:[{type: Schema.Types.ObjectId, ref:"clientes"}]
}, {timestamps:true});

const model = mongoose.model("clientes", schema);
module.exports = model;