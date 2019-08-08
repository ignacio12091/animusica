import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import logo from './../../../assets/logo.png';
import profileImage from './../../../assets/profileImage.png';

class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalContent: false,
            isLoggedIn: false,
        };
    }

    render() {
        return (
            <div className="container-fluid" style={{ padding: 0 }}>
                <div class="sidenav">
                    <div class="btn-group-vertical button-group" role="group" aria-label="Basic example">
                        <button className="sideButtons" onClick={() => { this.props.cambiarVista("Home") }}>Inicio</button>
                        <button className="sideButtons" onClick={() => { this.props.cambiarVista("Search") }}>Buscar</button>
                        <button className="sideButtons" onClick={() => { this.props.cambiarVista("Playlists") }}>Mis playlist</button>
                    </div>
{/*                     <div className="bottom-box d-flex flex-column">
                        {this.state.isLoggedIn ?
                            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                                <img src={profileImage} alt="profile" style={{ borderRadius: 250, width: '40%' }} />
                                <button className="profileName" style={{ fontSize: 14 }} onClick={() => { this.props.cambiarVista("UserSettings") }} >Cristian Mello</button>
                            </div>
                        :
                            <div className="d-flex flex-column">
                                <button type="button" class="btn btn-light d-block" style={{ margin: 0, borderRadius: 20 }}  data-toggle="modal" data-target="#login-register-modal" onClick={ () => { this.setState({ modalContent: false }) } }>Iniciar sesión</button>
                                <button type="button" class="btn btn-light d-block" style={{ marginTop: 16, borderRadius: 20 }}  data-toggle="modal" data-target="#login-register-modal" onClick={ () => { this.setState({ modalContent: true }) } }>Registrarse</button>
                            </div>
                        }
                    </div> */}
                </div>
                {/* <div class="modal fade" id="login-register-modal" tabindex="-1" role="dialog" aria-labelledby="login-register-modal" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header" style={{ justifyContent: 'center' }}>
                                {this.state.modalContent ?
                                    <h2>Registrarse</h2>
                                :
                                    <h2>Iniciar sesión</h2>
                                }
                            </div>
                            <div class="modal-body">
                                {this.state.modalContent ?
                                    <div style={{ paddingTop: '5%', paddingBottom: '5%' }}>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Nombre</label>
                                            <input type="naim" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre" />
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Correo electrónico</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correo electrónico" />
                                        </div>
                                        <div class="form-group">
                                            <label for="Password">Contraseña</label>
                                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña" />
                                        </div>
                                        <div class="form-group">
                                            <label for="confirmPassword">Confirmar contraseña</label>
                                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirmar contraseña" />
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10%' }}>
                                            <button type="submit" class="btn btn-primary">Registrarse</button>
                                        </div>
                                    </div>
                                :
                                    <div style={{ paddingTop: '5%', paddingBottom: '5%' }}>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Correo electrónico</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correo electrónico" />
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">Contraseña</label>
                                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña" />
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10%' }}>
                                            <button type="submit" class="btn btn-primary" data-toggle="modal" data-target="#login-register-modal" onClick={ () => { this.setState({ isLoggedIn: true }) } }>Ingresar</button>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default Sidebar;