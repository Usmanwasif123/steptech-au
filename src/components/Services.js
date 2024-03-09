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
      if (!animateSecondCard && scrollTop > 100) { // Adjust scroll position as needed
        setAnimateSecondCard(true);
      }

      // Trigger animation for the third card
      if (!animateThirdCard && scrollTop > 1100) { // Adjust scroll position as needed
        setAnimateThirdCard(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animateSecondCard, animateThirdCard]);
      
  return (
   <Container style={{height: '100vh', width: '98.7vw', background: '#333', position: 'relative', scrollBehavior: 'smooth'}}>
    <Row>
      <Col>
        <div style={{fontSize: '5rem', marginLeft: '3rem', marginTop: '9rem', background: '#fff', display: 'inline-flex'}}>
          <div>service</div>
        </div>
        <p style={{background: '#001122', display: 'flex', textAlign: 'flex-start', justifyContent: 'flex-start',  marginTop: '5rem', paddingRight: '0rem', marginLeft: '3rem', width: '15rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
        <Button style={{background: '#001122', color: '#fff', fontSize: '2rem', display: 'flex', textAlign: 'centre', justifyContent: 'center',  marginTop: '5rem', padding: '0.3rem', marginLeft: '3rem', width: '15rem'}}>Explore More</Button>
        <div style={{ marginTop: '-28rem', marginLeft: '25rem', position: 'absolute', display: 'inline-block', width: '50rem'}}> {/* Adjust margin-top as needed */}
          <Card style={{ background: '#fff', height: '33rem', width: '50rem', marginLeft: '7rem', zIndex: '0', overflow: 'hidden'}}>
          <img style={{height: 'auto', width: '100%'}} src='https://i.ibb.co/txSYFYv/discover-and-planning.jpg' alt=''/>
          </Card>
        </div>
        <div style={{ marginTop: '5rem', marginLeft: '25rem', position: 'absolute', display: 'inline-block', width: '50rem'}}> {/* Adjust margin-top as needed */}
          <Card className={animateSecondCard ? 'animatedCard' : ''} style={{ background: '#0000ff', height: '31rem', width: '50rem', marginLeft: '5rem', marginTop: '-31rem', zIndex: '1', overflow: 'hidden' }}>
          <img style={{height: 'auto', width: '100%'}} src='https://i.ibb.co/HGG61Gy/design-prototyping.jpg' alt=''/>
          </Card>
        </div>
        <div style={{ marginTop: '5rem', marginLeft: '25rem', position: 'absolute', display: 'inline-block', width: '50rem'}}> {/* Adjust margin-top as needed */}
          <Card className={animateThirdCard ? 'animatedCard' : ''} style={{ background: '#0044ff', height: '29rem', width: '50rem', marginLeft: '3rem', marginTop: '-29rem', zIndex: '2', overflow: 'hidden' }}>
            <img style={{height: 'auto', width: '100%'}} src='https://i.ibb.co/txSYFYv/discover-and-planning.jpg' alt=''/>
          </Card>
        </div>
      </Col>
    </Row>
   </Container>
  )
}

export default Services;
