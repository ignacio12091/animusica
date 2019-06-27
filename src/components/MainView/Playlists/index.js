import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import song1 from './../../../assets/song2.jpg';

class Playlists extends React.Component {
    render() {
      return (
        <div className="container-fluid" style={{ padding: 0, textAlign: 'center', paddingTop: '5%', backgroundColor: '#352b2b' }}>
            <h1 className="" style={{ color: 'white' }}>Mis playlists</h1>
            <div style={{ width: '100%', marginTop: '5%', paddingLeft: '5%', paddingRight: '5%', display: 'flex', justifyContent: 'space-between' }}>
				<div class="" style={{ width: '20%' }}>
					<img src={song1} class="card-img-top" alt="..." />
					<div class="" style={{ backgroundColor: 'white', borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
						<p class="">Cumbias</p>
					</div>
				</div>
				<div class="" style={{ width: '20%' }}>
					<img src={song1} class="card-img-top" alt="..." />
					<div class="" style={{ backgroundColor: 'white', borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
						<p class="">Rock que me gusta</p>
					</div>
				</div>
				<div class="" style={{ width: '20%' }}>
					<img src={song1} class="card-img-top" alt="..." />
					<div class="" style={{ backgroundColor: 'white', borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
						<p class="">Salsa para mover</p>
					</div>
				</div>
				<div class="" style={{ width: '20%' }}>
					<img src={song1} class="card-img-top" alt="..." />
					<div class="" style={{ backgroundColor: 'white', borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
						<p class="">Bachatita</p>
					</div>
				</div>
			</div>
        </div>
      );
    }
}

export default Playlists;