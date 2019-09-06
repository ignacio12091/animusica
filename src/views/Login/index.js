import React from 'react';
import axios from 'axios';
import './styles.css';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

    }
    
    onChangeEmail(event) {
        this.setState({email: event.target.value});
    }

    onChangePassword(event) {
        this.setState({password: event.target.value});
    }

    onPressSong(event) {
        const body = {
            email: 'ignacio.lima@anima.edu.uy',
            password: '12345678',
        }
        if (this.state.email !== "" && this.state.password !== "") {
            axios.post('http://localhost/login', body)
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        }
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.email} onChange={this.onChangeEmail} />
                <input type="text" value={this.state.password} onChange={this.onChangePassword} />
                <button onClick={(e) => {this.onPressSong(e)}}>
                    login
                </button>
            </div>    
        );
    }
}

export default Login;
