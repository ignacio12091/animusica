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
                    { false ?
                        <div>
                            <NavLink activeClassName="selected" to="/home"><span className="sideButtons">Inicio</span></NavLink>
                            <NavLink activeClassName="selected" exact to="/search"><span className="sideButtons">Buscar</span></NavLink>
                            <NavLink activeClassName="selected" exact to="/playlists"><span className="sideButtons">Mis Playlists</span></NavLink> 
                        </div>
                    :
                        <div style={{ display: 'flex', flexDirection: 'column', padding: 0 }}>
                            <NavLink to="/home" style={{ height: '5%' }}><h5>Inicio</h5></NavLink>
                            <h5 style={{ height: '5%' }}>Buscar</h5>
                            <h5 style={{ height: '5%' }}>Mis Playlists</h5> 
                        </div>
                    }              
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