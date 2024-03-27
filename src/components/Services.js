import React, {useState, useEffect} from 'react';
import '../assets/wrapper/services.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Services = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
   <Container fluid className='services-container bg-white mt-5'>
    <Row className="justify-content-center">
      <Col xs={12} md={8} className="text-start mt-5">
      <h1 className="display-2 fs-1 text-black d-inline-flex">Services</h1>
        <p className="lead fs-5 text-black d-flex justify-content-start">Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
        <Button href='/service' className='btn-lg border-0 rounded text-white fs-4 d-flex justify-content-center explore-btn'>Explore More</Button>
        </Col>
      </Row>
      <Row className="d-flex justify-content-end mt-5">
        <Col xs={12} md={6} lg={4}  >
          <Card className='game-card justify-content-end'>
          <img style={{height: '100%', width: '100%', objectFit: 'cover'}} src='https://i.ibb.co/NTPLxtM/1-banner.jpg' alt=''/>
          </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
          <Card className='web-card justify-content-end slideLeft'
          style={{}}>
          <img style={{height: '100%', width: '100%', objectFit: 'cover'}} src='https://i.ibb.co/BZ9bR3s/2-banner.jpg' alt=''/>
          </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
          <Card className='app-card justify-content-end slideLeft'>
            <img style={{height: '100%', width: '100%', objectFit: 'cover'}} src='https://i.ibb.co/LZxM3cq/3-banner.jpg' alt=''/>
          </Card>
      </Col>
    </Row>
   </Container>
  )
}

export default Services;
