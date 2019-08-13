import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import song1 from './../../assets/song2.jpg';
import Sidebar from './../../components/Global/Sidebar';

class Playlists extends React.Component {
    render() {
      return (
		<div>
			<Sidebar cambiarVista={(nuevaVista) => { this.cambiarVista(nuevaVista) }} />
			<div style={{ paddingLeft: '20%' }}>
				<div className="container-fluid" style={{ padding: 0, textAlign: 'center', paddingTop: '5%' }}>
					<h1 className="" style={{ color: 'white' }}>Mis playlists</h1>
					<div style={{ width: '100%', marginTop: '5%', paddingLeft: '5%', paddingRight: '5%', display: 'flex', justifyContent: 'space-between' }}>
						<div class="" style={{ width: '20%' }}>
							<img src={song1} class="card-img-top" alt="..." />
							<div class="" style={{ backgroundColor: 'rgb(30,30,30)', borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
								<p class="" style={{ color: 'white' }}>Cumbias</p>
							</div>
						</div>
						<div class="" style={{ width: '20%' }}>
							<img src={song1} class="card-img-top" alt="..." />
							<div class="" style={{ backgroundColor: 'rgb(30,30,30)', borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
								<p class="" style={{ color: 'white' }}>Rock que me gusta</p>
							</div>
						</div>
						<div class="" style={{ width: '20%' }}>
							<img src={song1} class="card-img-top" alt="..." />
							<div class="" style={{ backgroundColor: 'rgb(30,30,30)', borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
								<p class="" style={{ color: 'white' }}>Salsa para mover</p>
							</div>
						</div>
						<div class="" style={{ width: '20%' }}>
							<img src={song1} class="card-img-top" alt="..." />
							<div class="" style={{ backgroundColor: 'rgb(30,30,30)', borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
								<p class="" style={{ color: 'white' }}>Bachatita</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
      );
    }
}

export default Playlists;