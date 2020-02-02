import React, {Component} from 'react';
import Presupuesto from './Presupuesto'
import Restante from './Restante'

class ControlPresupuesto extends Component{
    render() {
        return (
            <div class="card grey center">
                <h4>Control de Presupuesto</h4>
                <div class="collection container">
                <Presupuesto presupuesto={this.props.presupuesto}/>
                <Restante restante={this.props.restante}/>
                </div>
                <br></br>
            </div>
        )
    }
}

export default ControlPresupuesto;