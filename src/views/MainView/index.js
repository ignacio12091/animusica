import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from './../../components/MainView/Sidebar';
import Home from './../../components/MainView/Home';
import Search from './../../components/MainView/Search';
import Playlists from './../../components/MainView/Playlists';
import UserSettings from './../UserSettings';
import UserProfile from './../UserProfile';
import ArtistProfile from './../ArtistProfile';

class MainView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            view: <ArtistProfile />
        };
      }
    
    cambiarVista(nuevaVista) {
        switch(nuevaVista) {
            case "Home":
                this.setState({ view: <Home /> });
                break;
            case "Search":
                    this.setState({ view: <Search /> });
                    break;
            case "Playlists":
                    this.setState({ view: <Playlists /> });
                    break;
            case "UserSettings":
            this.setState({ view: <UserSettings /> });
            break;
            default:
                break;
        }
    }

    render() {
      return (
        <div className="container-fluid" style={{ padding: 0 }}>
            <Sidebar cambiarVista={(nuevaVista) => { this.cambiarVista(nuevaVista) }} />
            <div style={{ paddingLeft: '25%' }}>
                {this.state.view}
            </div>            
        </div>
      );
    }
}

export default MainView;