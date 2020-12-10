import React, { Component } from 'react';
import GridClientes from '../../../components/gridClientes/gridClientes.component'
import BuscarClientes from '../../../components/buscarCliente/buscarCliente.component'

import './obtenerClientes.styles.scss'

class ObtenerClientes extends Component {
    constructor(props){
        super(props)
        this.state={
            listaClientes:[],
            searchField:'',
        }
    }

    componentDidMount(){
        fetch('http://localhost:3000/masajes/clientes')
        .then(response=>response.json())
        .then(users=>this.setState({listaClientes:users}))
        .catch(err=>console.log(err))
    }

    onSearchChange = e => {
        this.setState({searchField:e.target.value})
    }

    render() {
        const {listaClientes,searchField}=this.state

        const filterClientes=listaClientes.filter(cliente=>
            cliente.nombre.toLowerCase().includes(searchField) ||
            cliente.celular.toLowerCase().includes(searchField) ||
            cliente.correo.toLowerCase().includes(searchField)
        )

        return (
            <div className='obtener-clientes'>
                <BuscarClientes onSearchChange={this.onSearchChange}/>
                <GridClientes clientes={filterClientes} esEditar={this.props.esEditar} esEliminar={this.props.esEliminar}/>
            </div>
        );
    }
}

export default ObtenerClientes;