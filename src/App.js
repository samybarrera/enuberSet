import React, { Component } from 'react';
import './App.css';
import Slideee from './Slideee'

import logo from './logo.svg';

import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';
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

  constructor(){
    super();

    this.state = {
      nombre: "KushH"
    }
  }



  render() {
    return (
      <div className="App">
        

        <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <div href="#">

            <a href="#">

               <img src="fondo22.jpeg" id="retina"/>

            </a>

        </div>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
         <li><a href="#home">SET</a></li>
         <li><a href="nosotros">¿Que Somos?</a></li>
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





 


<section id="mision">
<div id="misio">
            
            <div id="texb"> Mision<p>          
           Ofrecemos el mejor traslado con la mayor seguridad, 
           comodidad y atención, haciendo que su viaje sea una nueva experiencia en 
           unidades recientes y con choferes calificados. 
           </p></div>

           </div>
 

</section>

<section id="vision">
<div id="visio">

            <div id="texc">Visión<p>
            Ser la mejor opción de transporte 
            en cualquier tipo de viaje: Negocios, 
            familiar o por diversión.
            </p></div>

            </div>



</section>

<section id="servicio">
<div id="servi">

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
            

            <img id="fotuno" src="fac1.png"/>

            <img id="fotdos" src="fac2.png"/>
            </div>



</section>

<section id="lema">
<div id="lemm">
            
            <div id="texg">

            <p>

            “No somos una buena opción, somos la mejor opción en transporte” 


            </p></div>
            </div>



</section>

<section id="contacto">
<div id="contac">
            
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
