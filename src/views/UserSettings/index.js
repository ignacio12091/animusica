import React from 'react';
import axios from 'axios';
import './styles.css';
import Sidebar from './../../components/Global/Sidebar';
import sessionManager from './../../session/sessionManager';
import 'bootstrap/dist/css/bootstrap.css';
import Modal from './../../components/Global/Modal';

class UserSettings extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            editNameModal: false,
            name: '',
            editMailModal: false,
            oldMail: '',
            password: '',
            newMail: '',
            editPasswordModal: false,
        };
    
        this.onConfirmChange = this.onConfirmChange.bind(this);

    }

    componentDidMount() {
        this.fetchUserOptions()
    }

    fetchUserOptions() {
        axios.get(`http://localhost/user/${sessionManager.getUserId()}`)
            .then((response) => {
                sessionManager.saveSession(response.data)
                this.setState({ editNameModal: false, editMailModal: false, editPasswordModal: false })                
            })
            .catch((error) => {
                console.log(error)
            })
    }

    onConfirmChange(event, option) {
        let body = {}
        switch(option) {
            case "name":
                body = {
                    option: "name",
                    name: this.state.name,
                }
                this.setState({ name: "" })
                if (this.state.name !== "") {
                    axios.post(`http://localhost/user/${sessionManager.getUserId()}/settings`, body)
                    .then((response) => {
                        if (response.data.success) { 
                            this.fetchUserOptions()                    
                        } else {
                            alert("Ocurrió un error al editar el nombre")
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                } else {
                    alert("El nombre nuevo no puede estar vacío")
                }
            break;
            case "mail":
                body = {
                    option: "mail",
                    oldMail: this.state.oldMail,
                    password: this.state.password,
                    newMail: this.state.newMail,
                }
                this.setState({ oldMail: "", password: "", newMail: "" })                
                if (this.state.oldMail !== "" && this.state.password !== "" && this.state.newMail !== "") {
                    axios.post(`http://localhost/user/${sessionManager.getUserId()}/settings`, body)
                    .then((response) => {
                        if (response.data.success) {
                            this.fetchUserOptions()                
                        } else {
                            alert("Ocurrió un error al modificar el mail")
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                } else {
                    alert("Hay campos vacíos")
                }
            break;
            case "password":
                body = {
                    option: "password",
                    password: this.state.password,
                    newPassword: this.state.newPassword,
                }
                this.setState({ password: "", newPassword: "", repeatNewPassword: "" })                                
                if (this.state.password !== "" && this.state.newPassword !== "" && this.state.repeatNewPassword !== "") {
                    if (this.state.newPassword === this.state.repeatNewPassword) {
                        axios.post(`http://localhost/user/${sessionManager.getUserId()}/settings`, body)
                        .then((response) => {
                            console.log(response)
                            if (response.data.success) {
                                this.fetchUserOptions()                    
                            } else {
                                alert("Ocurrió un error al modificar el mail")
                            }
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                    } else {
                        alert("Las contraseñas no coinciden")
                    }
                } else {
                    alert("Hay campos vacíos")
                }
            break;
        }
    }

    render() {
      return (
        <div>
            <Sidebar/>
            { this.state.editNameModal &&
                <Modal title="Cambiar nombre">
                    <input className="nameInput" style={{ marginTop: '5vh', marginBottom: '3vh' }} type="text" placeholder="Nombre nuevo" value={this.state.name} onChange={ (event) => { this.setState({ name: event.target.value }) } } />
                    <div style={{ display: 'flex', flexDirection: 'row' }} >
                        <button className="btn saveAndCancelButton" style={{ marginRight: '3vh' }} onClick={ () => { this.setState({ editNameModal: !this.state.editNameModal }) } } >Cancelar</button>
                        <button className="btn saveAndCancelButton" onClick={(event) => { this.onConfirmChange(event, 'name') }} >Guardar</button>
                    </div>
                </Modal>
            }
            { this.state.editMailModal &&
                <Modal title="Cambiar mail" >
                    <input className="oldMail" style={{ marginTop: '5vh', marginBottom: '2vh' }} type="text" placeholder="Mail antiguo" value={this.state.oldMail} onChange={ (event) => { this.setState({ oldMail: event.target.value }) } } />
                    <input className="password" style={{ marginBottom: '2vh' }} type="text" placeholder="Contraseña" value={this.state.password} onChange={ (event) => { this.setState({ password: event.target.value }) } } />
                    <input className="newMail" style={{ marginBottom: '3vh' }} type="text" placeholder="Nuevo mail" value={this.state.newMail} onChange={ (event) => { this.setState({ newMail: event.target.value }) } } />
                    <div style={{ display: 'flex', flexDirection: 'row' }} >
                        <button className="btn saveAndCancelButton" style={{ marginRight: '3vh' }} onClick={ () => { this.setState({ editMailModal: !this.state.editMailModal }) } } >Cancelar</button>
                        <button className="btn saveAndCancelButton" onClick={(event) => { this.onConfirmChange(event, 'mail') }} >Guardar</button>
                    </div>
                </Modal>
            }
            { this.state.editPasswordModal &&
                <Modal title="Cambiar contraseña" >
                    <input className="password" style={{ marginBottom: '2vh' }} type="text" placeholder="Contraseña" value={this.state.password} onChange={ (event) => { this.setState({ password: event.target.value }) } } />
                    <input className="password" style={{ marginBottom: '2vh' }} type="text" placeholder="Nueva contraseña" value={this.state.newPassword} onChange={ (event) => { this.setState({ newPassword: event.target.value }) } } />
                    <input className="password" style={{ marginBottom: '2vh' }} type="text" placeholder="Repita la nueva contraseña" value={this.state.repeatNewPassword} onChange={ (event) => { this.setState({ repeatNewPassword: event.target.value }) } } />
                    <div style={{ display: 'flex', flexDirection: 'row' }} >
                        <button className="btn saveAndCancelButton" style={{ marginRight: '3vh' }} onClick={ () => { this.setState({ editPasswordModal: !this.state.editPasswordModal }) } } >Cancelar</button>
                        <button className="btn saveAndCancelButton" onClick={(event) => { this.onConfirmChange(event, 'password') }} >Guardar</button>
                    </div> 
                </Modal>
            }
            <div className="container-fluid" style={{ textAlign: 'center', paddingTop: '5%', paddingLeft: '20%' }} >
                <h1 style={{ color: 'white' }} >Configuración de usuario</h1>
                <img style={{ borderRadius: '50%', width: '25vh', height: '25vh' }} src={sessionManager.getUserPhoto()} alt="profile" />
                <div style={{ marginTop: '5%' }}>
                    <h5 style={{ color: 'white' }}>
                        { sessionManager.getUserName() }
                        <button className="buttonNoBackground" onClick={ () => { this.setState({ editNameModal: !this.state.editNameModal }) } }>
                            <span style={{ fontSize: 14, color: '#ec625f' }}> (Editar)</span>
                        </button>
                    </h5>
                    <h5 style={{ color: 'white', marginTop: '3%' }}>
                        { sessionManager.getUserMail() } 
                        <button className="buttonNoBackground">
                            <span style={{ fontSize: 14, color: '#ec625f'  }} onClick={ () => { this.setState({ editMailModal: !this.state.editMailModal }) } }> (Editar)</span>
                        </button>
                    </h5>
                    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '3%' }}>
                        <button className="buttonNoBackground" onClick={ () => { this.setState({ editPasswordModal: !this.state.editPasswordModal }) } }>
                            <h5 style={{ color: '#ec625f' }}>
                                Cambiar contraseña
                            </h5>
                        </button>
                        <button className="buttonNoBackground" style={{ marginTop: '5%' }} onClick={ () => { sessionManager.closeSession(); window.location.href = '/home'; } } >
                            <h5 style={{ color: '#ec625f' }}>
                                Cerrar sesión
                            </h5>
                        </button>
                    </div>
                </div>
            </div>
        </div>
      );
    }
}

export default UserSettings;