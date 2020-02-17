import React from 'react';
import "./styles/Login.css";
import "./styles/Fonts.css";
import Register from "./Register";
// IMPORTAR LOS RECURSOS IMG


class Login extends React.Component {
    render () {
        return (
            // <h1>Carlos fernando chacon aguilar</h1>
            <div className="container-login">
                
                <div className="title-login">
                    <span>ANBU</span>
                </div>
                <div id="sub-login-title">
                    <span>Login</span>
                </div>

                <div id="nickname">
                    <i className="fas fa-user-alt"></i>
                    <input type="text" name="" id="" placeholder="Nickname"/>
                </div>
                <div id="password">
                    <i className="fas fa-user-lock"></i>
                    <input type="password" name="" id="" placeholder="Password"/>
                </div>
                <div id="buttom_login">
                    <input type="submit" value="LOGIN"/>
                </div>
                <div id="register-new">
                    <a href="">Registrese ahora</a>
                </div>
            </div>
        );
    }
}

export default Login;