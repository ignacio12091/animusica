import React from 'react';
import './styles.css';
import logo from './../../assets/logo.png';

class Register extends React.Component {
    render() {
        return (
            <div className="biggestContainer">
                <div className="absolute">
                </div>
                <div className="logoAbsolute">
                    <img src={logo} className="logo" />
                </div>
                <div className="absolute2">
                </div>
                <div className="inputsContainer">
                    <h1 className="title" >Registro</h1>
                    <input type="text" placeholder="Nombre" />
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Contraseña" />
                    <input type="text" placeholder="Repetir contraseña" />
                    <button className="btn registerButton" onClick={() => {  }}>
                        Registrarse
                    </button>
                </div>
            </div>    
        );
    }
}

export default Register;
