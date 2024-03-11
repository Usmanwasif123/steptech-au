import React, { useState } from 'react';
import '../assets/wrapper/Brand.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Brand = () => {
  
  return (
    <Container style={{height: '160vh', width: '98.7vw', background: '#ffffff', position: 'relative', scrollBehavior: 'smooth'}}>
      <Row>
        <Col>
        <div className="image" style={{ marginTop: '5rem', marginLeft: '0rem', position: 'absolute', display: 'inline-block', width: '41rem', height: '23rem'}}> {/* Adjust margin-top as needed */}
          <Card style={{ background: '#fff', height: '20rem', width: '38rem', marginLeft: '3rem', zIndex: '0', borderRadius: '0.5rem', overflow: 'hidden'}}>
            <img style={{width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '0.5rem', transition: 'transform 0.3s ease-in-out'}} src='https://i.ibb.co/L9XHDX2/image.png' alt='card-img'/>
          </Card>
          <h1 style={{marginLeft: '3rem',marginTop: '1rem', textTransform: 'capitalize'}}>artificial intelligence</h1>
        </div>
        <div style={{ marginTop: '5rem', marginLeft: '0rem', position: 'absolute', display: 'inline-block', width: '41rem', height: '23rem'}}> {/* Adjust margin-top as needed */}
          <Card style={{ background: '#333', height: '20rem', width: '39rem', marginLeft: '43rem', zIndex: '0', borderRadius: '0.5rem', overflow: 'hidden'}}>
            <img style={{width: '100%', height: '110%', objectFit: 'cover', borderRadius: '0.5rem'}} src='https://i.ibb.co/pLLSFyH/Blockchain.jpg' alt='card-img'/>
          </Card>
          <h1 style={{marginLeft: '43rem',marginTop: '1rem', textTransform: 'capitalize'}}>blockchain</h1>
        </div>
        <div style={{ marginTop: '35rem', marginLeft: '0rem', position: 'absolute', display: 'inline-block', width: '41rem', height: '23rem'}}> {/* Adjust margin-top as needed */}
          <Card  style={{ background: '#0044ff', height: '20rem', width: '38rem', marginLeft: '3rem', marginTop: '0rem', zIndex: '2', borderRadius: '0.5rem', overflow: 'hidden'}}>
          <img style={{width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '0.5rem'}} src='https://i.ibb.co/QCJvbmX/Branding.png' alt='card-img'/>
          </Card>
          <h1 style={{marginLeft: '3rem',marginTop: '1rem', textTransform: 'capitalize'}}>branding</h1>
        </div>
        <div style={{ marginTop: '35rem', marginLeft: '43rem', position: 'absolute', display: 'inline-block', width: '38rem', height: '23rem'}}> {/* Adjust margin-top as needed */}
          <Card  style={{ background: '#0000ff', height: '20rem', width: '38rem', marginLeft: '0rem', marginTop: '0rem', zIndex: '1', borderRadius: '0.5rem', overflow: 'hidden'}}>
          <img style={{width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '0.5rem'}} src='https://i.ibb.co/6Wb4526/Marketing.jpg' alt='card-img'/>
          </Card>
          <h1 style={{marginLeft: '0rem',marginTop: '1rem', textTransform: 'capitalize'}}>marketing</h1>
        </div>
        </Col>
      </Row>
    </Container>
  )
};

export default Brand;
