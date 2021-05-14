import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav } from "react-bootstrap";

export default function NavBar(){

    return (
      <React.Fragment>
      <Navbar className="navbar py-0 m-auto" bg="light" expand="sm" variant="light">
      <Navbar.Brand href="#home">Alli</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#aboutme">ABOUT ME</Nav.Link>
        <Nav.Link href="#whatido">WHAT I DO</Nav.Link>
        <Nav.Link href="#works">WORKS</Nav.Link>
        <Nav.Link href="#contact">CONTACT</Nav.Link>
      </Nav>
      </Navbar.Collapse>
      </Navbar>
        </React.Fragment>
    );
  }

