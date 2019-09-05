import React from 'react';
import axios from 'axios';
import Sidebar from './../../components/Global/Sidebar';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedSong: "",
            textInputValue: '',
            isFetchingSongs: false,
            errorFetchingSongs: false,
            songs: null,
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.onPressSong = this.onPressSong.bind(this)
    }
    
    handleChange(event) {
        this.setState({textInputValue: event.target.value});
        this.searchSong(event.target.value)
    }

    searchSong(match) {
        if(match !== "") {
            this.setState({ isFetchingSongs: true })
            const endpoint = 'http://localhost/songs/search/' + match
            axios.get(endpoint)
                .then((response) => {
                    this.setState({ songs: response.data, isFetchingSongs: false });
                })
                .catch((error) => {
                    this.setState({ errorFetchingSongs: true, isFetchingSongs: false });
                })
        } else {
            this.setState({ songs: null });
        }
    }

    onPressSong(event, recurso) {
        this.setState({ selectedSong: recurso });
    }

    renderSongs(){
        if(this.state.songs) {
            let response = []
            this.state.songs.forEach(element => {
                let song = (
                    <button key={element.id} style={{ display: 'flex', flexDirection: 'row', height: '20vh', marginTop: '1vh', marginBottom: '1vh', alignItems: 'center', borderRadius: 4, backgroundColor: 'rgb(30, 30, 30)', width: '100%' }} onClick={(e) => {this.onPressSong(e, element.link_recurso)}}>
                        <img style={{ height: '20vh', }} src={element.link_imagen} alt={element.nombre} />
                        <p style={{ padding: 0, margin: 0, color: '#ff0080', fontSize: 30, marginRight: '1vh', marginLeft: '1vh' }}>{element.nombre}</p>
                    </button>
                );
                response.push(song)
            });
            return response
        }
    }

    render() {
      return (
        <div>
            <Sidebar song={this.state.selectedSong} />
            <div style={{ marginLeft: '20%' }}>
                <div className="container-fluid" style={{ padding: 0, height: '100vh' }}>
                    <input type="text" className="bg-dark textInput" placeholder="Buscar" value={this.state.textInputValue} onChange={this.handleChange} />
                    <div style={{ width: '100%', marginTop: '1vh', marginBottom: '1vh', paddingRight: '2vh', paddingLeft: '2vh'}}>
                        {this.renderSongs()}
                    </div>
                </div>
            </div>
        </div>
      );
    }
}

export default Search;