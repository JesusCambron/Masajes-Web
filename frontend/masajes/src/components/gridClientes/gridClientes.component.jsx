import React from 'react';
import TarjetaClientes from '../tarjetaClientes/tarjetaClientes.component'

import './gridClientes.styles.scss'

const GridClientes = ({clientes,esEditar,esEliminar}) => (
        <div className='grid-clientes'>
            {
                clientes.map((cliente,id)=>
                    <TarjetaClientes key={id} cliente={cliente} esEditar={esEditar} esEliminar={esEliminar}/>
                )
            }
        </div> 
    );

export default GridClientes;