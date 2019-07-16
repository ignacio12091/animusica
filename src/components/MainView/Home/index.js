import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import song1 from './../../../assets/darkSideOfTheMoon.jpg';

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

const elementos = [hola, hola, hola]

class Home extends React.Component {
    render() {
      return (
        <div className="container-fluid" style={{textAlign: 'center'}}>
            <div class="row" style={{ position: 'relative', display: 'flex', justifyContent: 'space-between',height: '150px', backgroundColor: 'rgb(5,5,5)', paddingLeft:'10%', paddingRight: '10%' }} role="group" aria-label="Basic example">
                <button type="button" className="gen-button fuente">ROCK</button>
                <button type="button" className="gen-button">RAP</button>
                <button type="button" className="gen-button">POP</button>
               	<button type="button" className="gen-button">CUMBIA</button>
								<button type="button" className="gen-button">BACHATRAP</button>

            </div>
<div>
{elementos}
</div>

        </div>
      );
    }
}

export default Home;
