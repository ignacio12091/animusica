import React from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner'
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import sessionManager from './../../session/sessionManager';
import song1 from './../../assets/song2.jpg';
import Sidebar from './../../components/Global/Sidebar';

class Playlists extends React.Component {
	
	constructor(props) {
        super(props);
        this.state = {
			playlists: null,
			isFetchingPlaylists: false,
			errorFetchingPlaylists: false,
        };
	}
	
	componentDidMount() {
		this.getUserPlaylists()
	}
	
    getUserPlaylists() {
		this.setState({ isFetchingPlaylists: true });
		const userId = sessionManager.getUserId()
        axios.get(`http://localhost/playlists/user/${userId}`)
            .then((response) => {
				console.log('reponse: ', response)
                this.setState({ playlists: response.data, isFetchingPlaylists: false });
            })
            .catch((error) => {
				console.log('error: ', error)
				this.setState({ errorFetchingPlaylists: true, isFetchingPlaylists: false });
			})
	}
	
	renderPlaylists() {
		if (!this.state.isFetchingPlaylists) {
			if (!this.state.errorFetchingPlaylists) {
				if (this.state.playlists) {
					const result = []
					this.state.playlists.forEach(item => {
						result.push(
							<button className="song" style={{ display: 'flex', width: '100%', flexDirection: 'row', backgroundColor: 'rgb(30,30,30)', borderRadius: 5, alignItems: 'center', marginBottom: '2.5%', marginTop: '2.5%', height: '30vh' }} onClick={() => {  }}>
								<img src={item.link_imagen} style={{ borderTopRightRadius: 5, borderTopLeftRadius: 5, height: '30vh' }} alt="" />
								<p style={{ textOverflow: 'ellipsis', color: 'rgb(230, 230, 230)', margin: '2%' }}>
									{item.nombre}
								</p>
							</button>
						);
					});
					return(result);
				}
			} else {
				return(
					<h1>error</h1>
				);
			}
		} else {
			return (
                <Loader
                    style={{ margin: 'auto' }}
                    type="Audio"
                    color="#c70039"
                    height="100%"
                    width="100%"
                />
            );
		}
	}

    render() {
		return (
			<div>
				<Sidebar cambiarVista={(nuevaVista) => { this.cambiarVista(nuevaVista) }} />
				<div style={{ paddingLeft: '20%' }}>
					<div className="container-fluid" style={{ padding: 0, textAlign: 'center', alignItems: 'center' }}>
						<div style={{ backgroundColor: 'rgb(10, 10, 10)', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '2vh', paddingBottom: '2vh', height: '10vh' }} >
							<h1 className="" style={{ color: 'white', margin: 0, padding: 0, fontWeight: 'bold' }}>Mis playlists</h1>
						</div>
						<div style={{ display: 'flex', padding: 0, margin: 0 }} >
							<div style={{ display: 'flex', flexDirection: 'column', width: '50%', height: '84.4vh', paddingLeft: '15%', justifyContent: 'center' }} >
								<button className="playlistButtons" >Crear playlist</button>
								<button className="playlistButtons" style={{ marginTop: '15%' }} >Borrar Playlist</button>
							</div>
							<div className="playlistsColumn" style={{ width: '50vw', display: 'flex', flexWrap: 'wrap', backgroundColor: '#c70039', marginRight: '10%', marginLeft: '15%', flexDirection: 'row', height: '90vh', overflowY: 'scroll', paddingLeft: '3vh', paddingRight: '3vh' }}>
								{this.renderPlaylists()}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
    }
}

export default Playlists;