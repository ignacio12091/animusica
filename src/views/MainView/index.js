import React from 'react';
import './styles.css';
import logo from '../../assets/logo.png';
import styles from 'bootstrap/dist/css/bootstrap.css';

class MainView extends React.Component {
    render() {
      return (
        <div className={styles.containerFluid} style={{ backgroundColor: 'blue', height: 100 }}>

        </div>
      );
    }
}

export default MainView;