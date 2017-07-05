import React, { Component } from 'react';


import logo from './logo.svg';
import './App.css';
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';
import {Carousel} from 'react-bootstrap';
import {Tab} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {FormGroup} from 'react-bootstrap';
import {Checkbox} from 'react-bootstrap';
import {FieldGroup} from 'react-bootstrap';
import {Radio} from 'react-bootstrap';
import {ControlLabel} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';




class App extends Component {
  render() {
    return (
      <div className="App">
        

        <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#"><h1>SET</h1></a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
         <li><a href="nuestras">Nuestras Unidades</a></li>
         <li><a href="nuestras">¿Que Somos?</a></li>
         <li><a href="nuestras">Mision</a></li>
         <li><a href="nuestras">Vision</a></li>
         <li><a href="nuestras">¿por que es el mejor servicio?</a></li>
         <li><a href="nuestras">¿Como podemos trabajar?</a></li>
         <li><a href="nuestras">Comprobantes y Facturas</a></li>
         <li><a href="nuestras">Lema</a></li>
         <li><a href="nuestras">Contacto</a></li>
        
      </Nav>
      
    </Navbar.Collapse>
  </Navbar>

<section id="home" >
<div id="carru1">
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


 </div>
 </section>
 

 <section id="somos">

<div class="light-wrapper">
   <div class="container_inner">
          <h3 class="semos">¿Que somos?</h3>

          <div id="col-sm-4">
          <img id="img-responsive" src="fondo.jpg"/>

          </div>

            <div id="pach">

            <p>
            Somos una empresa seria y en crecimiento 100% Pachuqueña, 
            joven y con gran visión formada por gente entusiasta y profesional. 
            Prestamos servicios de traslado mediante el arrendamiento de auto con chofer.</p></div>
    </div>

 </div>
            
 </section>


<section id="mision">
<div id="misio">
            <img id="el" src="fondo.png"/>
            <div id="texb"> Mision<p>          
           Ofrecemos el mejor traslado con la mayor seguridad, 
           comodidad y atención, haciendo que su viaje sea una nueva experiencia en 
           unidades recientes y con choferes calificados. 
           </p></div>

           </div>
 

</section>

<section id="vision">
<div id="visio">
<img id="el" src="fondo.png"/>
            <div id="texc">Visión<p>
            Ser la mejor opción de transporte 
            en cualquier tipo de viaje: Negocios, 
            familiar o por diversión.
            </p></div>

            </div>



</section>

<section id="servicio">
<div id="servi">
<img id="el" src="fondo.png"/>
            <div id="texd">¿Por que es el mejor servicio?<p>
            Somos una empresa seria y en crecimiento 100% Pachuqueña, 
            joven y con gran visión formada por gente entusiasta y profesional. 
            Prestamos servicios de traslado mediante el arrendamiento de auto con chofer.</p>
            <div id="texdd">
            “Nosotros nos preocupamos por el viaje, 
            usted sólo de indicarnos su destino”  
            </div>
            </div>
            </div>



</section>

<section id="trabajar">
<div id="trabajo">
<img id="el" src="fondo.png"/>
            <div id="texe">¿como podemos trabajar?<p>
            <p>Mediante vales o comprobantes de traslados.</p>

            <p>Facturación diaria, semanal, quincenal o mensual.</p>

            <p>Contrato de arrendamiento de autos, siempre y cuando la empresa se haga responsable del mismo.</p>

            <p>Crédito según acuerdo ente SET y Empresa contratante.</p>
            </p></div>
            </div>



</section>

<section id="facturas">
<div id="factuu">
            <img id="el" src="fondo.png"/>

            <img id="fotuno" src="fac1.png"/>

            <img id="fotdos" src="fac2.png"/>
            </div>



</section>

<section id="lema">
<div id="lemm">
            <img id="el" src="fondo.png"/>
            <div id="texg">

            <p>

            “No somos una buena opción, somos la mejor opción en transporte” 


            </p></div>
            </div>



</section>

<section id="contacto">
<div id="contac">
            <img id="el" src="fondo.png"/>
            <div id="texhhh">
            <p id="esss">
            Envia tu informacion
            con detalles de tu servicio
            para hacer una recervaciòn.
            </p>
            </div>
            <div id="texh">

            <Form inline>
            <FormGroup controlId="formInlineName">
              <ControlLabel>Name</ControlLabel>
              {' '}
              <FormControl type="text" placeholder="Nombre" />
            </FormGroup>
            {' '}
            <FormGroup controlId="formInlineEmail">
              <ControlLabel>Email</ControlLabel>
              {' '}
              <FormControl type="email" placeholder="tu.email@example.com" />
            </FormGroup>
            <p></p>
            {' '}
            <div id="esmil">
            <FormControl type="textee" placeholder="Detalles" />
            </div>
            <p></p>
            <Button type="submit">
              Enviar informacion
            </Button>


          </Form>
        



            </div>
            </div>



</section>

       
            
          
          
 
  





      </div>




    );
  }
}

export default App;