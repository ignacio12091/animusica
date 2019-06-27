import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import songImage from './../../assets/profileImage.png';

class UserSettings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            view: <UserSettings />
        };
    }

    render() {
      return (
        <div className="container-fluid" style={{ textAlign: 'center', paddingTop: '5%' }} >
            <h1 style={{ color: 'white' }} >Configuración de usuario</h1>
            <img style={{ borderRadius: 100 }} src={songImage} alt="profile" />
        </div>
      );
    }
}

export default UserSettings;