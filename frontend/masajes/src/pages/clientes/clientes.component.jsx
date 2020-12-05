import React from 'react';
import {Link} from 'react-router-dom'


import './clientes.styles.scss'

export const Clientes = () => (
    <div className='clientes'>
        <Link className='clientes-option' to='/clientes_agregar'>Agregar</Link>
        <Link className='clientes-option' to='/clientes_obtenerClientes'>Obtener Clientes</Link>
        <Link className='clientes-option' to='/clientes_editar'>Editar</Link>
        <Link className='clientes-option' to='/clientes_eliminar'>Eliminar</Link>
    </div>
)

export default Clientes;