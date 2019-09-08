import React from 'react';
import sessionManager from './../../../session/sessionManager';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { NavLink } from 'react-router-dom';
import logo from './../../../assets/logo.png';

class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalContent: false,
            isLoggedIn: false,
            audio: null,
        };
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.song && nextProps.song !== "") {       
            this.setState({ audio: 'http://localhost/songs' + nextProps.song }, function(){
                this.refs.audio.pause();
                this.refs.audio.load();
                this.refs.audio.play();
        })}
    }

    render() {  
        return (
            <div className="container-fluid" style={{ padding: 0 }}>
                <div className="sidenav">
                    <img src={logo} alt="app logo" className="logoImage" />
                    { sessionManager.isLogged() ? 
                        <div>
                            <NavLink activeClassName="selected" className="navLinkComponent" to="/home"><span className="navLink">Inicio</span></NavLink>
                            <NavLink activeClassName="selected" className="navLinkComponent" exact to="/search"><span className="navLink">Buscar</span></NavLink>
                            <NavLink activeClassName="selected" className="navLinkComponent" exact to="/playlists"><span className="navLink">Mis Playlists</span></NavLink> 
                        </div>
                    :
                        <div style={{ display: 'flex', flexDirection: 'column', padding: 0 }}>
                            <NavLink to="/home" className="navLinkComponent" activeClassName="selected"><span className="navLink">Inicio</span></NavLink>
                            <span className="navLink navLinkComponent" onClick={ () => { alert("Necesitas iniciar sesión para utilizar esta funcionalidad") } }>Buscar</span>
                            <span className="navLink navLinkComponent" onClick={ () => { alert("Necesitas iniciar sesión para utilizar esta funcionalidad") } }>Mis Playlists</span> 
                        </div>
                    }

                    { sessionManager.isLogged() ? 
                        <div className="bottomBox">
                            <img src={sessionManager.getUserPhoto()} alt="profile" style={{ alignSelf: 'center', borderRadius: '50%', width: '15vh', height: '15vh' }} />
                            <NavLink style={{ fontSize: 14, alignSelf: 'center' }} exact to="/settings" ><span className="profileName">Cristian Mello</span></NavLink>
                        </div>
                    :
                        <div className="bottomBox">
                            <button className="btn button">
                                <NavLink exact to="/login"><span style={{ color: 'black' }}>Iniciar sesión</span></NavLink>
                            </button>
                            <button className="btn button">
                                <NavLink exact to="/register"><span style={{ color: 'black' }}>Registrarse</span></NavLink>
                            </button>
                        </div>
                    }

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
                { this.state.audio ? 
                    <div className="player">
                        <audio controls ref="audio">
                            <source src={this.state.audio} type="audio/ogg" />
                            <source src={this.state.audio} type="audio/mpeg" />
                        </audio>
                    </div>
                :
                    null
                }
            </div>
        );
    }
}

export default Sidebar;