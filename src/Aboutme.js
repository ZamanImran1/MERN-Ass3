import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

function Aboutme() {
  return (
    <Container style={{backgroundColor: '#1B1A17', color: 'white',}}>
        <Row style={{marginLeft:'60px', fontSize:'44px', fontWeight: 'bold', paddingTop:"50px",}}>About Me</Row>
        <Row>
            <Nav className="justify-content-center" >
                <Nav.Item>
                <Nav.Link style={{color: 'white'}}>About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link style={{color: 'white'}}>Skill</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link style={{color: 'white'}}>Services</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link style={{color: 'white'}}>Social Media</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link style={{color: 'white'}}>Awards</Nav.Link>
                </Nav.Item>
                
        </Nav>
        </Row>
        <Row style={{paddingBottom:"200px", marginLeft:'50px', marginTop:"20px",}}>
            <Col style={{width:"200px", height:"200px",}}>
            <img src="https://images.pexels.com/photos/114820/pexels-photo-114820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width="500px" height="300px"></img>
            </Col>
            <Col>
                <Row style={{fontSize:'44px', fontWeight: 'bold',}}>I create products</Row>
                <Row style={{fontSize:'44px', fontWeight: 'bold',}}>not art</Row>
                <Row>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Row>
                <br></br>
                <Row>
                    <Button variant="secondary" style={{width:"150px", height:"50px",}}>
                        Lets Talk
                    </Button>
                </Row>
            </Col>
        </Row>
    </Container>
  )
}

export default Aboutme