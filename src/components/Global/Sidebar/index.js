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
        };
    }

    render() {
        return (
            <div className="sidenav">
                <img src={logo} className="appLogo" alt="logo" />
                {
                    sessionManager.isLogged() ?
                        <div className="buttonsContainer">
                            <NavLink activeClassName="selectedRoute" className="routerButton" to="/home">
                                <div style={{ display: 'flex', alignItems: 'center' }} >
                                    <span className="material-icons">home</span>
                                    <p style={{ margin: 0, padding: 0, color: 'white', marginLeft: '1vw' }}>Inicio</p>
                                </div>
                            </NavLink>
                            <NavLink activeClassName="selectedRoute" className="routerButton" exact to="/search">
                                <div style={{ display: 'flex', alignItems: 'center' }} >
                                    <span className="material-icons">search</span>
                                    <p style={{ margin: 0, padding: 0, color: 'white', marginLeft: '1vw' }}>Buscar</p>
                                </div>
                            </NavLink>
                            <NavLink activeClassName="selectedRoute" className="routerButton" exact to="/playlists">
                                <div style={{ display: 'flex', alignItems: 'center' }} >
                                    <span className="material-icons">library_music</span>
                                    <p style={{ margin: 0, padding: 0, color: 'white', marginLeft: '1vw' }}>Mis Playlists</p>
                                </div>
                            </NavLink>
                        </div>
                    :
                        <div className="buttonsContainer">
                            <NavLink activeClassName="selectedRoute" className="routerButton" to="/home">
                                <div style={{ display: 'flex', alignItems: 'center' }} >
                                    <span className="material-icons">home</span>
                                    <p style={{ margin: 0, padding: 0, color: 'white', marginLeft: '1vw' }}>Inicio</p>
                                </div>
                            </NavLink>
                            <span className="routerButton">
                                <div style={{ display: 'flex', alignItems: 'center' }} >
                                        <span className="material-icons">search</span>
                                        <p style={{ margin: 0, padding: 0, color: 'white', marginLeft: '1vw' }}>Buscar</p>
                                </div>
                            </span>
                            <span className="routerButton">
                                <div style={{ display: 'flex', alignItems: 'center' }} >
                                    <span className="material-icons">library_music</span>
                                    <p style={{ margin: 0, padding: 0, color: 'white', marginLeft: '1vw' }}>Mis Playlists</p>
                                </div>
                            </span> 
                        </div>
                }
                <p className="playlistsTitle">
                    Playlists
                </p>
                { sessionManager.isLogged() ?
                    <div className="bottomContainer">
                        <img src={sessionManager.getUserPhoto()} className="userProfileImage" alt="userProfile" />
                        <p className="userProfileName">{ sessionManager.getUserName() }</p>
                    </div>
                :
                    <div className="bottomContainer">
                        <div className="bottomButtons">
                            <button className="bottomButton">
                                <NavLink exact to="/login"><span style={{ color: 'white' }}>Iniciar sesión</span></NavLink>
                            </button>
                            <button className="bottomButton">
                                <NavLink exact to="/register"><span style={{ color: 'white' }}>Registrarse</span></NavLink>
                            </button>
                        </div>
                    </div>                
                }
            {/*
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
                            <NavLink style={{ fontSize: 14, alignSelf: 'center' }} exact to="/settings" ><span className="profileName">{ sessionManager.getUserName() }</span></NavLink>
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
                </div>
            </div>
            */}
            </div>
        );
    }
}

export default Sidebar;