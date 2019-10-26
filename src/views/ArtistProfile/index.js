import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import song1 from './../../assets/song2.jpg';
import kengo from './../../assets/kengo.jpg';
class ArtistProfile extends React.Component {
    
    render() {
      return (
        <div className="container-fluid" style={{ textAlign: 'center', paddingTop: '5%' }} >
            <h1 style={{ color: 'white' }} >MCKengo</h1>
            <img style={{ borderRadius: 200 }} src={kengo} alt="profile" />
            <div style={{ marginTop: '5%' }}>
                <p style={{ color: 'white', }}>
                This channel is aimed at people who like conscious or non-commercial rap. From the age of 7 I wanted to be a singer and in this channel I do what I like the most. I will be doing raffles to reward the advances of the channel, Greetings from Uruguay!                </p>
            </div>
            <div style={{ display: 'flex' }}>
                <h5 style={{ color: 'white' }}>Canciones de Kengo</h5>
            </div>
            <div style={{ width: '100%', marginTop: '5%', paddingLeft: '5%', paddingRight: '5%', display: 'flex', justifyContent: 'space-between' }}>
                <div class="" style={{ width: '15%' }}>
                    <img src={song1} class="card-img-top" alt="..." />
                    <div class="" style={{ backgroundColor: 'rgb(30,30,30)', borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
                        <p style={{ color: 'rgb(230, 230, 230)' }} >Darkness</p>
                    </div>
                </div>
                <div class="" style={{ width: '15%' }}>
                    <img src={song1} class="card-img-top" alt="..." />
                    <div class="" style={{ backgroundColor: 'rgb(30,30,30)', borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
                        <p style={{ color: 'rgb(230, 230, 230)' }} >Without chores</p>
                    </div>
                </div>
                <div class="" style={{ width: '15%' }}>
                    <img src={song1} class="card-img-top" alt="..." />
                    <div class="" style={{ backgroundColor: 'rgb(30,30,30)', borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
                        <p style={{ color: 'rgb(230, 230, 230)' }} >A little girl takes my hand</p>
                    </div>
                </div>
                <div class="" style={{ width: '15%' }}>
                    <img src={song1} class="card-img-top" alt="..." />
                    <div class="" style={{ backgroundColor: 'rgb(30,30,30)', borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
                        <p style={{ color: 'rgb(230, 230, 230)' }} >Letter to dad</p>
                    </div>
                </div>
                <div class="" style={{ width: '15%' }}>
                    <img src={song1} class="card-img-top" alt="..." />
                    <div class="" style={{ backgroundColor: 'rgb(30,30,30)', borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
                        <p style={{ color: 'rgb(230, 230, 230)' }} >Open Step</p>
                    </div>
                </div>
            </div>
        </div>
      );
    }
}

export default ArtistProfile;