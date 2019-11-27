import React from 'react';
import "./styles/Register.css";
import Register_info from "./Register_info";

/*COMPONENTE MAIN DEL REGISTRO*/
class Register extends React.Component {
    render () {
        return (
            <div className="container-register">
                <div className="title-register">
                    <h1>Registro de informacion usuario<br/> Anbu</h1>    
                </div>
                {/* FORMULARIO PARA LAS CREDENCIALES DEL USUARIO */}
                {/* <form action="" className="credential-user">
                    <label>
                     Username <input type="text" name="username" id=""/>    
                    </label>
                    <label>
                        Password <input type="text" name="password" id=""/>
                    </label>
                    <label>
                        E-mail <input type="text" name="email" id=""/>
                    </label>
                </form> */}
                <div className="container-transition">
                    <Register_info/>
                </div>
                <div className="button-area">
                    <input type="button" value="Atras"></input>
                    <input type="button" value="Siguiente"></input>
                    <input type="submit" value="Enviar"></input>
                </div>
            </div>
        )
    }
}
export  default Register;