import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import logo from './../../../assets/logo.png';

class Header extends React.Component {
    
    render() {
      return (
        <div className="container-fluid" style={{  }} >
            <nav class="navbar navbar-expand-lg navbar-dark row navBar fixed-top">
                <div class="col-3">
                    <img src={logo} height="90" alt="" />
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class="col-6">
                    <div class="collapse navbar-collapse d-flex align-items-center" id="navbarSupportedContent">
                        <form class="form-inline my-2 my-lg-0 w-100 justify-content-center">
                            <button class="searchBarButton material-icons searchBarIcon">
                                search
                            </button>
                            <input class="form-control ml-sm-2 w-75" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                    </div>
                </div>
                <div class="col-3">
                    <Link to="/login">
                        <button class="btn rightButtons">
                            Iniciar sesión
                        </button>
                    </Link>
                    <button class="btn rightButtons">
                        Registrarse
                    </button>
                </div>
            </nav>
        </div>
      );
    }
}

export default Header;