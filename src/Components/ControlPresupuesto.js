import React, {Component} from 'react';
import Presupuesto from './Presupuesto'
import Restante from './Restante'

class ControlPresupuesto extends Component{
    render() {
        return (
            <div>
                <h1>Control de Presupuesto</h1>
                <Presupuesto 
                    presupuesto={this.props.presupuesto}
                />
                <Restante 
                    restante={this.props.restante}
                />
            </div>
        )
    }
}

export default ControlPresupuesto;