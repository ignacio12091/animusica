import React from 'react';
import { setSong } from '../../../actions'
import { connect } from 'react-redux'
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

class Player extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalContent: false,
            isLoggedIn: false,
            audio: "http://localhost/songs/abranPaso.mp3",
        };
    }

    render() {
        return(
            <div className="player">
                <audio controls ref="audio">
                    <source src={this.state.audio} type="audio/ogg" />
                    <source src={this.state.audio} type="audio/mpeg" />
                </audio>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    
})
  
const mapDispatchToProps = dispatch => ({
    setSong: text => dispatch(setSong(text))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Player)
