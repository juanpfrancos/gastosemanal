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
        //Agregar objeto y enviarlo por props

            this.props.agregarGasto(gasto);


        //Resetear formulario
        e.currentTarget.reset();
        }    
    render() {

        return (
            //Invoco el método crearGasto en el formulario
           <form onSubmit={this.crearGasto}>
               <h4>Agrega tus gastos</h4>
               <div class="row">
                    <div class="input-field col s6">
                        <input ref={this.nombreGasto} id="IdGasto" placeholder="Gasto" type="text"/>
                        <label for="IdGasto">Agrega tus gastos</label>
                    </div>
                    <div class="input-field col s6">
                        <input ref={this.cantidadGasto} placeholder="Ej. 20000" id="Cgasto" type="text" class="validate"/>
                        <label for="Cgasto">Cantidad Gasto</label>
                    </div>
                    <button class="btn waves-effect waves-light" type="submit" name="action" value="agregar">Submit
                    <i class="material-icons right">send</i>
                    </button>
                </div>  
                    <script>
                    M.AutoInit();
                    </script>
           </form>
                 
        );
    }
}

export default FormularioGasto;