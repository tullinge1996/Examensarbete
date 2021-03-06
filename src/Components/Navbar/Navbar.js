import React from 'react';
import './Navbar.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
} from 'reactstrap';
import { NavLink } from "react-router-dom";
import logo from "./logonav.png";

export default class Navbar1 extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
        <Navbar className="section1x" dark expand="md">
          <NavbarBrand href="/"><img className ="logolayout" src={logo} alt="Bild på företagslogga" /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <ul className="navbarOptions">
                    <li><NavLink to="/" alt="Länk till Hem">Hem</NavLink></li>
                    <li><NavLink to="/Info" alt="Länk till Infosida">Info</NavLink></li>
                    <li><NavLink to="/Prices" alt="Länk till Pris sida">Priser</NavLink></li>
                    <li><NavLink to="/Work" alt="Länk till Tidigare arbeten">Arbeten</NavLink></li>
                    <li><NavLink to="/Contact" alt="Länk till Kontaktsida">Kontakt</NavLink></li>
                </ul>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}