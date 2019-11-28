import React from 'react';
import "./styles/Register.css";
import Register_info from "./Register_info";
import Register_credential from "./Register_credential";

/*COMPONENTE MAIN DEL REGISTRO*/
class Register extends React.Component {
    constructor(props){
        super(props);

    }
    handleNetxt(event) {
        
    }    
    render () {
        return (
            <div className="container-register">
                <div className="title-register">
                    <h1>Registro de informacion usuario<br/> Anbu</h1>    
                </div>
                <div className="container-transition">
                    <Register_info/>
                    <Register_credential/>
                </div>
                <div className="button-area">
                    <input type="button" value="Atras"></input>
                    <input type="button" value="Siguiente" onClick={this.handleNetxt}></input>
                    <input type="submit" value="Enviar"></input>
                </div>
            </div>
        )
    }
    
}
export  default Register;