import React, { useState, useEffect } from 'react';
import '../assets/wrapper/Presentation.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Presentation = () => {
  const [scrolledSection, setScrolledSection] = useState(0);

  const images = ['https://i.ibb.co/5sW8MtH/image.png', 'https://i.ibb.co/v1Jqt74/image.png', 'https://i.ibb.co/r5rNvwQ/image.png'];
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
      return throttle(handleScroll, 200);
    };

    const handleScrollThrottled = throttledScroll();
    window.addEventListener('scroll', handleScrollThrottled);

    return () => {
      window.removeEventListener('scroll', handleScrollThrottled);
    };
  }, []);

  return (
    <Container style={{ background: 'linear-gradient(256.4deg, #6347AA 7.85%, #233F81 107.97%)', height: '110vh', width: '98.7vw', position: 'relative' }}>
      <Row>
      <Col style={{ marginTop: '5rem', marginLeft: '10rem', height: '30rem', width: '30rem', position: 'absolute', transition: 'opacity 0.5s' }}>
          {headings.map((heading, index) => (
            <h1 key={index} style={{ fontSize: '2rem', textTransform: 'capitalize', paddingTop: '10rem', paddingLeft: '5rem', color: '#fff', opacity: scrolledSection === index ? 1 : 0 }}>
              {heading}
            </h1>
          ))}
        </Col>
      </Row>
      <Row>
        <Col style={{ marginTop: '20rem', marginLeft: '18rem', position: 'absolute', transition: 'opacity 0.5s' }}>
          <button style={{ fontSize: '1rem', textTransform: 'initial', borderRadius: '5rem', paddingRight: '2rem', paddingLeft: '2rem', border: '2px solid white', paddingTop: '1rem', paddingBottom: '1rem', marginTop: '2rem', background: 'transparent', color: '#fff', fontWeight: '600', opacity: 1 }}>
            View more
          </button>
        </Col>
      </Row>
      <Row>
      <Col style={{ marginTop: '7rem', marginLeft: '45rem', height: '25rem', width: '30rem', position: 'absolute', transition: 'opacity 0.5s' }}>
          {images.map((image, index) => (
            <Card key={index} style={{ background: '#333', height: '25rem', width: '30rem', borderRadius: '4rem', overflow: 'hidden', opacity: scrolledSection === index ? 1 : 0 }}>
              <img src={image} style={{ height: '100%', width: '100%', objectFit: 'cover' }} alt={`Section ${index}`} />
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Presentation;
