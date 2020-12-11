import React, { Component } from 'react'
import AgregarCita from './agregarCita/agregarCita.component'

import './cita.styles.scss'
import EditarCita from './editarCita/editarCita.component'
import EliminarCita from './eliminarCita/eliminarCita.component'

export default class Cita extends Component {
    constructor(){
        super()
        this.state={
            citas:[],
            citas_filtradas:[],
            agregar:false,
            editar:false,
            eliminar:false,
            listaClientes:[],
            listaServicios:[],
            idCliente:'',
            idServicio:'',
            fecha:'',
            hora:'',
            duracion:'',
            total:'',
            mensajeAgregar: ''
        }
    }

    componentDidMount(){
        fetch(`http://localhost:3000/masajes/citas`)
        .then(res=>res.json())
        .then(cita=>
            this.setState({citas:cita})
        )

        fetch('http://localhost:3000/masajes/clientes')
        .then(response=>response.json())
        .then(users=>this.setState({listaClientes:users}))
        .catch(err=>console.log(err))

        fetch('http://localhost:3000/masajes/servicios')
        .then(response=>response.json())
        .then(servicios=>this.setState({listaServicios:servicios}))
        .catch(err=>console.log(err))
    }

    onChangeCitaDate=(e)=>{
        const citasFil=this.state.citas.filter(cita=>
            cita.fecha.split('T')[0]===e.target.value
        )
        this.setState({
            citas_filtradas:citasFil,
            fecha:e.target.value
        })
    }

    onChangeCitaTime=(e)=>{
        const hora=e.target.value.split(':')
        this.setState({hora:`${hora[0]}:${hora[1]}:00`})
    }

    handleOption=(e)=>{
        if(e.target.name==='agregar'){
            this.setState({
                agregar:true,
                editar:false,
                eliminar:false
            })
        }else if(e.target.name==='editar'){
            this.setState({
                agregar:false,
                editar:true,
                eliminar:false
            })
        }else if(e.target.name==='eliminar'){
            this.setState({
                agregar:false,
                editar:false,
                eliminar:true
            })
        }
    }

    handleId=(e)=>{
        this.setState({idCliente:e.target.value})
    }

    handleservicio=(e)=>{
        this.setState({idServicio:e.target.value})
        fetch(`http://localhost:3000/masajes/servicios/${this.state.idServicio}`)
        .then(response=>response.json())
        .then(servicioId=>this.setState({
            duracion:servicioId[0].duracionMinutos,
            total:servicioId[0].costo
        }))
        .catch(err=>{
            this.setState({duracion:'',total:''})
            console.log(err)
        })
    }

    agregarCita=()=>{
        fetch(`http://localhost:3000/masajes/citas`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                cliente:this.state.idCliente,
                servicios:[this.state.idServicio],
                fecha:`${this.state.fecha} ${this.state.hora}`,
                duracion:this.state.duracion,
                total:this.state.total
            })
        })
        .then(res=>res.text())
        .then(data=> {
            if(data!=='La cita ha sido registrada'){
                this.setState({mensajeAgregar:'Error al agregar'})    
            }else{
                this.setState({mensajeAgregar:'Cita agregada con éxito'})    
            }
            return fetch(`http://localhost:3000/masajes/citas`)
        })
        .then(res=>res.json())
        .then(cita=>
            this.setState({citas:cita})
        )
        .catch(err=>console.error(err))
    }

    componentDidUpdate(prevprops,prevstate){
        if(prevstate.citas!==this.state.citas){
            const citasFil=this.state.citas.filter(cita=>
                cita.fecha.split('T')[0]===this.state.fecha
            )
            this.setState({
                citas_filtradas:citasFil 
            })
        }
        return false
    }


    render() {
    const {citas_filtradas,listaClientes,listaServicios,duracion,total} = this.state
        return (
            <div className='citas'>
                    <input type="date" name="date-cita" onChange={this.onChangeCitaDate}/>
                    <input type="time" name="time-cita" onChange={this.onChangeCitaTime}/>
                    <table className='table-citas'>
                        <thead>
                            <tr>
                                <th>Cliente</th>
                                <th>Servicio</th>
                                <th>Duración</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                citas_filtradas.map((element,id)=>
                                    <tr key={id}>
                                        <td>{element.cliente[0].nombre}</td>
                                        <td>{element.servicios[0].nombre}</td>
                                        <td>{element.duracion}</td> 
                                        <td>{element.total}</td> 
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                <div className='citas-botones'>
                    <button onClick={this.handleOption} name="agregar" className='btn agrear-btn'>Agregar</button>
                    <button onClick={this.handleOption} name="editar" className='btn editar-btn'>Editar</button>
                    <button onClick={this.handleOption} name="eliminar" className='btn eliminar-btn'>Eliminar</button>
                </div>
                {
                    this.state.agregar?
                        <AgregarCita clientes={listaClientes} mensaje={this.state.mensajeAgregar} agregarcliente={this.handleId} agregarservicio={this.handleservicio} servicios={listaServicios} duracion={duracion} total={total} agregarCita={this.agregarCita}/>
                    :
                    this.state.editar?
                        <EditarCita></EditarCita>
                    :
                    this.state.eliminar?
                        <EliminarCita></EliminarCita>
                    :
                    null
                }
            </div>
        )
    }
}