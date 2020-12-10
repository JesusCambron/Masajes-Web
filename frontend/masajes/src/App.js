import React from 'react'
import { Route, Switch } from 'react-router';
import './App.css';

import Header from './components/header/header.component'
import Homepage from './pages/homepage/homepage.component'
import Clientes from './pages/clientes/clientes.component'
import AgregarClientes from './pages/clientes/agregarClientes/agregarClientes.component'
import ObtenerClientes from './pages/clientes/obtenerClientes/obtenerClientes.component'
import EditarClientes from './pages/clientes/editarClientes/editarClientes.component';
import EliminarClientes from './pages/clientes/eliminarClientes/eliminarClientes.component';
import Cita from './pages/citas/cita.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/clientes' component={Clientes}/>
        <Route path='/clientes_agregar' component={AgregarClientes}/>
        <Route path='/clientes_obtenerClientes' component={ObtenerClientes}/>
        <Route path='/clientes_editar' component={EditarClientes}/>
        <Route path='/clientes_eliminar' component={EliminarClientes}/>
        <Route path='/citas' component={Cita}/>
      </Switch>
    </div>
  );
}

export default App;
