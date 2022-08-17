import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Sectionone() {
  return (
    <Container>
      <Row>
        <Col className='img-fluid shadow-4' style={{ 
      backgroundImage: `url("https://images.pexels.com/photos/157928/young-man-male-handsome-model-attractive-157928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
    }}><Row style={{ color:'white'}}>
        <Col style={{ marginTop:'200px', fontSize:'64px', fontWeight: 'bold', marginLeft:'300px'}}>I m Jhon Smith</Col>
        <Row style={{ marginBottom:'300px', fontSize:'34px', fontWeight: 'bold', marginLeft:'315px'}}>
            <Col>Freelance UI/UX Designer</Col>
        </Row>
        </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Sectionone