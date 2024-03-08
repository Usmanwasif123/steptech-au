import React from 'react';
import '../assets/wrapper/Process.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Process = () => {
   
  return (
    <Container style={{height: '620vh', width: '98.7vw', background: 'linear-gradient(256.4deg, #6347AA 7.85%, #233F81 107.97%)', scrollBehavior: 'smooth'}}>
    <Row>
      <Col>
      <div style={{paddingTop: '2rem'}}>
        <Card style={{background: '#fff', height: '30rem', width: '50rem', marginTop: '2rem', display: 'flex', textAlign: 'flex-start', justifyContent: 'flex-start'}}>
        <img src='https://i.ibb.co/txSYFYv/discover-and-planning.jpg' alt='card-image' style={{ width: '100%', height: 'auto' }}/>
        </Card>
        <p style={{fontSize: '2rem', marginTop: '5rem', marginLeft: '2rem', marginRight: '40rem', display: 'flex', textAlign: 'flex-start', justifyContent: 'flex-start' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
        <p style={{fontSize: '2rem', marginTop: '5rem', marginLeft: '50rem', marginRight: '5rem', display: 'flex', textAlign: 'flex-start', justifyContent: 'flex-start' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
        <Card style={{background: '#fff', height: '30rem', width: '50rem', marginTop: '2rem', marginLeft: '34.1rem', display: 'flex', textAlign: 'flex-end', justifyContent: 'flex-end'}}>
        <img src='https://i.ibb.co/HGG61Gy/design-prototyping.jpg' alt='card-image' style={{ width: '100%', height: 'auto' }}/>
        </Card>
        <p style={{fontSize: '2rem', marginTop: '5rem', marginLeft: '37rem', marginRight: '10rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
        <p style={{fontSize: '2rem', marginTop: '5rem', marginLeft: '2rem', marginRight: '50rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
        <Card style={{background: '#fff', height: '30rem', width: '50rem', marginTop: '2rem', display: 'flex', textAlign: 'flex-start', justifyContent: 'flex-start'}}>
        <img src='' alt='card-image' style={{ width: '100%', height: 'auto' }}/>
        </Card>
        <p style={{fontSize: '2rem', marginTop: '5rem', marginLeft: '2rem', marginRight: '40rem', display: 'flex', textAlign: 'flex-start', justifyContent: 'flex-start' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
        <p style={{fontSize: '2rem', marginTop: '5rem', marginLeft: '50rem', marginRight: '5rem', display: 'flex', textAlign: 'flex-start', justifyContent: 'flex-start' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
        <Card style={{background: '#fff', height: '30rem', width: '50rem', marginTop: '2rem', marginLeft: '34.1rem', display: 'flex', textAlign: 'flex-end', justifyContent: 'flex-end'}}>
        <img src='' alt='card-image' style={{ width: '100%', height: 'auto' }}/>
        </Card>
        <p style={{fontSize: '2rem', marginTop: '5rem', marginLeft: '37rem', marginRight: '10rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
        <p style={{fontSize: '2rem', marginTop: '5rem', marginLeft: '2rem', marginRight: '50rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
      </div>
      </Col>
      </Row>
  </Container>
    
  )
}

export default Process
