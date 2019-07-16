import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import songImage from './../../assets/profileImage.png';

class UserSettings extends React.Component {

    render() {
      return (
        <div className="container-fluid" style={{ textAlign: 'center', paddingTop: '5%' }} >
            <h1 style={{ color: 'white' }} >Configuración de usuario</h1>
            <img style={{ borderRadius: 200 }} src={songImage} alt="profile" />
            <div style={{ marginTop: '5%' }}>
                <h5 style={{ color: 'white', }}>
                    Cristian Mello
                    <button className="buttonNoBackground">
                        <span style={{ fontSize: 14, color: '#00aae4' }}> (Editar)</span>
                    </button>
                </h5>
                <h5 style={{ color: 'white', marginTop: '3%' }}>
                    cristianmello@gmail.com
                    <button className="buttonNoBackground">
                        <span style={{ fontSize: 14, color: '#00aae4' }}> (Editar)</span>
                    </button>
                </h5>
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '3%' }}>
                    <button className="buttonNoBackground">
                        <h5 style={{ color: '#00aae4' }}>
                            Editar contraseña
                        </h5>
                    </button>
                    <button className="buttonNoBackground" style={{ marginTop: '20%' }}>
                        <h5 style={{ color: '#00aae4' }}>
                            Cerrar sesión
                        </h5>
                    </button>
                </div>
            </div>
        </div>
      );
    }
}

export default UserSettings;
