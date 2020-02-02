import React, {Component} from 'react';
import Gasto from './Gasto';

class Listado extends Component{
    render() {
        return (
            <div class="container">
                
                    <h4>Listado de Gastos</h4>
                <div class="collection">
                        {Object.keys(this.props.gastos).map(key => (
                            <Gasto 
                            key={key}    
                            gasto={this.props.gastos[key]}
                            />
                        ))}
                </div>         
            </div>
        );
    }
}

export default Listado;