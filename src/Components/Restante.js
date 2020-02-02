import React, {Component} from 'react';

class Restante extends Component{
    render() {
        return (
            <a href="#!" class="collection-item">Restante: ${this.props.restante}</a>
        )
    }
}

export default Restante;