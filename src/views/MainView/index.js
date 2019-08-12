import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from './../../components/Global/Sidebar';
import Header from './../../components/Global/Header';
import song1 from './../../assets/darkSideOfTheMoon.jpg';

const hola = (
    <div style={{ width: '100%', marginTop: '5%', paddingLeft: '5%', paddingRight: '5%', display: 'flex', justifyContent: 'space-between' }}>
        <div class="" style={{ width: '15%' }}>
            <img src={song1} class="card-img-top" alt="..." />
            <div class="" style={{ backgroundColor: 'rgb(30,30,30)', borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
                <p style={{ color: 'rgb(230, 230, 230)' }} >Dark side of the moon</p>
            </div>
        </div>
        <div class="" style={{ width: '15%' }}>
            <img src={song1} class="card-img-top" alt="..." />
            <div class="" style={{ backgroundColor: 'rgb(30,30,30)', borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
                <p style={{ color: 'rgb(230, 230, 230)' }} >Dark side of the moon</p>
            </div>
        </div>
        <div class="" style={{ width: '15%' }}>
            <img src={song1} class="card-img-top" alt="..." />
            <div class="" style={{ backgroundColor: 'rgb(30,30,30)', borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
                <p style={{ color: 'rgb(230, 230, 230)' }} >Dark side of the moon</p>
            </div>
        </div>
        <div class="" style={{ width: '15%' }}>
            <img src={song1} class="card-img-top" alt="..." />
            <div class="" style={{ backgroundColor: 'rgb(30,30,30)', borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
                <p style={{ color: 'rgb(230, 230, 230)' }} >Dark side of the moon</p>
            </div>
        </div>
        <div class="" style={{ width: '15%' }}>
            <img src={song1} class="card-img-top" alt="..." />
            <div class="" style={{ backgroundColor: 'rgb(30,30,30)', borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
                <p style={{ color: 'rgb(230, 230, 230)' }} >Dark side of the moon</p>
            </div>
        </div>
    </div>
);

const elementos = [hola, hola, hola, hola]

/* sessionStorage.setItem('myData', "nachox");

console.log(sessionStorage.getItem('myData')); */

class MainView extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Sidebar cambiarVista={(nuevaVista) => { this.cambiarVista(nuevaVista) }} />
                <div style={{ paddingLeft: '20%' }}>
                    <div className="container-fluid" style={{ padding: 0, textAlign: 'center', paddingTop: '5%' }}>
                        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'space-between', paddingLeft: '10%', paddingRight: '10%' }} role="group" aria-label="Basic example">
                            <button type="button" className="music-style-btn">ROCK</button>
                            <button type="button" className="music-style-btn">RAP</button>
                            <button type="button" className="music-style-btn">POP</button>
                            <button type="button" className="music-style-btn">CUMBIA</button>
                        </div>
                        {elementos}
                    </div>
                </div>
            </div>
        );
    }
}

export default MainView;