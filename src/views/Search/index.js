import React from 'react';
import Sidebar from './../../components/Global/Sidebar';
import logo from './../../assets/logo.png';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

class Search extends React.Component {

        constructor(props) {
            super(props);
            this.state = {value: ''};
        
            this.handleChange = this.handleChange.bind(this);
        }
    
        handleChange(event) {
            this.setState({value: event.target.value});
        }

    render() {
      return (
        <div style={{ marginLeft: '20%' }}>
            <Sidebar />
            <div className="container-fluid" style={{ padding: 0, height: '100vh' }}>
                <input type="text" className="bg-dark textInput" placeholder="Buscar" value={this.state.value} onChange={this.handleChange} />
            </div>
        </div>
      );
    }
}

export default Search;