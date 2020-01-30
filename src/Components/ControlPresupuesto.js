import React, {Component} from 'react';
import Presupuesto from './Presupuesto'
import Restante from './Restante'

class ControlPresupuesto extends Component{
    render() {
        return (
            <div>
                En el control
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