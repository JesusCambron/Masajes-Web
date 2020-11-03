const mongoose = require("mongoose");
const {Schema} = mongoose;

const schema = new Schema({
    cliente:[{type: Schema.Types.ObjectId, ref: "clientes", required:true}],
    servicios:[{type: Schema.Types.ObjectId, ref: "servicioDeRelajacion"}],
    fecha: {type:Date, required:true},
    duracion:{type:Number, required:true},
    fechaFin: {type:Date, required:true},
    total: {type: Number, required:true, min:0}
}, {timestamps:true});

const model = mongoose.model("cita", schema);
module.exports = model;