const {mongo:{modelosMongoDB:{serviciosDeRelajaciónModel}}} = require("../database/index");

const agregar = async (req, res) => {
    const {nombre, duracionMinutos, costo} = req.body;
    await serviciosDeRelajaciónModel.create({nombre, duracionMinutos, costo});
    res.send(`${nombre} ha sido registrado`);
};

const obtenerServicios = async (req, res) => {
    const servicios = await serviciosDeRelajaciónModel.find();
    res.json(servicios);
};

const obtenerServicio = async (req, res) => {
    const {_id} = req.params;
    const servicio = await serviciosDeRelajaciónModel.findById({_id});
    res.json(servicio);
};

const editar = async (req, res) => {
    const {nombre, duracionMinutos, costo} = req.body;
    const {_id} = req.params;
    await serviciosDeRelajaciónModel.findByIdAndUpdate({_id},{nombre, duracionMinutos, costo});
    res.send(`${nombre} ha sido actualizado`);
};

const eliminar = async (req, res) => {
    const {_id} = req.params;
    await serviciosDeRelajaciónModel.findByIdAndDelete({_id});
    res.send(`${nombre} ha sido eliminado`)
};

module.exports = {
    agregar,
    obtenerServicios,
    obtenerServicio,
    editar,
    eliminar
}