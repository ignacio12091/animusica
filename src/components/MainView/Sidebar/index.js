import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import logo from './../../../assets/logo.png';

class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        console.log(this.props.cambiarVista);
        return (
            <div className="container-fluid" style={{ padding: 0 }}>
                <div class="sidenav">
                    <img src={logo} alt="app logo" className="logoImage" />
                    <div class="btn-group-vertical button-group" role="group" aria-label="Basic example">
                        <button className="sideButtons" onClick={() => { this.props.cambiarVista("Home") }}>Inicio</button>
                        <button className="sideButtons" onClick={() => { this.props.cambiarVista("Search") }}>Buscar</button>
                        <button className="sideButtons" onClick={() => { this.props.cambiarVista("Playlists") }}>Mis playlist</button>
                    </div>
                    <div className="bottom-box d-flex flex-column">
                        <button type="button" class="btn btn-light d-block" style={{ margin: 0, borderRadius: 20 }}  data-toggle="modal" data-target="#login-register-modal">Iniciar sesión</button>
                        <button type="button" class="btn btn-light d-block" style={{ marginTop: 16, borderRadius: 20 }}  data-toggle="modal" data-target="#login-register-modal">Registrarse</button>
                    </div>
                </div>
                <div class="modal fade" id="login-register-modal" tabindex="-1" role="dialog" aria-labelledby="login-register-modal" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header" style={{ justifyContent: 'center' }}>
                                <h2>Login</h2>
                            </div>
                            <div class="modal-body">
                                ...
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;