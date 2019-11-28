import React from 'react';
import "./styles/Register_info.css";

/*FORMULARIO DE REGISTRO DE CREDENCIALES DEL USUARIO*/
class Register_credential extends React.Component {
    render () {
        return (
            <div className="container-register_info">
                <form action="" className="user-data-credential">
                <label>
                     Username <input type="text" name="username" id=""/>    
                    </label>
                    <label>
                        Password <input type="password" name="password" id=""/>
                    </label>
                    <label>
                        Confirmar password <input type="password" name="password" id=""/>
                    </label>
                    <label>
                        E-mail <input type="text" name="email" id=""/>
                    </label>
                    <label>
                       Confirmar E-mail <input type="text" name="email" id=""/>
                    </label>
                </form>
            </div>
        )
    }

}
export default Register_credential;