import React from 'react';
import axios from 'axios';
import './styles.css';
import Sidebar from './../../components/Global/Sidebar';
import sessionManager from './../../session/sessionManager';
import 'bootstrap/dist/css/bootstrap.css';
import songImage from './../../assets/profileImage.png';

class UserSettings extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            editNameModal: true,
            name: '',
        };
    
        this.onConfirmNameChange = this.onConfirmNameChange.bind(this);

    }

    onConfirmNameChange(event) {

    }

    render() {
      return (
        <div>
            <Sidebar/>
            { this.state.editNameModal ? 
                <div style={{ height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.7)', position: 'absolute', zIndex: 1, width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                    <div style={{ height: '50vh', width: '40vw', backgroundColor: '#99ffff', borderRadius: 4, display: 'flex', flexDirection: 'column', padding: '2vw' }} >
                        <h2 style={{ alignSelf: 'center' }} >Cambiar nombre</h2>
                        <input style={{ marginTop: '10vh' }} type="text" placeholder="Nombre nuevo" value={this.state.name} onChange={ (event) => { this.setState({ name: event.target.value }) } } />
                        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '2vh' }} >
                            <button style={{ marginBottom: '2vh' }} onClick={this.onConfirmNameChange} >Guardar</button>
                            <button onClick={ () => { this.setState({ editNameModal: !this.state.editNameModal }) } } >Cancelar</button>
                        </div>
                    </div>
                </div>
                :
                null
            }
            <div className="container-fluid" style={{ textAlign: 'center', paddingTop: '5%', paddingLeft: '20%' }} >
                <h1 style={{ color: 'white' }} >Configuración de usuario</h1>
                <img style={{ borderRadius: '50%', width: '25vh', height: '25vh' }} src={sessionManager.getUserPhoto()} alt="profile" />
                <div style={{ marginTop: '5%' }}>
                    <h5 style={{ color: 'white' }}>
                        { sessionManager.getUserName() }
                        <button className="buttonNoBackground" onClick={ () => { this.setState({ editNameModal: !this.state.editNameModal }) } }>
                            <span style={{ fontSize: 14, color: '#00aae4' }}> (Editar)</span>
                        </button>
                    </h5>
                    <h5 style={{ color: 'white', marginTop: '3%' }}>
                        { sessionManager.getUserMail() } 
                        <button className="buttonNoBackground">
                            <span style={{ fontSize: 14, color: '#00aae4' }}> (Editar)</span>
                        </button>
                    </h5>
                    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '3%' }}>
                        <button className="buttonNoBackground">
                            <h5 style={{ color: '#00aae4' }}>
                                Cambiar contraseña
                            </h5>
                        </button>
                        <button className="buttonNoBackground" style={{ marginTop: '5%' }} onClick={ () => { sessionManager.closeSession(); window.location.href = '/home'; } } >
                            <h5 style={{ color: '#00aae4' }}>
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