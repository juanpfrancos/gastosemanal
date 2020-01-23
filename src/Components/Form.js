import React, { Component } from 'react';

class FormularioGasto extends Component{
     //Refs para los campos del formulario
    nombreGasto = React.createRef();
    cantidadGasto = React.createRef();        
    crearGasto = (e) =>{

        //Prevenir el default
            e.preventDefault();
        //Crear objeto con los datos
            const gasto ={
                nombreGasto : this.nombreGasto.current.value,
                cantidadGasto :this.cantidadGasto.current.value
            }
            console.log(gasto);
        //Agregar objeto y enviarlo por props

        //Resetear formulario

        e.currentTarget.reset();
        }    
    render() {

        return (
            //Invoco el método crearGasto en el formulario
           <form onSubmit={this.crearGasto}>
               <h1>Agrega tus datos</h1>
               <label>Agrega tus gastos</label>
               <input ref={this.nombreGasto} type="text" paleceholder="Ej.Comida"/>
               <label>Cantidad</label>
               <input ref={this.cantidadGasto} type="text" paleceholder="Ej. 20000"/>
               <input type="submit" value="agregar"/>

           </form>
        );
    }
}

export default FormularioGasto;