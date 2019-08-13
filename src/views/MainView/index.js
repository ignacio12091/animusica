import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from './../../components/Global/Sidebar';
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

    renderSongs() {
        //esto deberia venir del server
        const songs = [
            {
                id: 1,
                nombre: "Dark side of the moon",
                linkImagen: "data:image/png;base64,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"
            },
        ];
        const result = [];
        songs.forEach((item) => {
            result.push(
                <div class="" style={{ width: '15%' }}>
                    <img src={item.linkImagen} class="card-img-top" alt="..." />
                    <div class="" style={{ backgroundColor: 'rgb(30,30,30)', borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
                        <p style={{ color: 'rgb(230, 230, 230)' }} >{item.nombre}</p>
                    </div>
                </div>
            );
        });
        return(hola);
    }

    renderGenres() {
        //esto debería venir del servidor con una consulta
        const genres = [
            {
                id: 1,
                nombre: "ROCK",
            },
            {
                id: 2,
                nombre: "RAP",
            },
            {
                id: 3,
                nombre: "POP",
            },
            {
                id: 4,
                nombre: "CUMBIA",
            },
            {
                id: 5,
                nombre: "SALSA",
            },
        ];
        const buttons = [];
        genres.forEach((item) => {
            buttons.push(
                <button type="button" className="music-style-btn">
                    {item.nombre}
                </button>
            );
        });
        return(buttons);
    }

    render() {
        return (
            <div>
                <Sidebar />
                <div style={{ paddingLeft: '20%' }}>
                    <div className="container-fluid" style={{ padding: 0, textAlign: 'center', paddingTop: '5%' }}>
                        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'space-between', paddingLeft: '10%', paddingRight: '10%' }} role="group" aria-label="Basic example">
                                <div style={{ width: '100%', marginTop: '5%', paddingLeft: '5%', paddingRight: '5%', display: 'flex', justifyContent: 'space-between' }}>
                                    {this.renderGenres()}
                                </div>
                        </div>
                        {this.renderSongs()}
                    </div>
                </div>
            </div>
        );
    }
}

export default MainView;