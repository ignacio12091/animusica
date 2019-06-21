import React from 'react';
import './styles.css';
import logo from './../../../assets/logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

class Header extends React.Component {
    render() {
      return (
        <div>
            <div class="sidenav bg-danger">
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#clients">Clients</a>
                <a href="#contact">Contact</a>
            </div>
            <div className="row navbar-dark bg-dark" style={{ height: 100, alignItems: 'center', width: '100%', margin: 0 }}>
                <div className="col-md-3 d-none d-md-block" style={{ margin: 0, padding: 0 }}>
                    <img src={logo} alt="app logo" style={{ height: '100px', width: 250, backgroundColor: 'red' }} />
                </div>
                <div className="col-md-6 col-sm-6 d-none d-sm-block" style={{ margin: 0 }}>
                    <input className="form-control mr-sm-2" type="search" placeholder="Buscar canción" aria-label="Search" />
                </div>
                <div className="col-md-3 col-sm-6" style={{ margin: 0 }}>
                    <div className="row">
                        <div className="col-sm-3 offset-sm-3 col-md-6 offset-md-0" style={{ padding: 0 }}>
                            <button type="button" class="btn btn-light d-inline" data-toggle="modal" data-target="#exampleModalCenter">Iniciar sesión</button>
                        </div>
                        <div className="col-sm-3 col-md-6">
                            <button type="button" class="btn btn-light d-inline">Registrarse</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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

export default Header;