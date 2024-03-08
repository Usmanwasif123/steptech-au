import React from 'react';
import '../assets/wrapper/Chooseus.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Chooseus = () => {
      return (
    <Container style={{height: '135vh', width: '98.7vw', background: 'linear-gradient(256.4deg, #6347AA 7.85%, #233F81 107.97%)', scrollBehavior: 'smooth'}}>
        <Row>
            <Col>
            <h1 style={{paddingTop: '2rem', fontSize: '3rem', display: 'flex', textAlign: 'center', justifyContent: 'center', color: '#fff'}}>Why choose us</h1>
            <p style={{fontSize: '1.5rem', display: 'flex', textAlign: 'center', justifyContent: 'center', paddingRight: '0rem', marginLeft: '25rem', width: '40rem', paddingTop: '1rem', color: '#fff'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            </p>
            </Col>
            <Col>
            <Card style={{ background: '#fff', width: '20rem', height: '27rem', borderRadius: '1.5rem', marginLeft: '5rem', marginTop: '4rem', overflow: 'hidden', display: 'flex', flexDirection: 'row' }}>
             <img style={{ width: '150%', height: 'auto', objectFit: 'cover', borderRadius: '1.5rem'}} src='https://i.ibb.co/H2jxBMF/Constant-Client-Coordination.jpg' alt='card-img' />
            </Card>
            </Col>
            <Col>
            <Card style={{background: '#fff', width: '20rem', height: '27rem', borderRadius: '1.5rem', marginLeft: '30rem', marginTop: '-23rem', display: 'flex', flexDirection: 'row', overflow: 'hidden'}}>
            <img style={{width: '160%', height: 'auto', objectFit: 'cover', borderRadius: '1.5rem'}} src='https://i.ibb.co/tKsHvbM/Supreme-customer-satisfaction.jpg' alt='card-img'/>
            </Card>
            </Col>
            <Col>
            <Card style={{background: '#fff', width: '20rem', height: '27rem', borderRadius: '1.5rem', marginLeft: '55rem', marginTop: '-30.5rem', display: 'flex', flexDirection: 'row', overflow: 'hidden'}}>
            <img style={{width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '1.5rem'}} src='https://i.ibb.co/n64nFfY/image.png' alt='card-img'/>
            </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default Chooseus
