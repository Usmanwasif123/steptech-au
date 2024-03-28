import React from 'react';
import '../assets/wrapper/Chooseus.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Chooseus = () => {
      return (
    <Container fluid className='choose-container'>
        <Row className="justify-content-center">
            <Col xs={12} md={6} lg={12}>
            <h1 className='text-center text-white text-white choose-heading'>Why choose us</h1>
            <p className='text-center text-white  text-white choose-paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
            </p>
            </Col>
            </Row>
            <Row className='justify-content-center'>
            <Col xs={12} md={4} lg={4}>
            <Card className='choose-card overflow-hidden rounded-4 border-none border-opacity-10'>
             <img className='img-fluid h-100 rounded object-fit-sm-fill object-fit-md-fill object-fit-lg-fill' src='https://i.ibb.co/H2jxBMF/Constant-Client-Coordination.jpg' alt='card-img' />
            </Card>
            </Col>
            <Col xs={12} md={4} lg={4} className='mt-4'>
            <Card className='choose-card overflow-hidden rounded-4 border-none border-opacity-10'>
            <img className='img-fluid h-100 rounded object-fit-sm-fill object-fit-md-fill object-fit-lg-fill' src='https://i.ibb.co/tKsHvbM/Supreme-customer-satisfaction.jpg' alt='card-img'/>
            </Card>
            </Col>
            <Col xs={12} md={4} lg={4}>
            <Card className='choose-card overflow-hidden rounded-4 border-none border-opacity-10'>
            <img className='img-fluid h-100 rounded object-fit-sm-fill object-fit-md-fill object-fit-lg-fill' src='https://i.ibb.co/n64nFfY/image.png' alt='card-img'/>
            </Card>
            </Col>
            </Row>
    </Container>
  )
}

export default Chooseus
