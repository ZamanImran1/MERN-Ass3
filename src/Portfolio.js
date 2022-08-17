import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Portfolio() {
  return (
    <Container style={{backgroundColor: '#1B1A17', color: 'white',}}>
        <Row style={{marginLeft:'60px', fontSize:'44px', fontWeight: 'bold', paddingTop:"50px",}}>Portfolio</Row>
        <br></br>
        <Row>
            <Col style={{marginLeft:'200px'}}>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title style={{color:"#1B1A17"}}>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text style={{color:"#413F42"}}>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col style={{marginRight:'200px'}}>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title style={{color:"#1B1A17"}}>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text style={{color:"#413F42"}}>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <br></br><Row>
            <Col style={{marginLeft:'200px'}}>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title style={{color:"#1B1A17"}}>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text style={{color:"#413F42"}}>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col style={{marginRight:'200px'}}>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title style={{color:"#1B1A17"}}>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text style={{color:"#413F42"}}>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <br></br>
    </Container>
  )
}

export default Portfolio