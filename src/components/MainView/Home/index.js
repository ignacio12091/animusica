import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import song1 from './../../../assets/darkSideOfTheMoon.jpg';

class Home extends React.Component {
    render() {
      return (
        <div className="container-fluid bg-dark" style={{ padding: 0, textAlign: 'center', paddingTop: '5%' }}>
            <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'space-between', paddingLeft: '10%', paddingRight: '10%' }} role="group" aria-label="Basic example">
                <button type="button" className="gen-button">ROCK</button>
                <button type="button" className="gen-button">RAP</button>
                <button type="button" className="gen-button">POP</button>
               	<button type="button" className="gen-button">CUMBIA</button>
            </div>
			<div style={{ width: '100%', marginTop: '5%', paddingLeft: '5%', paddingRight: '5%', display: 'flex', justifyContent: 'space-between' }}>
				<div class="card" style={{ width: '20%' }}>
					<img src={song1} class="card-img-top" alt="..." />
					<div class="card-body">
						<p class="card-text">Dark side of the moon</p>
					</div>
				</div>
				<div class="card" style={{ width: '20%' }}>
					<img src={song1} class="card-img-top" alt="..." />
					<div class="card-body">
						<p class="card-text">Dark side of the moon</p>
					</div>
				</div>
				<div class="card" style={{ width: '20%' }}>
					<img src={song1} class="card-img-top" alt="..." />
					<div class="card-body">
						<p class="card-text">Dark side of the moon</p>
					</div>
				</div>
				<div class="card" style={{ width: '20%' }}>
					<img src={song1} class="card-img-top" alt="..." />
					<div class="card-body">
						<p class="card-text">Dark side of the moon</p>
					</div>
				</div>
			</div>
			<div style={{ width: '100%', marginTop: '1%', paddingLeft: '5%', paddingRight: '5%', display: 'flex', justifyContent: 'space-between' }}>
				<div class="card" style={{ width: '20%' }}>
					<img src={song1} class="card-img-top" alt="..." />
					<div class="card-body">
						<p class="card-text">Dark side of the moon</p>
					</div>
				</div>
				<div class="card" style={{ width: '20%' }}>
					<img src={song1} class="card-img-top" alt="..." />
					<div class="card-body">
						<p class="card-text">Dark side of the moon</p>
					</div>
				</div>
				<div class="card" style={{ width: '20%' }}>
					<img src={song1} class="card-img-top" alt="..." />
					<div class="card-body">
						<p class="card-text">Dark side of the moon</p>
					</div>
				</div>
				<div class="card" style={{ width: '20%' }}>
					<img src={song1} class="card-img-top" alt="..." />
					<div class="card-body">
						<p class="card-text">Dark side of the moon</p>
					</div>
				</div>
			</div>
			<div style={{ width: '100%', marginTop: '1%', paddingLeft: '5%', paddingRight: '5%', display: 'flex', justifyContent: 'space-between' }}>
				<div class="card" style={{ width: '20%' }}>
					<img src={song1} class="card-img-top" alt="..." />
					<div class="card-body">
						<p class="card-text">Dark side of the moon</p>
					</div>
				</div>
				<div class="card" style={{ width: '20%' }}>
					<img src={song1} class="card-img-top" alt="..." />
					<div class="card-body">
						<p class="card-text">Dark side of the moon</p>
					</div>
				</div>
				<div class="card" style={{ width: '20%' }}>
					<img src={song1} class="card-img-top" alt="..." />
					<div class="card-body">
						<p class="card-text">Dark side of the moon</p>
					</div>
				</div>
				<div class="card" style={{ width: '20%' }}>
					<img src={song1} class="card-img-top" alt="..." />
					<div class="card-body">
						<p class="card-text">Dark side of the moon</p>
					</div>
				</div>
			</div>
        </div>
      );
    }
}

export default Home;