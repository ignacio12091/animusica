import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './../../components/MainView/Header';

class MainView extends React.Component {
    render() {
      return (
        <div className="container-fluid" style={{ padding: 0 }}>
            <Header />
        </div>
      );
    }
}

export default MainView;