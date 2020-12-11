import React from 'react';

import './agregarCita.styles.scss'

const AgregarCita = ({clientes,servicios,agregarcliente,agregarservicio,duracion,total,agregarCita,mensaje}) => (
            <div className='agregara-form'>
                <select className='btn-agregar' name="" id="" onChange={agregarcliente}>
                    <option></option>
                    {
                        clientes.map((cliente,id)=>(
                            <option key={id} value={cliente._id}>{cliente.nombre}</option>
                        ))
                    }
                </select>
                <select className="btn" name="" id="" onChange={agregarservicio}>
                    <option></option>
                    {
                        servicios.map((servicio,id)=>(
                            <option key={id} value={servicio._id}>{servicio.nombre}</option>
                        ))
                    }
                </select>
                <label htmlFor="duracion">Duración</label>
                <input type="text" name="duracion" readOnly value={duracion}></input>
                <label htmlFor="total">Total</label>
                <input type="text" name="total" readOnly value={total}></input>
                <button className='btn-agregar' onClick={agregarCita}>Agregar</button>
                <div>
                    {mensaje}
                </div>
            </div>
    );

export default AgregarCita;