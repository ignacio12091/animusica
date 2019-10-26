import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

class Modal extends React.Component {
    render() {
        return (
            <div style={{ height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.7)', position: 'absolute', zIndex: 1, width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                <div style={{ width: '45vw', backgroundColor: '#252525', borderRadius: 4, display: 'flex', flexDirection: 'column', paddingLeft: '2vw', paddingRight: '2vw' }} >
                    <h2 style={{ alignSelf: 'center', color: 'white', marginTop: '2vh' }} >{this.props.title}</h2>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Modal;