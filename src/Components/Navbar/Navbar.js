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
import logo from "./logo2.png";

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
          <NavbarBrand href="/"><img className ="logolayout" src={logo} alt="Logo" /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <ul className="navbarOptions">
                    <li><NavLink to="/">Hem</NavLink></li>
                    <li><NavLink to="/Info">Info</NavLink></li>
                    <li><NavLink to="/Prices">Priser</NavLink></li>
                    <li><NavLink to="/Work">Arbeten</NavLink></li>
                    <li><NavLink to="/Contact">Kontakt</NavLink></li>
                </ul>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}