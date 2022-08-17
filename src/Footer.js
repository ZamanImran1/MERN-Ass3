import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function Footer() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
  
       
      <Navbar.Brand href="#home">Follio</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
 
    
        <Nav className="justify-content-center">
          <Nav.Link href="#pricing">About</Nav.Link>
          <Nav.Link href="#pricing">Portfolio</Nav.Link>
          <Nav.Link href="#pricing">Blog</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
        <Nav>
        <Button variant="secondary" size="lg">
        Facebook
        </Button>
        </Nav>
        
     
    </Container>
  </Navbar>
  )
}

export default Footer