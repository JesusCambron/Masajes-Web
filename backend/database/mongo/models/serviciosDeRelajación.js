const mongoose = require("mongoose");
const {Schema} = mongoose;

const schema = new Schema({
    nombre:{type:String, required:true, unique:true},
    duracionMinutos:{type:Number, required:true},
    costo:{type:Number, required:true, min:0}
}, {timestamps:true});

const model = mongoose.model("servicioDeRelajacion", schema);
module.exports = model;