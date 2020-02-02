import React, {Component} from 'react';

class Presupuesto extends Component{
    render() {
        return (
                <a href="#!" class="collection-item">Presupuesto ${this.props.presupuesto}</a>
        )
    }
}


export default Presupuesto;