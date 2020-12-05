import React from 'react';
import {Link} from 'react-router-dom'

import './tarjetaClientes.styles.scss'
const TarjetaClientes = ({cliente,esEditar,esEliminar}) => (
        <div className='tarjeta-cliente'>
            <p className='nombre-cliente'>{cliente.nombre} {cliente.apellido}</p>
            <div className='cliente-datos'>
                <p className='cliente-correo'>{cliente.correo}</p>
                <span className='cliente-celular'>{cliente.celular}</span>
            </div>
            {
                esEditar
                ?
                <Link 
                className='btn-cliente' 
                to={{
                    pathname:'/clientes_agregar',
                    cliente:cliente,
                    esEditar:true
                }}>
                    Editar
                </Link>
                :
                esEliminar
                ?
                <Link 
                className='btn-cliente' 
                to={{
                    pathname:'/clientes_agregar',
                    cliente:cliente,
                    esEliminar:true
                }}>
                    Eliminar
                </Link>
                :
                null
            }
        </div>
    );

export default TarjetaClientes;