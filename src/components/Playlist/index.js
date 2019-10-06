import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setSong } from '../../actions/song';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

class Playlist extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isFetchingSongs: false,
            errorFetchingSongs: false,
            songs: false,
            noSongs: false,
        };
    }

    componentDidMount() {
        this.fetchPlaylistSongs();
    }
    
    fetchPlaylistSongs() {
        this.setState({ isFetchingSongs: true });
        axios.get(`http://localhost/playlists/${this.props.playlistInfo.id}`)
            .then((response) => {
                if (response.data.success) {
                    this.setState({ songs: response.data.songs, isFetchingSongs: false });
                } else if (response.data.error === "Esta playlist no tiene canciones") {
                    this.setState({ noSongs: true });
                }
            })
            .catch((error) => {
				this.setState({ errorFetchingSongs: true, isFetchingSongs: false });
			})
    }

    renderSongs() {
        if (this.state.songs && !this.state.isFetchingSongs) {
            if (!this.state.noSongs) {
                return this.state.songs.map((item) => {
                    return (
                        <div key={item.id} className="playlist" onClick={ () => { this.props.setSong(item) } }>
                            <img alt="" src={item.link_imagen} />
                            <div className="songInfo" >
                                <h3>{item.nombre}</h3>
                                <p>{item.duracion}</p>
                            </div>
                        </div>
                    );
                });
            }
        } else {
            return(<h1 style={{ color: 'white' }}>Esta lista de reproducción no tiene canciones</h1>);
        }
    }

    render() {
        return(
            <div style={{ color: 'white' }}>
                <div className="topContainer">
                    <button className="material-icons backArrow" onClick={ () => { this.props.onPresBack() } }>arrow_back</button>
                    <h1 className="playlistTitle">
                        {this.props.playlistInfo.nombre}
                    </h1>
                </div>
                { this.renderSongs() }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    
})
  
const mapDispatchToProps = dispatch => ({
    setSong: song => dispatch(setSong(song))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Playlist)