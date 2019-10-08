import React from 'react';
import axios from 'axios';
import './styles.css';
import logo from './../../assets/logo.png';

class Register extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            email: '',
            password: '',
            repeatedPassword: '',
            birth: this.todayDate(),
            passwordHidden: true,
            repeatedPasswordHidden: true,
        };
    

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeRepeatedPassword = this.onChangeRepeatedPassword.bind(this);
        this.onPressRegister = this.onPressRegister.bind(this);
        this.onChangeSurname = this.onChangeSurname.bind(this);
        this.onChangeBirth = this.onChangeBirth.bind(this);
    }

    onChangeName(event) {
        this.setState({ name: event.target.value })
    }

    onChangeEmail(event) {
        this.setState({ email: event.target.value })
    }

    onChangePassword(event) {
        this.setState({ password: event.target.value })
    }

    onChangeRepeatedPassword(event) {
        this.setState({ repeatedPassword: event.target.value })
    }

    register() {
        const body = {
            name: this.state.name,
            password: this.state.password,
            surname: this.state.surname,
            email: this.state.email,
            birth: this.state.birth,
        }
        axios.post('http://localhost/register', body)
            .then(function (response) {
                if (!response.data.success) {
                    alert('Este email ya está registrado')
                } else {
                    window.location.href = '/login';
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    onPressRegister() {
        const birth = new Date(this.state.birth)
        const today = new Date(this.todayDate())
        if (this.state.name !== "" && this.state.email !== "" && this.state.password !== "" && this.state.repeatedPassword !== "" && this.state.surname !== "") {
            if (!(birth > today)) {
                if (this.state.password === this.state.repeatedPassword) {
                    this.register()
                } else {
                    alert("Las contraseñas deben coincidir")
                }
            } else {
                alert("La fecha debe ser menor a la de hoy")
            }
        } else {
            alert("Hay campos vacíos")
        }
    }

    onChangeSurname(event) {
        this.setState({ surname: event.target.value })
    }

    onChangeBirth(event) {
        this.setState({ birth: event.target.value })
    }

    todayDate() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        today = yyyy + '-' + mm + '-' + dd;
        return today;
    }

    render() {
        const today = this.todayDate()
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
                    <h1 className="title" >Registro</h1>
                    <input type="text" placeholder="Nombre" value={this.state.name} onChange={this.onChangeName} />
                    <input type="text" placeholder="Apellido" value={this.state.surname} onChange={this.onChangeSurname} />
                    <input type="text" placeholder="Email" value={this.state.email} onChange={this.onChangeEmail} />
                    <input className="date" type="date" max={today} value={this.state.birth} name="Fecha de nacimiento" onChange={this.onChangeBirth}></input>
                    <div className="inputContainer">
                        <input type={this.state.passwordHidden ? "password" : "text"} placeholder="Contraseña" value={this.state.password} onChange={this.onChangePassword} />
                        { this.state.password !== "" ? 
                            <button className="material-icons eye" onClick={ () => { this.setState({passwordHidden: !this.state.passwordHidden }) }} >
                                { this.state.passwordHidden ? "visibility" : "visibility_off" }
                            </button>
                        :
                            null
                        }
                    </div>
                    <div className="inputContainer">
                        <input type={this.state.repeatedPasswordHidden ? "password" : "text"} placeholder="Repetir contraseña" value={this.state.repeatedPassword} onChange={this.onChangeRepeatedPassword} />
                        { this.state.repeatedPassword !== "" ? 
                            <button className="material-icons eye" onClick={ () => { this.setState({repeatedPasswordHidden: !this.state.repeatedPasswordHidden }) } }>
                                { this.state.repeatedPasswordHidden ? "visibility" : "visibility_off" }
                            </button>
                        :
                            null
                        }
                    </div>
                    <button className="btn registerButton" onClick={this.onPressRegister}>
                        Registrarse
                    </button>
                </div>
            </div>    
        );
    }
}

export default Register;
