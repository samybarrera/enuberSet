import React, {Component} from 'react';

import {Carousel} from 'react-bootstrap';





class Slide extends Component{
	render(){
		return(
<section id="home">
			
 <Carousel>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="uberdrow2.jpg"/>
      <Carousel.Caption>
        <h3>Somos una empresa</h3>
        <p> seria y en crecimiento 100% Pachuqueña.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="uberdrow3.jpg"/>
      <Carousel.Caption>
        <h3>transportacion en camionetas blindadas</h3>
        <p>y personal calificado</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="uberdrow5.jpg"/>
      <Carousel.Caption>
        <h3>SET servicio de alquiler de automóviles de lujo con chofer</h3>
        <p>Servicio a dispocicion por hora y por dia</p>
        <p>Personal calificado</p>
        <p>Choferes bilingües</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

</section>
			);
	}
}

export default Slide;
