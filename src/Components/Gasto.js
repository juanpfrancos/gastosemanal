import React, {Component} from 'react';

class Gasto extends Component{
    render() {
        const {cantidadGasto, nombreGasto} = this.props.gasto;

        return (
            <li>
                {nombreGasto}      <span></span>          {cantidadGasto}
            </li>
        );
    }
}

export default Gasto;