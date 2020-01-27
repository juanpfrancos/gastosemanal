import React, {Component} from 'react';
import Header from './Components/Header'
import Container from '@material-ui/core/Container'
import FormularioGasto from './Components/Form'

class App extends Component{

//Agregar un nuevo gasto al state 
 state ={
   presupuesto: '',
   restante: '',
   gastos: {}
 }

agregarGasto = gasto =>{
  //Tomar una copia del state actual 
    const gastos = {...this.state.gastos};
   
  //Agregar gasto al objeto del state
    gastos[`gasto${Date.now()}`] = gasto;


  //Ponerlo en el state
  this.setState({
    gastos
  })
}


  render(){
    return(
      <div>
      <Container maxWidth="sm">
        <Header titulo='Title'/>
        <div>
            <div>
              <div className="columna-1">

              </div>
              <div className="columna-2">
                 
              </div>
            </div>
        </div>
        <FormularioGasto 
          agregarGasto ={this.agregarGasto}
        />
      </Container>
      </div>
    )
  }
}

export default App;
