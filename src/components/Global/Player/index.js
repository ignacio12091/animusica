import React from 'react';
import { connect } from 'react-redux';
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
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.song && nextProps.song !== "") {
            this.setState({ songInfo: nextProps.song.song, audio: 'http://localhost/songs' + nextProps.song.song.link_recurso }, function(){
                this.refs.audio.pause();
                this.refs.audio.load();
                this.refs.audio.play();
        })}
    }

    render() {
        if (this.state.audio !== "") {
            return(
                <div className="player">
                    <div className="material-icons closeSong" onClick={ () => { this.setState({ audio: "" }) } }>close</div>
                    <div className="material-icons addButton">add</div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {this.state.songInfo&&this.state.songInfo.nombre}
                        <audio controls ref="audio">
                            <source src={this.state.audio} type="audio/ogg" />
                            <source src={this.state.audio} type="audio/mpeg" />
                        </audio>
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
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Player)
