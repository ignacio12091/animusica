import React from 'react';
import './styles.css';
import Sidebar from './../../components/Global/Sidebar';
import sessionManager from './../../session/sessionManager';
import 'bootstrap/dist/css/bootstrap.css';
import songImage from './../../assets/profileImage.png';

class UserSettings extends React.Component {
    
    render() {
      return (
        <div>
            <Sidebar/>
            <div className="container-fluid" style={{ textAlign: 'center', paddingTop: '5%', paddingLeft: '20%' }} >
                <h1 style={{ color: 'white' }} >Configuración de usuario</h1>
                <img style={{ borderRadius: '50%', width: '25vh', height: '25vh' }} src={sessionManager.getUserPhoto()} alt="profile" />
                <div style={{ marginTop: '5%' }}>
                    <h5 style={{ color: 'white' }}>
                        { sessionManager.getUserName() }
                        <button className="buttonNoBackground">
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
                        <button className="buttonNoBackground" style={{ marginTop: '20%' }} onClick={ () => { sessionManager.closeSession(); window.location.href = '/home'; } } >
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