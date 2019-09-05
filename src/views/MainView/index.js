import React from 'react';
import Loader from 'react-loader-spinner'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Sidebar from './../../components/Global/Sidebar';

/* sessionStorage.setItem('myData', "nachox");

console.log(sessionStorage.getItem('myData')); */

class MainView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedSong: "",
            songs: null,
            errorFetchingMostVisited: false,
            isFetchingMostVisited: false,
            isFetchingBestRanked: false,
            errorFetchingBestRanked: false,
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
                console.log('genres')
            break;
            default:
            break;
        }
    }

    componentDidMount() {
        this.loadSongs(this.props)
    }

    componentWillReceiveProps(props) {
        console.log('props: ', props)
        this.loadSongs(props)
    }

    onPressSong(event, recurso) {
        this.setState({ selectedSong: recurso });
    }

    getBestRanked() {
        this.setState({ isFetchingBestRanked: true });
        axios.get('http://localhost/bestranked')
            .then((response) => {
                this.setState({ songs: response.data, isFetchingBestRanked: false });
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
                this.setState({ songs: response.data, isFetchingMostVisited: false });
            })
            .catch((error) => {
                this.setState({ errorFetchingMostVisited: true, isFetchingMostVisited: false });
            })
    }

    renderContent(option) {
        if(!this.state.isFetchingMostVisited && !this.state.isFetchingBestRanked) {
            if(!this.state.errorFetchingMostVisited && !this.state.errorFetchingBestRanked) {
                if(this.state.songs) {
                    const result = [];
                    switch(option) {
                        case "mostvisited":
                            this.state.songs.forEach((item) => {
                                result.push(
                                    <button className="song" style={{ width: '20%', display: 'flex', flexDirection: 'column', backgroundColor: 'rgba(30, 30, 30)', borderRadius: 5, alignItems: 'center', marginLeft: '5%', marginBottom: '2.5%' }} onClick={(e) => {this.onPressSong(e, item.link_recurso)}}>
                                        <img src={item.link_imagen} style={{ borderTopRightRadius: 5, borderTopLeftRadius: 5 }} alt="" />
                                        <p style={{ textOverflow: 'ellipsis', color: 'rgba(230, 230, 230)', margin: '2%' }}>
                                            {item.nombre} 
                                        </p>
                                    </button>
                                );
                            });
                            return(result);
                        case "bestranked": 
                            this.state.songs.forEach((item) => {
                                result.push(
                                    <button className="song" style={{ width: '30%', display: 'flex', flexDirection: 'column', backgroundColor: 'rgb(30,30,30)', borderRadius: 5, alignItems: 'center', marginLeft: '2.5%', marginBottom: '2.5%' }} onClick={(e) => {this.onPressSong(e, item.link_recurso)}}>
                                        <img src={item.link_imagen} style={{ borderTopRightRadius: 5, borderTopLeftRadius: 5 }} alt="" />
                                        <p style={{ textOverflow: 'ellipsis', color: 'rgb(230, 230, 230)', margin: '2%' }}>
                                            {item.nombre} 
                                        </p>
                                    </button>
                                );
                            });
                            return(result);
                        case "genres": 
                            console.log('genres')
                            break;
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
                <Loader
                    style={{ margin: 'auto' }}
                    type="Audio"
                    color="#ff7e00"
                    height="100%"
                    width="100%"
                />
            );
        }
    }

    renderTopOptions() {
        const response = (
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', color: 'white', backgroundColor: 'rgb(10, 10, 10)', paddingTop: '4%', paddingRight: '10%', paddingLeft: '10%', paddingBottom: '4%' }}>
                <NavLink activeClassName="selectedOption" exact to="/home/mostvisited">
                    <span className="music-style-btn">
                        Más visitados
                    </span>
                </NavLink>
                <NavLink activeClassName="selectedOption" exact to="/home/bestranked" className="music-style-btn">
                        <span className="music-style-btn">
                        Mejor puntuados
                    </span>
                </NavLink>
                <NavLink activeClassName="selectedOption" exact to="/home/genres" className="music-style-btn">
                    <span className="music-style-btn">
                        Géneros
                    </span>
                </NavLink>
            </div>
        );

        return(response);
    }

    render() {
        return (
            <div>
                <Sidebar song={this.state.selectedSong} />
                <div style={{ paddingLeft: '20%' }}>
                    <div className="container-fluid" style={{ padding: 0, textAlign: 'center' }}>
                        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'space-between' }} role="group" aria-label="Basic example">
                            {this.renderTopOptions()}
                        </div>
                        <div style={{ width: '100%', marginTop: '2%', display: 'flex', flexWrap: 'wrap', paddingRight: '5%' }}>
                            {this.renderContent(this.props.match.params.id)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainView;