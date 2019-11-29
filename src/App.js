import React, { Component } from 'react';
import '../src/bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';

class App extends Component {
  state = {
    citas: []
  }

  crearNuevaCita = (datos) => {
    console.log(datos);
    // Copiar el state actual
    const citas = [...this.state.citas, datos]

    // Agregar o actualizar el nuevo state
    this.setState({
      citas
    })
    console.log(citas)
  }
  render() {
    return (
      <div className="container">
        <Header
        titulo='Administrador Pacientes Veterinaria'
        />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita
            crearNuevaCita={this.crearNuevaCita}
            />
          </div>
          <div className='mt-5 col-md-10 mx-auto'>
            <ListaCitas 
              citas={this.state.citas}
            />
          </div>
        </div>

      </div>
    );
  }
}

export default App;


