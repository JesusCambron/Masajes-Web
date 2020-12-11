const { mongo: { modelosMongoDB: { citaModel } } } = require("../database/index");

const agregar = async (req, res) => {
    const restarHora = 7;
    const {cliente, servicios, fecha, duracion, total} = req.body;
    fechaInicio = new Date(new Date(fecha).getTime()-(restarHora*3600000));
    const fechaFinal = new Date(fechaInicio.getTime()+duracion*60000);

    //Valida si existe otra cita  a la misma hora
    const citaMismaHora = await citaModel.exists({ $or:[
        {fecha:{$lte:fechaInicio},
        fechaFin:{$gt:fechaInicio}},
        
        {fecha:{$lte:fechaFinal},
        fechaFin:{$gt:fechaFinal}},

        {fecha:{$gte:fechaInicio},
        fechaFin:{$lte:fechaFinal}},
        
        // {fecha:{$gte:fechaInicio},
        // fecha:{$lte:fechaFinal}},
        
        // {fechaFinal:{$gte:fechaInicio},
        // fechaFinal:{$lte:fechaFinal}},
    ]});

    if(!citaMismaHora) {
        await citaModel.create({cliente, servicios, fecha:fechaInicio, duracion, fechaFin:fechaFinal,total});
        return res.send(`La cita ha sido registrada`);
    }
    res.status(400).send(`No se puede registrar la cita porque no esta disponible la hora`);
};

const obtenerCitas = async (req, res) => {
    citaModel.find().populate("servicios").populate("cliente").exec((err, citas)=>{
        res.json(citas);
    });
};

const obtenerCita = async (req, res) => {
    const {_id} = req.params;
    await citaModel.findById({_id}).populate("servicios").populate("cliente").exec((err, citas)=>{
        res.json(citas);
    });
};

const editar = async (req, res) => {
    const {_id} = req.params;
    const {cliente, servicios, fecha, duracion, total} = req.body;
    await citaModel.findByIdAndUpdate({_id},{cliente, servicios, fecha, duracion, total});
    res.send(`La cita ha sido actualizada`);
};

const eliminar = async (req, res) => {
    const {_id} = req.params;
    const cita = await clientesModel.findByIdAndDelete({_id});
    res.send(`${cita} ha sido eliminado`);
};

module.exports = {
    agregar,
    obtenerCitas,
    obtenerCita,
    editar,
    eliminar
}