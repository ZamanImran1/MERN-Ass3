import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Navc() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
    
         
        <Navbar.Brand href="#home">Follio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
   
      
          <Nav className="justify-content-center">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Portfolio</Nav.Link>
            <Nav.Link href="#pricing">Pages</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
          <Nav>
          <Button variant="secondary" size="lg">
          Lets Talk
          </Button>
          </Nav>
          
       
      </Container>
    </Navbar>
  )
}

export default Navc