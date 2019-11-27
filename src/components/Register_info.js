import React from 'react';
import "./styles/Register_info.css";

/*FOMULARIO DE REGISTRO DE INFORMACION PERSONAL*/
class Register_info extends React.Component {
    
    render () {
        return (
            <div className="container-register_info">
                {/* FORMULARIO PARA LOS DATOS DEL USUARIO */}
                <form action="" className="user-data">
                    <label>
                        Primer Nombre : <input type="text" name="first_name" id=""/>
                    </label>
                    <label>
                        Segundo Nombre : <input type="text" name="second_name" id=""/>
                    </label>
                    <label>
                        Primer Apellido : <input type="text" name="first_surname" id=""/>
                    </label>
                    <label>
                        Segundo Apellido : <input type="text" name="second_surname" id=""/>
                    </label>
                    <label>
                        Edad : <input type="number" name="age" id="" placeholder="18"/>
                    </label>
                    <label>
                        Fecha de nacimiento : <input type="date" name="" id=""/>
                    </label>
                    <label>
                        Dirección email : <input type="email" name="" id=""/>
                    </label>
                    <label>
                        Pais : <select name="pais" id="">
                            <option></option>
                            <option>Colombia</option>
                        </select>
                    </label>
                    <label>
                        Ciudad : <select name="ciudad" id="">
                            <option></option>
                            <option>Bucaramanga</option>
                        </select>
                    </label>
                    <label>
                        Barrio : <select name="barrio" id="">
                            <option></option>
                            <option>Provenza</option>
                        </select>
                    </label>
                    <label>
                        Dirección : <br/><select name="" id="">
                            <option ></option>
                            <option >Calle</option>
                            <option >Carrera</option>
                            <option >Diagonal</option>
                        </select>
                        <input type="text" name="" id=""/><br/>
                        {/* ---------- */}
                        <select name="" id="">
                            <option ></option>
                            <option >Calle</option>
                            <option >Carrera</option>
                            <option >Diagonal</option>
                        </select>
                        <input type="text" name="" id=""/>
                    </label>
                </form>
            </div>
        )
    }
}

export default Register_info;