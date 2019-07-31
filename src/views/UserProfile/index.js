import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import song1 from './../../assets/song2.jpg';
import songImage from './../../assets/profileImage.png';

class UserProfile extends React.Component {
    
    render() {
      return (
        <div className="container-fluid" style={{ textAlign: 'center', paddingTop: '5%' }} >
            <h1 style={{ color: 'white' }} >Perfil de usuario</h1>
            <img style={{ borderRadius: 100 }} src={songImage} alt="profile" />
            <div style={{ marginTop: '5%' }}>
                <h5 style={{ color: 'white', }}>
                    Cristian Mello
                </h5>
            </div>
            <div style={{ display: 'flex' }}>
                <h5 style={{ color: 'white' }}>Playlists de Cristian</h5>
            </div>
            <div style={{ width: '100%', marginTop: '3%', paddingLeft: '5%', paddingRight: '5%', display: 'flex', justifyContent: 'space-between' }}>
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
      );
    }
}

export default UserProfile;