import React from 'react';
import sessionManager from './../../../session/sessionManager';
import Modal from 'react-modal';
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
        /*
            sessionStorage.setItem('myData', "nachox");
            console.log(sessionStorage.getItem('myData'));
            const isLoggedIn = sessionStorage.getItem('userData') ? true : false;
            console.log('session: ', isLoggedIn);
        */
        return (
            <div className="container-fluid" style={{ padding: 0 }}>
                <div className="sidenav">
                    <img src={logo} alt="app logo" className="logoImage" />
                    { true ? 
                        <div>
                            <NavLink activeClassName="selected" className="navLinkComponent" to="/home"><span className="navLink">Inicio</span></NavLink>
                            <NavLink activeClassName="selected" className="navLinkComponent" exact to="/search"><span className="navLink">Buscar</span></NavLink>
                            <NavLink activeClassName="selected" className="navLinkComponent" exact to="/playlists"><span className="navLink">Mis Playlists</span></NavLink> 
                        </div>
                    :
                        <div style={{ display: 'flex', flexDirection: 'column', padding: 0 }}>
                            <NavLink to="/home" className="navLinkComponent" activeClassName="selected"><span className="navLink">Inicio</span></NavLink>
                            <span className="navLink navLinkComponent">Buscar</span>
                            <span className="navLink navLinkComponent">Mis Playlists</span> 
                        </div>
                    }
                    <div className="buttonsBox">
                        <button className="btn button">
                            <NavLink exact to="/login"><span style={{ color: 'black' }}>Iniciar sesión</span></NavLink>
                        </button>
                        <button className="btn button">
                            <NavLink exact to="/register"><span style={{ color: 'black' }}>Registrarse</span></NavLink>
                        </button>
                    </div>
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