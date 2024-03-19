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
   <Container fluid className='service-container bg-white'>
    <Row className="justify-content-center">
      <Col xs={12} md={8} className="text-start mt-5" >
      <h1 className="display-2 fs-1 text-black d-inline-flex">Services</h1>
        <p className="lead fs-4 text-black d-flex justify-content-start w-50">Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
        <Button className='btn-lg border-0 rounded text-white fs-4 d-flex justify-content-center w-25 explore-btn'>Explore More</Button>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={6} lg={4}>
          <Card style={{ background: '#fff', height: '33rem', width: '50rem', marginLeft: '7rem', zIndex: '0', overflow: 'hidden'}}>
          <img style={{height: 'auto', width: '100%'}} src='https://i.ibb.co/NTPLxtM/1-banner.jpg' alt=''/>
          </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
          <Card style={{ zIndex: 1, background: '#0000ff', height: '31rem', width: '50rem', marginLeft: '5rem', marginTop: '-31rem',  overflow: 'hidden'}}
          className={`mb-5 slideLeft ${scrollPosition <= 200 ? 'translate-slide-left-1' : scrollPosition <= 400 ? 'translate-slide-left-2' : 'translate-slide-right-1'}`}>
          <img style={{height: 'auto', width: '100%'}} src='https://i.ibb.co/BZ9bR3s/2-banner.jpg' alt=''/>
          </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
          <Card className='slideLeft' style={{zIndex: 2, background: '#0044ff', height: '29rem', width: '50rem', marginLeft: '3rem', marginTop: '-29rem',  overflow: 'hidden', transition: 'transform 0.5s ease', transform: scrollPosition <= 200 ? `translateX(-${scrollPosition / 5}px)` : scrollPosition <= 400 ? `translateX(-${scrollPosition / 40}px)` : `translateX(${scrollPosition / -20}px)` }}>
            <img style={{height: 'auto', width: '100%'}} src='https://i.ibb.co/LZxM3cq/3-banner.jpg' alt=''/>
          </Card>
      </Col>
    </Row>
   </Container>
  )
}

export default Services;
