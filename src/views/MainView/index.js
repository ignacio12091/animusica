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

    componentDidMount() {
        switch(this.props.match.params.id) {
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
                console.log('json: ', response);                
                this.setState({ songs: response.data, isFetchingMostVisited: false });
            })
            .catch((error) => {
                console.log('error: ', error)
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
                                    <li key={item.id}>
                                        <button className="song" style={{ width: '19.375vh', display: 'flex', flexDirection: 'column', backgroundColor: 'rgb(30,30,30)', borderRadius: 5, alignItems: 'center' }} onClick={(e) => {this.onPressSong(e, item.link_recurso)}}>
                                            <img src={item.link_imagen} style={{ height: '15.625vh', borderTopRightRadius: 5, borderTopLeftRadius: 5 }} alt="" />
                                            <p style={{ textOverflow: 'ellipsis', color: 'rgb(230, 230, 230)' }}>
                                                {item.nombre} 
                                            </p>
                                        </button>
                                    </li>
                                );
                            });
                            return(result);
                        case "bestranked": 
                            this.state.songs.forEach((item) => {
                                result.push(
                                    <li key={item.id}>
                                        <button className="song" style={{ width: '19.375vh', display: 'flex', flexDirection: 'column', backgroundColor: 'rgb(30,30,30)', borderRadius: 5, alignItems: 'center' }} onClick={(e) => {this.onPressSong(e, item.link_recurso)}}>
                                            <img src={item.link_imagen} style={{ height: '15.625vh', borderTopRightRadius: 5, borderTopLeftRadius: 5 }} alt="" />
                                            <p style={{ textOverflow: 'ellipsis', color: 'rgb(230, 230, 230)' }}>
                                                {item.nombre} 
                                            </p>
                                        </button>
                                    </li>
                                );
                            });
                            return(result);
                            return("hola");
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
            <div style={{ width: '100%', marginTop: '5%', display: 'flex', justifyContent: 'space-between', color: 'white' }}>
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
                    <div className="container-fluid" style={{ padding: 0, textAlign: 'center', paddingTop: '5%' }}>
                        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'space-between', paddingLeft: '10%', paddingRight: '10%' }} role="group" aria-label="Basic example">
                            {this.renderTopOptions()}
                        </div>
{/*                     <div style={{ width: '100%', marginTop: '5%', paddingLeft: '5%', paddingRight: '5%', overflow: 'hidden' }}>*/} 
                            <ul>
                                {this.renderContent(this.props.match.params.id)}
                            </ul>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default MainView;