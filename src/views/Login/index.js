import React from 'react';
import axios from 'axios';
import './styles.css';
import logo from './../../assets/logo.png'

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            passwordHidden: true,
        };
    
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onPressLogin = this.onPressLogin.bind(this);

    }
    
    onChangeEmail(event) {
        this.setState({email: event.target.value});
    }

    onChangePassword(event) {
        this.setState({password: event.target.value});
    }

    onPressLogin(event) {
        const body = {
            email: this.state.email,
            password: this.state.password,
        }
        if (this.state.email !== "" && this.state.password !== "") {
            axios.post('http://localhost/login', body)
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        }
    }

    render() {
        return (
            <div className="biggestContainer">
                <div className="absolute">
                </div>
                <div className="logoAbsolute">
                    <img src={logo} className="logo" alt="appLogo" />
                </div>
                    <div className="absolute2">
                </div>
                <div className="inputsContainer">
                    <h1 className="loginTitle" >Inicio de sesión</h1>
                    <input type="text" placeholder="Email" value={this.state.email} style={{ marginBottom: '10%' }} onChange={this.onChangeEmail} />
                    <div className="inputContainer" style={{ marginBottom: '10%' }}>
                        <input type={this.state.passwordHidden ? "password" : "text"} placeholder="Contraseña" value={this.state.password} onChange={this.onChangePassword} />
                        { this.state.password !== "" ? 
                            <button className="material-icons eye" onClick={ () => { this.setState({passwordHidden: !this.state.passwordHidden }) }} >
                                { this.state.passwordHidden ? "visibility" : "visibility_off" }
                            </button>
                        :
                            null
                        }
                    </div>
                    <button className="btn loginButton" onClick={this.onPressLogin}>
                        Iniciar sesión
                    </button>
                </div>
            </div> 
/*             <div>
                <input type="text" value={this.state.email} onChange={this.onChangeEmail} />
                <input type="text" value={this.state.password} onChange={this.onChangePassword} />
                <button onClick={(e) => {this.onPressLogin(e)}}>
                    login
                </button>
            </div>     */
        );
    }
}

export default Login;
