import React from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner'
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
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
		const userId = 1
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
							<button className="song" style={{ width: '20%', display: 'flex', flexDirection: 'column', backgroundColor: 'rgb(30,30,30)', borderRadius: 5, alignItems: 'center', marginLeft: '5%', marginBottom: '2.5%' }} onClick={() => {  }}>
								<img src={item.link_imagen} style={{ borderTopRightRadius: 5, borderTopLeftRadius: 5 }} alt="" />
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
                    color="#ff7e00"
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
				<div className="container-fluid" style={{ padding: 0, textAlign: 'center', paddingTop: '5%' }}>
					<h1 className="" style={{ color: 'white' }}>Mis playlists</h1>
					<div style={{ width: '100%', marginTop: '5%', display: 'flex', flexWrap: 'wrap', paddingRight: '5%' }}>
						{this.renderPlaylists()}
					</div>
				</div>
			</div>
		</div>
      );
    }
}

export default Playlists;