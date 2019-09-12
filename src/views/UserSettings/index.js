import React from 'react';
import axios from 'axios';
import './styles.css';
import Sidebar from './../../components/Global/Sidebar';
import sessionManager from './../../session/sessionManager';
import 'bootstrap/dist/css/bootstrap.css';
import songImage from './../../assets/profileImage.png';
import Modal from './../../components/Global/Modal';

class UserSettings extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            editNameModal: false,
            name: '',
            editMailModal: false,
        };
    
        this.onConfirmNameChange = this.onConfirmNameChange.bind(this);

    }

    componentDidMount() {
        this.fetchUserOptions()
    }

    fetchUserOptions() {
        axios.get(`http://localhost/user/${sessionManager.getUserId()}`)
            .then((response) => {
                sessionManager.saveSession(response.data)
                this.setState({ editNameModal: false })                
            })
            .catch((error) => {
                console.log(error)
            })
    }

    onConfirmNameChange(event) {
        const body = {
            option: "name",
            name: this.state.name,
        }
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
                        <button className="btn saveAndCancelButton" onClick={this.onConfirmNameChange} >Guardar</button>
                    </div>
                </Modal>
            }
            { this.state.editMailModal &&
                <Modal title="Cambiar mail" >
                    <input className="nameInput" style={{ marginTop: '5vh', marginBottom: '3vh' }} type="text" placeholder="Nombre nuevo" value={this.state.name} onChange={ (event) => { this.setState({ name: event.target.value }) } } />
                    <div style={{ display: 'flex', flexDirection: 'row' }} >
                        <button className="btn saveAndCancelButton" style={{ marginRight: '3vh' }} onClick={ () => { this.setState({ editMailModal: !this.state.editMailModal }) } } >Cancelar</button>
                        <button className="btn saveAndCancelButton" onClick={this.onConfirmNameChange} >Guardar</button>
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
                        <button className="buttonNoBackground">
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