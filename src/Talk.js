import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Talk() {
  return (
    <Container style={{backgroundColor: '#413F42', color: 'white',}}>
        <Row style={{marginLeft:'450px', fontSize:'44px', fontWeight: 'bold', paddingTop:"50px", itemalign: 'center',}}>Let's Talk</Row>
        <br></br>
        <Row>
            <Col style={{marginLeft:'100px',}}>
                <Row>
                    <Col style={{marginLeft:'200px', fontSize:'24px', fontWeight: 'bold',}}>
                    Get in Touch
                    </Col>
                    </Row>
                    <br></br>
                <Row>
                    <Col>
                    <Form.Control type="text" placeholder="First Name" />
                    </Col>
                    <Col>
                    <Form.Control type="text" placeholder="Last Name" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <br></br>
                        <Form.Control type="text" placeholder="email@example.com" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <br></br>
                        <Form.Control type="text" placeholder="Subject" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <br></br>
                        <Form.Control type="text" placeholder="Message" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <br></br>
                        <Button variant="secondary" style={{marginLeft: "200px",}}>Send Message</Button>
                    </Col>
                </Row>
                <br></br>
                <br></br>
            </Col>
            <Col>
            <Row>
                <Col>
                    <Card style={{ width: '18rem', marginLeft:'60px', }}>
                        <Card.Body>
                        <Card.Title style={{color: "#1B1A17"}}>25 North Street Dubai</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Office Address</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card style={{ width: '18rem',marginTop:'10px',  marginLeft:'60px', }}>
                        <Card.Body>
                        <Card.Title style={{color: "#1B1A17"}}>info@edefytheme.com</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Office Mail</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card style={{ width: '18rem',marginTop:'10px', marginLeft:'60px', }}>
                        <Card.Body>
                        <Card.Title style={{color: "#1B1A17"}}>+622830283092</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Office Phone</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </Col>
        </Row>
    </Container>
  )
}

export default Talk