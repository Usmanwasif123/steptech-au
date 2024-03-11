import React, { useState, useEffect } from 'react';
import '../assets/wrapper/services.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Services = () => {
  const [animateSecondCard, setAnimateSecondCard] = useState(false);
  const [animateThirdCard, setAnimateThirdCard] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
    
      // Trigger animation for the second card
      if (scrollTop > 600 && scrollTop < 1600) {
        setAnimateSecondCard(true);
      }
    
      // Trigger animation for the third card
      if (scrollTop > 1600) {
        setAnimateThirdCard(true);
      }
    };
    

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animateSecondCard, animateThirdCard]);
      
  return (
   <Container style={{height: '100vh', width: '98.7vw', background: '#fff', position: 'relative', scrollBehavior: 'smooth'}}>
    <Row>
      <Col>
        <div style={{fontSize: '5rem', marginLeft: '3rem', marginTop: '9rem', display: 'inline-flex', color: '#333'}}>
          <div>service</div>
        </div>
        <p style={{fontSize: '1.3rem', color: '#333', display: 'flex', textAlign: 'flex-start', justifyContent: 'flex-start',  marginTop: '2rem', paddingRight: '0rem', marginLeft: '3rem', width: '17rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
        <Button style={{background: 'linear-gradient(256.4deg, #6347AA 7.85%, #233F81 107.97%)', border: 'none', borderRadius: '0.5rem',  color: '#fff', fontSize: '1.5rem', display: 'flex', textAlign: 'centre', justifyContent: 'center',  marginTop: '2rem', padding: '0.5rem', marginLeft: '3rem', width: '15rem'}}>Explore More</Button>
        <div style={{ marginTop: '-26rem', marginLeft: '25rem', position: 'absolute', display: 'inline-block', width: '50rem'}}> {/* Adjust margin-top as needed */}
          <Card style={{ background: '#fff', height: '33rem', width: '50rem', marginLeft: '7rem', zIndex: '0', overflow: 'hidden'}}>
          <img style={{height: 'auto', width: '100%'}} src='https://i.ibb.co/txSYFYv/discover-and-planning.jpg' alt=''/>
          </Card>
        </div>
        <div style={{ marginTop: '8rem', marginLeft: '25rem', position: 'absolute', display: 'inline-block', zIndex: '1', width: '50rem'}}> {/* Adjust margin-top as needed */}
          <Card className={animateSecondCard ? 'animatedCard' : ''} style={{ background: '#0000ff', height: '31rem', width: '50rem', marginLeft: '5rem', marginTop: '-31rem',  overflow: 'hidden' }}>
          <img style={{height: 'auto', width: '100%'}} src='https://i.ibb.co/HGG61Gy/design-prototyping.jpg' alt=''/>
          </Card>
        </div>
        <div style={{ marginTop: '10rem', marginLeft: '25rem', position: 'absolute', display: 'inline-block',zIndex: '2', width: '50rem'}}> {/* Adjust margin-top as needed */}
          <Card className={animateThirdCard ? 'animatedCard' : ''} style={{ background: '#0044ff', height: '29rem', width: '50rem', marginLeft: '3rem', marginTop: '-29rem',  overflow: 'hidden' }}>
            <img style={{height: 'auto', width: '100%'}} src='https://i.ibb.co/txSYFYv/discover-and-planning.jpg' alt=''/>
          </Card>
        </div>
      </Col>
    </Row>
   </Container>
  )
}

export default Services;
