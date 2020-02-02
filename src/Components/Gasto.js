import React, {Component} from 'react';

class Gasto extends Component{
    render() {
        const {cantidadGasto, nombreGasto} = this.props.gasto;

        return (
             <a href="#!" class="collection-item">{nombreGasto}<span> </span>{cantidadGasto}</a>
        );
    }
}

export default Gasto;