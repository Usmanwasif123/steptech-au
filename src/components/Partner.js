import React, {useState} from 'react';
import '../assets/wrapper/Partner.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Partner = () => {
    
  return (
    <Container fluid className="partner-container" style={{height: '130vh', width: '98.7vw', background: '#ffffff', scrollBehavior: 'smooth'}}>
     
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4}>
        <Card className="partner-card h-25 w-25 bg-secondary.bg-gradient" style={{position: 'absolute', marginTop: '1rem', marginLeft: '5rem', overflow: 'hidden', borderRadius: '3rem'}}>
          <img src='https://i.ibb.co/tq1TLJD/image.png' style={{height: '90%', width:'90%', objectFit: 'contain', paddingTop: '1rem', paddingLeft: '0.7rem'}} />
        </Card>
        </Col>
      </Row>
      <Row>
        <Col>
        <Card style={{height: '15rem', width: '15rem', background: '#e6e6e6', position: 'absolute', marginTop: '1rem', marginLeft: '21rem', overflow: 'hidden', borderRadius: '3rem'}}>
          <img src='https://i.ibb.co/1n2khpD/image.png' style={{height: '90%', width:'90%', objectFit: 'contain', paddingTop: '1rem', paddingLeft: '0.7rem'}} />
        </Card>
        </Col>
      </Row>
      <Row>
        <Col>
        <Card style={{height: '15rem', width: '15rem', background: '#e6e6e6', position: 'absolute', marginTop: '1rem', marginLeft: '37rem', overflow: 'hidden', borderRadius: '3rem'}}>
          <img src='https://i.ibb.co/M2zFcGD/image.png' style={{height: '90%', width:'90%', objectFit: 'contain', paddingTop: '1rem', paddingLeft: '0.7rem'}} />
        </Card>
        </Col>
      </Row>
      <Row>
        <Col>
        <Card style={{height: '15rem', width: '15rem', background: '#e6e6e6', position: 'absolute', marginTop: '1rem', marginLeft: '53rem', overflow: 'hidden', borderRadius: '3rem'}}>
          <img src='https://i.ibb.co/wYR2wDY/image.png' style={{height: '90%', width:'90%', objectFit: 'contain', paddingTop: '1rem', paddingLeft: '0.7rem'}} />
        </Card>
        </Col>
      </Row>
      <Row>
        <Col>
        <Card style={{height: '15rem', width: '15rem', background: '#e6e6e6', position: 'absolute', marginTop: '1rem', marginLeft: '69rem', overflow: 'hidden', borderRadius: '3rem'}}>
          <img src='https://i.ibb.co/bgfNCBt/image.png' style={{height: '90%', width:'90%', objectFit: 'contain', paddingTop: '1rem', paddingLeft: '0.7rem'}} />
        </Card>
        </Col>
      </Row>
      <Row>
        <Col>
        <div style={{height: '30rem', paddingTop: '15rem', width: '80rem', marginLeft: '2rem'}}>
        <div style={{marginTop: '3rem', marginLeft: '10rem', paddingRight: '10rem', display: 'flex', textAlign: 'center', justifyContent: 'center'}}>
          <p style={{fontSize: '1.5rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          </p>
        </div>
        <div style={{marginTop: '3rem', marginLeft: '10rem', position: 'absolute', paddingRight: '10rem', display: 'flex', textAlign: 'center', justifyContent: 'center'}}>
          <p style={{fontSize: '1.5rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          </p>
        </div>
        <div style={{marginTop: '13rem', marginLeft: '10rem', position: 'absolute', paddingRight: '10rem', display: 'flex', textAlign: 'center', justifyContent: 'center'}}>
          <p style={{fontSize: '1.5rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          </p>
        </div>
        </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Partner
