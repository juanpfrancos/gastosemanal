import React, {Component} from 'react';
import Header from './Components/Header'
import Container from '@material-ui/core/Container'
import FormularioGasto from './Components/Form'
import Listado from './Components/Listado'
import {validarPresupuesto} from './Components/Helpers'
import ControlPresupuesto from './Components/ControlPresupuesto'

class App extends Component{

//Agregar un nuevo gasto al state 
 state ={
   presupuesto: '',
   restante: '',
   gastos: {}
 }

 componentDidMount(){
   this.obtenerPresupuesto();
  }

  obtenerPresupuesto = () =>{
    let presupuesto = prompt('Cuál es el presupuesto')
    //Muestra si el valor ingresado es válido
    let resultado = validarPresupuesto(presupuesto);
    if (resultado) {
      this.setState({
        presupuesto: presupuesto,
        restante: presupuesto  
      })
          }
    else{
      this.obtenerPresupuesto();
        }
  }
agregarGasto = gasto =>{
  //Tomar una copia del state actual en forma de string con el spread operator
    const gastos = {...this.state.gastos};
   
  //Agregar gasto al objeto del state
    gastos[`gasto${Date.now()}`] = gasto;

  //Restar al presupuesto

  this.restarPresupuesto(gasto.cantidadGasto);
  
  
    console.log(gasto);
  //Ponerlo en el state
  this.setState({
    gastos
  })
}


//Restar del presupuesto cuando un gasto se crea

restarPresupuesto = cantidad =>{
  //Leer el gasto
  let restar = Number(cantidad); //Convertir el string cantidad en número

  //Tomar una copia del state actual
  let restante = this.state.restante;

  //Hacemos la resta
  
  restante -= restar;

  //Agregamos el nuevo state
  this.setState({
    restante
  }

  )
  
}

  render(){
    return(

      <Container maxWidth="md">
        <div class="row"> 
              <Header titulo='Control de Gastos'/> 
              <div class="col s6">  
                  <FormularioGasto agregarGasto ={this.agregarGasto} />
                  <Listado gastos={this.state.gastos}/>
              </div>
              <div class="col s6">
                  <ControlPresupuesto  presupuesto={this.state.presupuesto}  restante={this.state.restante} />
              </div>
        </div>
      </Container>
    )
  }
}

export default App;
