const { mongo: { modelosMongoDB: { clientesModel } } } = require("../database/index");

const agregar = async (req, res) => {
    const {nombre, apellido, edad, correo, celular, clienteRecomendador} = req.body;
    await clientesModel.create({nombre, apellido, edad, correo, celular, clienteRecomendador});
    res.send(`${nombre} ha sido registrado`);
};

const obtenerClientes = async (req, res) => {
    await clientesModel.find().populate("clienteRecomendador").exec((err,clientes)=>{
        res.json(clientes);
    });
};

const obtenerCliente = async (req, res) => {
    const {_id} = req.params;
    await clientesModel.findById({_id}).populate("clienteRecomendador").exec((err,cliente)=>{
        res.json(cliente);
    });
};

const editar = async (req, res) => {
    const {nombre, apellido, edad, correo, celular, clienteRecomendador} = req.body;
    const {_id} = req.params;
    await clientesModel.findByIdAndUpdate(_id,{nombre, apellido, edad, correo, celular, clienteRecomendador});
    res.send(`${nombre} ha sido actualizado`);
};

const eliminar = async (req, res) => {
    const {_id} = req.params;
    const clienteEliminado = await clientesModel.findByIdAndDelete({_id});
    res.send(`${clienteEliminado} ha sido eliminado`);
};

module.exports = {
    agregar,
    obtenerClientes,
    obtenerCliente,
    editar,
    eliminar
}