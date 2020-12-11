import React, { Component } from 'react';

import './agregarCliente.styles.scss'

class AgregarClientes extends Component {
    constructor(props){
        super(props)
        this.state={
            nombre:'',
            apellido:'',
            edad:'',
            correo:'',
            celular:'',
            clienteRecomendador:'',
            listaClientes:[],
            mensaje: ''
        }
    }
    handleSubmit = e => {
        e.preventDefault()
    
        const data= this.state.clienteRecomendador.length>0 ? 
        {
            nombre:this.state.nombre,
            apellido:this.state.apellido,
            edad: this.state.edad,
            correo:this.state.correo,
            celular:this.state.celular,
            clienteRecomendador:this.state.clienteRecomendador
        }
        :
        {
            nombre:this.state.nombre,
            apellido:this.state.apellido,
            edad: this.state.edad,
            correo:this.state.correo,
            celular:this.state.celular,
        }

        if(this.props.location.esEditar){
            fetch(`http://localhost:3000/masajes/clientes/${this.props.location.cliente._id}`,{
                method:'PUT',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(data)
            })
            .then(response=>
                response.text()
            )
            .then(cliente=>{
                if(cliente!==`${this.state.nombre} ha sido actualizado`){
                    this.setState({mensaje:'Error'})
                }else{
                    this.setState({mensaje:'Editado'})
                }
            }
            )
            .catch(err=>
                this.setState({mensaje:'Error al editar'})
            )
        }else if(this.props.location.esEliminar){
            fetch(`http://localhost:3000/masajes/clientes/${this.props.location.cliente._id}`,{
                method:'DELETE',
            })
            .then(response=>
                response.text()
            )
            .then(cliente=>
                this.setState({mensaje:'Eliminado'})
            )
            .catch(err=>
                this.setState({mensaje:'Error al eliminar'})
            )
        }
        else{
            fetch(`http://localhost:3000/masajes/clientes`,{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(data)
            })
            .then(response=>
                response.text()
            )
            .then(cliente=>{
                if(cliente!==`${this.state.nombre} ha sido registrado`){
                    this.setState({mensaje:'Error'})
                }else{
                    this.setState({mensaje:'Agregado'})
                }
            }
            )
            .catch(err=>
                this.setState({mensaje:'Error al agregar'})
            )
        }

    }

    handleChange= e =>{
        const {value,name}=e.target
        
        this.setState({[name]:value})
    }

    componentDidMount(){
        if(this.props.location.esEditar||this.props.location.esEliminar){

            const data= this.props.location.cliente.clienteRecomendador.length>0 ? 
        {
            nombre:this.props.location.cliente.nombre,
            apellido:this.props.location.cliente.apellido,
            edad:this.props.location.cliente.edad,
            correo:this.props.location.cliente.correo,
            celular:this.props.location.cliente.celular,
            clienteRecomendador:this.props.location.cliente.clienteRecomendador[0]._id,
        }
        :
        {
            nombre:this.props.location.cliente.nombre,
            apellido:this.props.location.cliente.apellido,
            edad:this.props.location.cliente.edad,
            correo:this.props.location.cliente.correo,
            celular:this.props.location.cliente.celular,
        }
            this.setState(
                data
            )
        }
        
        fetch('http://localhost:3000/masajes/clientes')
        .then(response=>response.json())
        .then(users=>this.setState({listaClientes:users}))
        .catch(err=>console.log(err))
    }
    render() {
        return (
            <div className='agregar-clientes'>
                <form onSubmit={this.handleSubmit} className='agregar-form'>
                    <div className='group'>
                        <input type="text" name="nombre" value={this.state.nombre} className='form-input' onChange={this.handleChange} />
                        <label htmlFor="nombre" className={`${this.state.nombre ? 'shrink' : ''} form-label`}>Nombre</label>
                    </div>
                    <div className="group">
                        <input type="text" name="apellido" value={this.state.apellido} className='form-input' onChange={this.handleChange} />
                        <label htmlFor="apellido" className={`${this.state.apellido ? 'shrink' : ''} form-label`}>Apellido</label>
                    </div>
                    <div className="group">
                        <input type="number" name="edad" value={this.state.edad} className='form-input' onChange={this.handleChange} />
                        <label htmlFor="edad" className={`${this.state.edad ? 'shrink' : ''} form-label`}>Edad</label>
                    </div>
                    <div className="group">
                        <input type="email" name="correo" value={this.state.correo} className='form-input' onChange={this.handleChange} />
                        <label htmlFor="correo" className={`${this.state.correo ? 'shrink' : ''} form-label`}>Correo</label>
                    </div>
                    <div className="group">
                        <input type="text" name="celular" value={this.state.celular} className='form-input' onChange={this.handleChange} />
                        <label htmlFor="celular" className={`${this.state.celular ? 'shrink' : ''} form-label`}>Celular</label>
                    </div>
                        <label htmlFor="clienteRecomendador" className={`form-label`}>Cliente recomendador</label>
                        <select name="clienteRecomendador" className='form-select' onChange={this.handleChange} id="clienteRecomendador">
                            {
                                this.props.location.esEditar||this.props.location.esEliminar?
                                    this.props.location.cliente.clienteRecomendador.length>0||this.props.location.cliente.clienteRecomendador==null?
                                        <option value={this.props.location.cliente.clienteRecomendador[0]._id}>{this.props.location.cliente.clienteRecomendador[0].nombre}</option>
                                        :''
                                :
                                <option value=""></option>
                            }
                            {
                                this.props.location.esEditar?
                                    <option value=""></option>
                                :
                                ""
                            }
                            {
                                this.state.listaClientes.map((recomendador,idx)=>(
                                    <option key={idx} value={recomendador._id}>{recomendador.nombre}</option>
                                ))
                            }
                        </select>
                        <button className='form-submit' onClick={this.handleSubmit}>
                            {
                                this.props.location.esEditar?
                                    "Editar"
                                :
                                this.props.location.esEliminar?
                                    "Eliminar"
                                :
                                    "Agregar"
                            }
                        </button>
                        <div>
                            {this.state.mensaje}
                        </div>
                </form>
            </div>
        );
    }
}
export default AgregarClientes;