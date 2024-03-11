import React, { useState, useEffect } from 'react';
import '../assets/wrapper/Presentation.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Presentation = () => {
  const [scrolledSection, setScrolledSection] = useState(0);

  // Array of images and headings
  const images = ['https://i.ibb.co/5sW8MtH/image.png', 'https://i.ibb.co/v1Jqt74/image.png', 'https://i.ibb.co/r5rNvwQ/image.png'];
  const headings = ['Web Development', 'App Development', 'Game Development'];

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
  console.log(throttle)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const sectionHeights = [300, 300, 300];
      const sectionOffsets = [];
    
      let offset = 0;
      sectionHeights.forEach((height, index) => {
        sectionOffsets.push({ top: offset, bottom: offset + height });
        offset += height;
      });
    
      let sectionInView = 0;
    
      for (let i = 0; i < sectionOffsets.length; i++) {
        if (scrollTop >= sectionOffsets[i].top && scrollTop <= sectionOffsets[i].bottom) {
          sectionInView = i;
          break;
        }
      }
      console.log('scroll section', scrolledSection); // Check the current value of scrolledSection
      setScrolledSection(sectionInView);
    };

    const handleScrollThrottled = throttle(handleScroll, 200);
    console.log('handle scroll thorttle ', handleScrollThrottled)
    window.addEventListener('scroll', handleScrollThrottled);

    handleScroll(); // Set initial scrolled section

    return () => {
      window.removeEventListener('scroll', handleScrollThrottled);
    };
  }, []);

 

  return (
    <Container style={{ background: 'linear-gradient(256.4deg, #6347AA 7.85%, #233F81 107.97%)', height: '110vh', width: '98.7vw', position: 'relative' }}>
      <Row>
        <Col style={{ marginTop: '5rem', marginLeft: '10rem', height: '30rem', width: '30rem', position: 'absolute' }}>
          <h1 style={{ fontSize: '2rem', textTransform: 'capitalize', paddingTop: '10rem', paddingLeft: '5rem', color: '#fff' }}>
            {headings[scrolledSection]}
          </h1>
          <button style={{ fontSize: '1rem', textTransform: 'initial', borderRadius: '5rem', paddingRight: '2rem', paddingLeft: '2rem', border: '2px solid white', paddingTop: '1rem', paddingBottom: '1rem', marginTop: '2rem', marginLeft: '10rem', background: 'transparent', color: '#fff', fontWeight: '600' }}>
            View more
          </button>
        </Col>
      </Row>
      <Row>
        <Col style={{ marginTop: '7rem', marginLeft: '45rem', height: '25rem', width: '30rem', position: 'absolute' }}>
          <Card style={{ background: '#333', height: '25rem', width: '30rem', borderRadius: '4rem', overflow: 'hidden' }}>
            <img src={images[scrolledSection]} style={{ height: '100%', width: '100%', objectFit: 'cover' }} alt={`Section ${scrolledSection}`} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Presentation;