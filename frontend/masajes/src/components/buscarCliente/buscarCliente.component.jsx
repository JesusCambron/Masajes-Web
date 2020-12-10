import React from 'react';

import './buscarCliente.styles.scss'

const BuscarCliente = ({onSearchChange}) => (
        <input 
            className="input-search-cliente"
            type="search" 
            name="search" 
            onChange={onSearchChange}
        />
    );

export default BuscarCliente;