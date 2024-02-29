import React, { useState } from 'react';
import '../assets/wrapper/Vision.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  const images = [
    'https://i.ibb.co/NrW3xb5/image.png',
    'https://i.ibb.co/4sfpZDb/image.png',
    'https://i.ibb.co/fC0THMv/image.png',
    // Add more image URLs as needed
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const PrevBtn = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? prevIndex : prevIndex - 1));
  };

  const NextBtn = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? prevIndex : prevIndex + 1));
  };

  const isFirstImage = currentImageIndex === 0;
  const isLastImage = currentImageIndex === images.length - 1;

  return (
    <Container className='main-section2'>
      <Row>
      <Col  xs={12}  md={6} className='right-vision'>About Us</Col>
      <Col   xs={12} md={6}id='line1-vision'></Col>
      <Col  xs={12}  md={6} id='line2-vision'></Col>
      <Col  xs={12}  md={6} id='line3-vision'></Col>
      <Col  xs={12}  md={6} className='right-heading'>Maximize the High Potential of Your Business</Col>
      <Col  xs={12}  md={6} className='right-p'>
        Step Tech is the most prominent website development company in Australia. We were established in 2015 to provide
        our customers with an unparalleled digital experience. We are not just building your website. We are building
        your business. We go beyond the ordinary for our clients by offering unique, customized, and productive
        solutions. Whether it is a web app, mobile app, game app development, or any IT Solution- it will be one of a
        kind.
        <br />
        <br />
        Step Tech is a hub for growth, education, and exploration for creative individuals. We are an eclectic bunch of
        brave and creative thinkers from every background. Our focus on inclusion throughout the organization offers our
        personnel enormous opportunities, and our open culture propels achievement for our clients.
      </Col>
      <Col xs={12} md={6}>
      <Link to='/portfolio' className='btn-visionread'>
        see projects
      </Link>
      </Col>
      </Row>
      <Row>
      <Col xs={12} md={6} className='vision-image'>
        <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
      </Col>
      <Col xs={12} md={6}
        className='btn-box'
        style={{
          background: '#fff',
          zIndex: '3',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <button
          onClick={PrevBtn}
          className='prev-btn'
          style={{
            color: isFirstImage ? '#ccc' : '#000',
            border: 'none',
            fontSize: '15px',
            background: 'none',
            fontWeight: '600',
            marginLeft: '-10px',
            cursor: isFirstImage ? 'not-allowed' : 'pointer',
            textTransform: 'uppercase',
            transition: '.4s cubic-bezier(0,0,.3642,1)',
          }}
          disabled={isFirstImage}
        >
          Prev
        </button>
        <button
          onClick={NextBtn}
          className='next-btn'
          style={{
            color: isLastImage ? '#ccc' : '#000',
            border: 'none',
            fontSize: '15px',
            background: 'none',
            fontWeight: '600',
            cursor: isLastImage ? 'not-allowed' : 'pointer',
            textTransform: 'uppercase',
            marginLeft: '50px',
            transition: '.4s cubic-bezier(0,0,.3642,1)',
          }}
          disabled={isLastImage}
        >
          Next
        </button>
      </Col>
      </Row>
    </Container>
  );
};

export default About;
