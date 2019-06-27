import React from 'react';
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
        <div className="container-fluid" style={{ padding: 0, backgroundColor: '#352b2b', height: '100vh' }}>
            <input type="text" className="bg-dark textInput" placeholder="Buscar" value={this.state.value} onChange={this.handleChange} />
        </div>
      );
    }
}

export default Search;