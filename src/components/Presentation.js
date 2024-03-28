import React, { useState, useEffect } from 'react';
import '../assets/wrapper/Presentation.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Presentation = () => {
  const [scrolledSection, setScrolledSection] = useState(0);

  const images = ['https://i.ibb.co/qN44fV3/image.png', 'https://i.ibb.co/v1Jqt74/image.png', 'https://i.ibb.co/r5rNvwQ/image.png'];
  const headings = ['Web Development', 'App Development', 'Game Development'];

  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const sectionHeights = [windowHeight, windowHeight, windowHeight];
      const sectionOffsets = sectionHeights.map((height, index) => index * height);

      let sectionInView = 0;
      for (let i = 0; i < sectionOffsets.length; i++) {
        if (scrollTop >= sectionOffsets[i] && scrollTop < sectionOffsets[i] + windowHeight) {
          sectionInView = i;
          break;
        }
      }
      setScrolledSection(sectionInView);
    };

    const throttledScroll = () => {
      const throttle = (callback, delay) => {
        let lastTime = 0;
        return function () {
          const now = new Date().getTime();
          if (now - lastTime >= delay) {
            callback();
            lastTime = now;
          }
        };
      };
      return throttle(handleScroll, 10);
    };

    const handleScrollThrottled = throttledScroll();
    window.addEventListener('scroll', handleScrollThrottled);

    return () => {
      window.removeEventListener('scroll', handleScrollThrottled);
    };
  }, []);

  return (
    <Container fluid className="presentation-container">
      <Row>
      <Col xs={12} md={6} lg={4} className="presentation-heading">
          {headings.map((heading, index) => (
            <h1 key={index} 
            className={`presentation-heading-text text-white text-capitalize`}
            style={{opacity: scrolledSection === index ? 1 : 0 }}>
              {heading}
            </h1>
          ))}
        </Col>
      </Row>
      <Row>
        <Col className="presentation-button">
          <Button className="view-more-btn text-initial border-white rounded-pill text-white bg-transparent">
            View more
          </Button>
        </Col>
      </Row>
      <Row>
      <Col xs={12} md={6} lg={4} className="presentation-images">
          {images.map((image, index) => (
            <Card  className='presentation-card h-100 w-100 rounded-5 overflow-hidden' key={index} style={{opacity: scrolledSection === index ? 1 : 0 }} >
              <Card.Img src={image} className='presentation-image' alt={`Section ${index}`} />
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Presentation;
