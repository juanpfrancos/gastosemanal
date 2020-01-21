import React, { Component } from 'react';

class FormularioGasto extends Component{
    render() {
        return (
           <form>
               <h1>Agrega tus datos</h1>
               <label>Agrega tus gastos</label>
               <input type="text" paleceholder="Ej.Comida"/>
               <label>Cantidad</label>
               <input type="text" paleceholder="Ej. 20000"/>
               <input type="submit" value="agregar"/>

           </form>
        );
    }
}

export default FormularioGasto;