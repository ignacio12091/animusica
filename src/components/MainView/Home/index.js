import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

class Home extends React.Component {
    render() {
      return (
        <div className="container-fluid bg-dark" style={{ padding: 0, height: '100vh', textAlign: 'center' }}>
            {/* 
                            <div className="btn-group" style={{ position: 'relative' }} role="group" aria-label="Basic example">
                <button type="button" className="gen-button">ROCK</button>
                <button type="button" className="gen-button">RAP</button>
                <button type="button" className="gen-button">POP</button>
                <button type="button" className="gen-button">CUMBIA</button>
            </div>
            */}
        </div>
      );
    }
}

export default Home;