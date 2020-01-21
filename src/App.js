import React, {Component} from 'react';
import Header from './Components/Header'
import Container from '@material-ui/core/Container'
import FormularioGasto from './Components/Form'

class App extends Component{
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
        <FormularioGasto />
      </Container>
      </div>
    )
  }
}

export default App;
