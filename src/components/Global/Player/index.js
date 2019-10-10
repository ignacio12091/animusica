import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { clearSong } from './../../../actions/song';
import sessionManager from './../../../session/sessionManager';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

class Player extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalContent: false,
            isLoggedIn: false,
            audio: "",
            songInfo: {},
            playlists: null,
			isFetchingPlaylists: false,
            errorFetchingPlaylists: false,
            showPlaylistsModal: false,
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.song && nextProps.song !== "" && nextProps.song.song) {
            this.getUserPlaylists()
            this.setState({ songInfo: nextProps.song.song, audio: 'http://localhost/songs' + nextProps.song.song.link_recurso }, function(){
                this.refs.audio.pause();
                this.refs.audio.load();
                this.refs.audio.play();
        })}
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
    
    addSongToPlaylist(playlistId) {
        axios.post(`http://localhost/playlists/user/${this.state.songInfo.id_usuario}/${playlistId}/${this.state.songInfo.id}`)
            .then((response) => {
                if (response.data.success) {
                } else if (response.data.error === "Esta canción ya está agregada a la lista de reproducción") {
                    alert("Esta canción ya fue agregada anteriormente a la lista de reproducción");
                } else {
                    console.log("error");
                }
            })
            .catch((error) => {
                console.log("error")
            })
    }

    renderUserPlaylists() {
        if (!this.state.isFetchingPlaylists) {
			if (!this.state.errorFetchingPlaylists) {
				if (this.state.playlists) {
                    const result = []
					this.state.playlists.forEach(item => {
						result.push(
                            <div key={item.id} className="playlistToAddSong">
                                <p>{item.nombre}</p>
                                <button className="material-icons" onClick={ () => { this.addSongToPlaylist(item.id) } }>add</button>
                            </div>
						);
					});
					return(result);
                }
            }
        }
    }

    render() {
        if (this.props.song.song) {
            return (
                <div>
                    { this.state.showPlaylistsModal &&                     
                        <div className="modalBackground">
                            <div className="addToPlaylistModal">
                                <h3>Seleccione la playlist para agregar</h3>
                                {this.renderUserPlaylists()}
                                <div style={{ display: 'flex', flexDirection: 'row' }} >
                                    <button className="btn cancelButton" onClick={(event) => { this.setState({ showPlaylistsModal: false }) }} >Cerrar</button>
                                </div>
                            </div>
                        </div>
                    }
                    <div className="player">
                        <div className="material-icons closeSong" onClick={ () => { this.setState({ audio: "" }, () => { this.props.clearSong() }) } }>close</div>
                        <div className="material-icons addButton" onClick={ () => { this.setState({ showPlaylistsModal: true }) } }>add</div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {this.state.songInfo && this.state.songInfo.nombre}
                            <audio controls ref="audio">
                                <source src={this.state.audio} type="audio/ogg" />
                                <source src={this.state.audio} type="audio/mpeg" />
                            </audio>
                        </div>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }

}

const mapStateToProps = state => ({
    song: state.song,
})
  
const mapDispatchToProps = dispatch => ({
    clearSong: () => dispatch(clearSong())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Player)
