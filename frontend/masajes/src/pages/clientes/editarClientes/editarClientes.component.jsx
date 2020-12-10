import React from 'react';
import ObtenerClientes from '../obtenerClientes/obtenerClientes.component';

const EditarClientes = () => {
    return (
        <div>
            <ObtenerClientes esEditar={true}/>
        </div>
    );
};

export default EditarClientes;