import React from 'react';
import './styles.css';
import logo from './../../../assets/logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

class Header extends React.Component {
    render() {
      return (
        <div className="row navbar-dark bg-dark" style={{ height: 70, alignItems: 'center', width: '100%', margin: 0 }}>
            <div className="col-md-3 d-none d-md-block" style={{ textAlign: 'center', margin: 0 }}>
                <img src={logo} alt="app logo" style={{ height: '50px', alignSelf: 'center' }} />
            </div>
            <div className="col-md-6 col-sm-6 d-none d-sm-block" style={{ margin: 0 }}>
                <input className="form-control mr-sm-2" type="search" placeholder="Buscar canción" aria-label="Search" />
            </div>
            <div className="col-md-3 col-sm-6" style={{ margin: 0 }}>
                <div className="row">
                    <div className="col-sm-3 offset-sm-3 col-md-6 offset-md-0" style={{ padding: 0 }}>
                        <button type="button" class="btn btn-light d-inline">Login</button>
                    </div>
                    <div className="col-sm-3 col-md-6">
                        <button type="button" class="btn btn-light d-inline">Registrarse</button>
                    </div>
                </div>
            </div>
        </div>
      );
    }
}

export default Header;