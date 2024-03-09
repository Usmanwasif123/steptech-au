import React, { useState, useEffect } from 'react';
import '../assets/wrapper/Presentation.css';
import { Container, Row, Col, Card } from 'react-bootstrap';


const Presentation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const threshold = 100; // Adjust this threshold as needed
      if (scrollTop > threshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
return (
  <Container style={{background: 'linear-gradient(256.4deg, #6347AA 7.85%, #233F81 107.97%)', height: '110vh', width: '98.7vw', position: 'relative'}}>
    <Row>
      <Col style={{marginTop: '5rem', marginLeft: '10rem', height: '30rem', width: '30rem', position: 'absolute'}}>
      <h1 style={{fontSize: '2rem', textTransform: 'capitalize', paddingTop: '10rem', paddingLeft: '5rem', color: '#fff'}}>
      {scrolled ? 'New Heading' : 'Web Development'}
      </h1>
      <button style={{fontSize: '1rem', textTransform: 'initial', borderRadius: '5rem', paddingRight: '2rem', paddingLeft: '2rem', border: '2px solid white',
      paddingTop: '1rem', paddingBottom: '1rem', marginTop: '2rem', marginLeft: '10rem', background: 'transparent', color:'#fff', fontWeight: '600'}}>
        View more
      </button>
      </Col>
    </Row>
    <Row>
      <Col style={{marginTop: '7rem', marginLeft: '45rem', height: '25rem', width: '30rem', position: 'absolute'}}>
      <Card style={{background: scrolled ? '#fff' : '#333', transition: 'background-color 0.3s ease', height: '25rem', width :'30rem', borderRadius: '4rem',overflow: 'hidden'}}>
      
      </Card>
      </Col>
    </Row>
  </Container>
);
}

export default Presentation
