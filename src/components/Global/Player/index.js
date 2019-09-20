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
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.song && nextProps.song !== "") {
            this.setState({ audio: 'http://localhost/songs' + nextProps.song.song }, function(){
                this.refs.audio.pause();
                this.refs.audio.load();
                this.refs.audio.play();
        })}
    }

    render() {
        if (this.state.audio !== "") {
            return(
                <div className="player">
                    <audio controls ref="audio">
                        <source src={this.state.audio} type="audio/ogg" />
                        <source src={this.state.audio} type="audio/mpeg" />
                    </audio>
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
