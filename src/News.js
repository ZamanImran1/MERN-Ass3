import React from 'react'
import { Container } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';


function News() {
  return (
    <Container style={{backgroundColor: '#1B1A17', color: 'white',}}>
    <Row style={{marginLeft:'450px', fontSize:'44px', fontWeight: 'bold', paddingTop:"50px", itemalign: 'center',}}>Letest News</Row>
    <br></br>
    <Row>
        <Col>
            <Card style={{ width: '18rem', marginLeft:'60px', }}>
                <Card.Img variant="top" src="https://images.pexels.com/photos/1021876/pexels-photo-1021876.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                <Card.Body>
                    <Card.Title style={{color:'#1B1A17'}}> Title</Card.Title>
                    <Card.Text style={{color:'#413F42'}}>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem', marginLeft:'30px', }}>
                <Card.Img variant="top" src="https://images.pexels.com/photos/1021876/pexels-photo-1021876.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                <Card.Body>
                    <Card.Title style={{color:'#1B1A17'}}>Title</Card.Title>
                    <Card.Text style={{color:'#413F42'}}>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://images.pexels.com/photos/1021876/pexels-photo-1021876.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                <Card.Body>
                    <Card.Title style={{color:'#1B1A17'}}>Title</Card.Title>
                    <Card.Text style={{color:'#413F42'}}>
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

export default News