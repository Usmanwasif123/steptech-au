import React, {useState} from 'react';
import '../assets/wrapper/Partner.css';
import { Container, Row, Col } from 'react-bootstrap';

const Partner = () => {
    
  return (
    <Container style={{height: '130vh', width: '98.7vw', background: '#006677'}}>
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
