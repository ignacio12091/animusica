import React from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner'
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import sessionManager from './../../session/sessionManager';
import Sidebar from './../../components/Global/Sidebar';
import Modal from './../../components/Global/Modal';
import Playlist from './../../components/Playlist';

class Playlists extends React.Component {
	
	constructor(props) {
        super(props);
        this.state = {
			playlists: null,
			isFetchingPlaylists: false,
			errorFetchingPlaylists: false,
			createPlaylistModalVisible: false,
			playlistName: '',
			playlistDescription: '',
			deletePlaylistModalVisible: false,
			showUserPlaylists: true,
			playlistInfo: {},
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
                this.setState({ playlists: response.data, isFetchingPlaylists: false });
            })
            .catch((error) => {
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
							<button key={item.id} className="song" style={{ display: 'flex', width: '100%', flexDirection: 'column', backgroundColor: 'rgb(30,30,30)', borderRadius: 5, alignItems: 'center', marginBottom: '2.5%', marginTop: '2.5%', height: '30vh' }} onClick={() => { this.setState({ showUserPlaylists: false, playlistInfo: item }) }}>
								<img src={item.link_imagen} style={{ borderTopRightRadius: 5, borderTopLeftRadius: 5, height: '25vh', marginTop : '1vh' }} alt="" />
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

	onPressSave() {
		const body = {
			name: this.state.playlistName,
			description: this.state.playlistDescription,
		}
		if (this.state.playlistName !== "" && this.state.playlistDescription !== "") {
			axios.post(`http://localhost/playlists/user/${sessionManager.getUserId()}`, body)
				.then((response) => {
					if (response.data.success) { 
						this.setState({ playlistDescription: "", playlistName: "", createPlaylistModalVisible: false })
						this.getUserPlaylists()
					} else {
						alert("Ocurrió un error al crear la playlist")
					}
				})
				.catch((error) => {
					console.log(error);
				});
		} else {
			alert("Hay campos vacíos")
		}
	}

	deleteSong(song) {
		axios.post(`http://localhost/playlists/user/${sessionManager.getUserId()}/${song}`)
			.then((response) => {
				if (response.data.success) {
					this.getUserPlaylists()
					this.renderPlaylistsToDelete()
				} else {
					alert("Ocurrió un error al eliminar la playlist")
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}

	renderPlaylistsToDelete() {
		if (this.state.playlists) {
			let result = []
			this.state.playlists.forEach(element => {
				result.push(
					<div key={element.id} className="songToDelete">
						<p>{element.nombre}</p>
						<button className="material-icons" onClick={ () => { this.deleteSong(element.id) } }>delete</button>
					</div>
				);
			});
			return result;
		}
	}

    render() {
		return (
			<div>
				<Sidebar/>
				{ this.state.showUserPlaylists ? 
						<div>
							{ this.state.createPlaylistModalVisible &&
								<Modal title="Crear Playlist">
									<input className="nameInput" style={{ marginTop: '5vh', marginBottom: '2vh' }} type="text" placeholder="Nombre de la playlist" value={this.state.playlistName} onChange={ (event) => { this.setState({ playlistName: event.target.value }) } } />
									<textarea style={{ marginBottom: '3vh' }} placeholder="Descripción de la playlist" rows="4" cols="50" value={this.state.playlistDescription} onChange={ (event) => { this.setState({ playlistDescription: event.target.value }) } } >
									</textarea>
									<div style={{ display: 'flex', flexDirection: 'row' }} >
										<button className="btn saveAndCancelButton" style={{ marginRight: '3vh' }} onClick={ () => { this.setState({ createPlaylistModalVisible: !this.state.createPlaylistModalVisible }) } } >Cancelar</button>
										<button className="btn saveAndCancelButton" onClick={(event) => { this.onPressSave() }} >Guardar</button>
									</div>
								</Modal> 
							}
							{ this.state.deletePlaylistModalVisible &&
								<Modal title="Eliminar playlist">
									<div style={{ marginBottom: '2vh', height: '30vh', display: 'flex', flexWrap: 'wrap', backgroundColor: '#c70039', flexDirection: 'row', overflowY: 'scroll' }}>
										{this.renderPlaylistsToDelete()}
									</div>
									<div style={{ display: 'flex', flexDirection: 'row' }} >
										<button className="btn saveAndCancelButton" style={{ marginRight: '3vh' }} onClick={ () => { this.setState({ deletePlaylistModalVisible: !this.state.deletePlaylistModalVisible }) } } >Cancelar</button>
										<button className="btn saveAndCancelButton" onClick={(event) => { this.onPressSave() }} >Guardar</button>
									</div>
								</Modal>
							}
							<div style={{ paddingLeft: '20%' }}>
								<div className="container-fluid" style={{ padding: 0, textAlign: 'center', alignItems: 'center' }}>
									<div style={{ backgroundColor: 'rgb(10, 10, 10)', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '2vh', paddingBottom: '2vh', height: '10vh' }} >
										<h1 className="" style={{ color: 'white', margin: 0, padding: 0, fontWeight: 'bold' }}>Mis playlists</h1>
									</div>
									<div style={{ display: 'flex', padding: 0, margin: 0 }} >
										<div style={{ display: 'flex', flexDirection: 'column', width: '50%', height: '84.4vh', paddingLeft: '15%', justifyContent: 'center' }} >
											<button className="playlistButtons" onClick={ () => { this.setState({ createPlaylistModalVisible: true }) } } >Crear playlist</button>
											<button className="playlistButtons" style={{ marginTop: '15%' }} onClick={ () => { this.setState({ deletePlaylistModalVisible: true }) } } >Borrar Playlist</button>
										</div>
										<div className="playlistsColumn" style={{ width: '50vw', display: 'flex', flexWrap: 'wrap', backgroundColor: '#c70039', marginRight: '10%', marginLeft: '15%', flexDirection: 'row', height: '90vh', overflowY: 'scroll', overflowX: 'hidden', paddingLeft: '3vh', paddingRight: '3vh' }}>
											{this.renderPlaylists()}
										</div>
									</div>
								</div>
							</div>
						</div>
					:
						<div style={{ paddingLeft: '20%' }}>
							<Playlist onPresBack={() => { this.setState({ showUserPlaylists: !this.state.showUserPlaylists }) }} playlistInfo={this.state.playlistInfo} />
						</div>
				}
			</div>
		);
    }
}

export default Playlists;