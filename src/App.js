import React, { Component } from 'react';
import './App.css';

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

      </div>




    );
  }
}

export default App;
