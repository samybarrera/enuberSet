import React, {Component} from 'react';
import './Slide.css';

import {Carousel} from 'react-bootstrap';





class Slide extends Component{
	render(){
		return(
<section id="home">
			
 <Carousel>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="uberdrow2.jpg"/>
      <Carousel.Caption>
        <p>Somos una empresa</p>
        <p> seria y en crecimiento 100% Pachuqueña.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="uberdrow3.jpg"/>
      <Carousel.Caption>
        <p>transportacion en camionetas blindadas</p>
        <p>y personal calificado</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="uberdrow5.jpg"/>
      <Carousel.Caption>
        <p>SET servicio de alquiler de automóviles de lujo con chofer</p>
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
