import React from 'react';
import '../assets/wrapper/Chooseus.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Chooseus = () => {
      return (
    <Container style={{height: '130vh', width: '98.7vw', background: '#447070',}}>
        <Row>
            <Col>
            <h1 style={{paddingTop: '5rem', fontSize: '3rem', display: 'flex', textAlign: 'center', justifyContent: 'center'}}>Why choose us</h1>
            <p style={{fontSize: '1.5rem', display: 'flex', textAlign: 'center', justifyContent: 'center', paddingRight: '0rem', marginLeft: '25rem', width: '40rem', background: '#fff'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
            </Col>
            <Col>
            <Card style={{background: '#fff', width: '20rem', height: '27rem', borderRadius: '1.5rem', marginLeft: '5rem', marginTop: '2rem', display: 'flex', textAlign: 'flex-start', justifyContent: 'flex-start'}}>
            <img style={{width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '1.5rem'}} src='https://i.ibb.co/L9XHDX2/image.png' alt='card-img'/>
            </Card>
            </Col>
            <Col>
            <Card style={{background: '#fff', width: '20rem', height: '27rem', borderRadius: '1.5rem', marginLeft: '30rem', marginTop: '-23rem', display: 'flex', textAlign: 'flex-start', justifyContent: 'flex-start'}}>
            <img style={{width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '1.5rem'}} src='https://i.ibb.co/L9XHDX2/image.png' alt='card-img'/>
            </Card>
            </Col>
            <Col>
            <Card style={{background: '#fff', width: '20rem', height: '27rem', borderRadius: '1.5rem', marginLeft: '55rem', marginTop: '-30.5rem', display: 'flex', textAlign: 'flex-start', justifyContent: 'flex-start'}}>
            <img style={{width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '1.5rem'}} src='https://i.ibb.co/L9XHDX2/image.png' alt='card-img'/>
            </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default Chooseus
