import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

class Playlists extends React.Component {
    render() {
      return (
        <div className="container-fluid" style={{ padding: 0, textAlign: 'center', paddingTop: '5%', backgroundColor: '#352b2b' }}>
            <h1 className="" style={{ color: 'white' }}>Mis playlists</h1>
        </div>
      );
    }
}

export default Playlists;