import React from 'react';
import Loader from 'react-loader-spinner'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import { setSong } from '../../actions/song';
import { connect } from 'react-redux';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Sidebar from './../../components/Global/Sidebar';
import sessionManager from './../../session/sessionManager';

class MainView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            errorFetchingMostVisited: false,
            isFetchingMostVisited: false,
            isFetchingBestRanked: false,
            errorFetchingBestRanked: false,
            isFetchingGenres: false,
            errorFetchingGenres: false,
            songSelected: false,
        };

        this.onPressSong = this.onPressSong.bind(this)
    }

    loadSongs(props) {
        switch(props.match.params.id) {
            case "mostvisited":
                this.getMostVisited()
            break;
            case "bestranked": 
                this.getBestRanked()
            break;
            case "genres": 
                this.getGenres()
            break;
            default:
            break;
        }
    }

    componentDidMount() {
        this.loadSongs(this.props)
    }

    componentWillReceiveProps(props) {
        this.loadSongs(props)
    }

    onPressSong(event, recurso) {
        if (sessionManager.isLogged()) {
            this.setState({ songSelected: true });
            this.props.setSong(recurso)
        } else {
            alert("Necesitas haber iniciado sesión para escuchar una canción")
        }
    }

    getGenres() {
        this.setState({ isFetchingGenres: true });
        axios.get('http://localhost/genres')    
            .then((response) => {
                this.setState({ data: response.data, isFetchingGenres: false });
            })
            .catch((error) => {
                console.log('error: ', error)
                this.setState({ errorFetchingGenres: true, isFetchingGenres: false });
            })
    }

    getBestRanked() {
        this.setState({ isFetchingBestRanked: true });
        axios.get('http://localhost/bestranked')
            .then((response) => {
                this.setState({ data: response.data, isFetchingBestRanked: false });
            })
            .catch((error) => {
                console.log('error: ', error)
                this.setState({ errorFetchingBestRanked: true, isFetchingBestRanked: false });
            })
    }

    getMostVisited() {
        this.setState({ isFetchingMostVisited: true });
        axios.get('http://localhost/mostvisited')
            .then((response) => {            
                this.setState({ data: response.data, isFetchingMostVisited: false });
            })
            .catch((error) => {
                this.setState({ errorFetchingMostVisited: true, isFetchingMostVisited: false });
            })
    }

    renderContent(option) {
        if(!this.state.isFetchingMostVisited && !this.state.isFetchingBestRanked && !this.state.isFetchingGenres) {
            if(!this.state.errorFetchingMostVisited && !this.state.errorFetchingBestRanked && !this.state.isFetchingGenres) {
                if(this.state.data) {
                    const result = [];
                    switch(option) {
                        case "mostvisited":
                            this.state.data.forEach((item) => {
                                result.push(
                                    <button key={item.id} className="song" style={{ width: '20%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '5%', marginBottom: '2.5%' }} onClick={(e) => {this.onPressSong(e, item)}}>
                                        <img src={item.link_imagen} style={{ }} alt="" />
                                        <p style={{ textOverflow: 'ellipsis', color: 'rgba(230, 230, 230)', margin: '2%', fontWeight: 'bold' }}>
                                            {item.nombre} 
                                        </p>
                                    </button>
                                );
                            });
                            return(result);
                        case "bestranked": 
                            this.state.data.forEach((item) => {
                                result.push(
                                    <button key={item.id} className="song" style={{ width: '20%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '5%', marginBottom: '2.5%' }} onClick={(e) => {this.onPressSong(e, item)}}>
                                        <img src={item.link_imagen} style={{ }} alt="" />
                                        <p style={{ textOverflow: 'ellipsis', color: 'rgb(230, 230, 230)', margin: '2%', fontWeight: 'bold' }}>
                                            {item.nombre} 
                                        </p>
                                    </button>
                                );
                            });
                            return(result);
                        case "genres": 
                            this.state.data.forEach((item) => {
                                result.push(
                                    <button key={item.id} className="song" style={{ width: '30%', height: '5vh', display: 'flex', flexDirection: 'column', backgroundColor: 'rgb(30,30,30)', borderRadius: 5, alignItems: 'center', marginLeft: '2.5%', marginBottom: '2.5%', justifyContent: 'center' }} >
                                        <p style={{ width: '100%', color: 'rgb(230, 230, 230)', margin: '2%', fontWeight: 'bold' }}>
                                            {item.nombre} 
                                        </p>
                                    </button>
                                );
                            });
                            return(result);
                        default:
                            break;
                    }
                }
            } else {
                return (
                    <h1>
                        error
                    </h1>
                );
            }
        } else {
            return (
                null
            );
        }
    }

    renderTopOptions() {
        const response = (
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', color: 'white', backgroundColor: 'rgb(13, 58, 79)', paddingTop: '4%', paddingRight: '10%', paddingLeft: '10%', paddingBottom: '4%' }}>
                {/*
                <NavLink activeClassName="selectedOption" exact to="/home/mostvisited">
                    <span className="music-style-btn">
                        Más visitados
                    </span>
                </NavLink>
                */}
                <NavLink activeClassName="selectedOption" exact to="/home/genres" className="music-style-btn">
                    <span className="music-style-btn">
                        Ordenar por género
                    </span>
                </NavLink>
                <NavLink activeClassName="selectedOption" exact to="/home/bestranked" className="music-style-btn">
                    <span className="music-style-btn">
                        Ordenar por puntuación
                    </span>
                </NavLink>
            </div>
        );

        return(response);
    }

    render() {
        console.log(this.props.song)
        return (
            <div>
                <Sidebar />
                <div style={{ paddingLeft: '20%', paddingBottom: this.state.selectedSong ? "10vh" : "0"}}>
                    <div className="container-fluid" style={{ padding: 0, textAlign: 'center' }}>
                        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'space-between' }} role="group" aria-label="Basic example">
                            {this.renderTopOptions()}
                        </div>
                        <div style={{ width: '100%', marginTop: '2%', display: 'flex', flexWrap: 'wrap', paddingRight: '5%', paddingBottom: this.props.song.song ? '15vh': '' }}>
                            {this.renderContent(this.props.match.params.id)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    song: state.song,
})
  
const mapDispatchToProps = dispatch => ({
    setSong: song => dispatch(setSong(song))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainView)