import React, { useState, useEffect, useRef } from 'react';
import '../assets/wrapper/Vision.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Ourwork = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const containerRef = useRef(null);

  const slides = [
    { 
      image: 'image1.jpg',
      title: 'Title 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' 
    },
    { 
      image: 'image2.jpg',
      title: 'Title 2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' 
    },
    { 
      image: 'image3.jpg',
      title: 'Title 3',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' 
    },
    { 
      image: 'image4.jpg',
      title: 'Title 4',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' 
    },
    { 
      image: 'image5.jpg',
      title: 'Title 5',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' 
    }
  ];

  // Duplicate the slides array to create a loop effect
  const duplicatedSlides = [...slides, ...slides, ...slides];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!dragging) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, dragging, slides.length]);

  const handleMouseDown = (e) => {
    setDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    const deltaX = e.clientX - startX;
    const containerWidth = containerRef.current.offsetWidth;
    const slideWidth = containerWidth / slides.length;
    const deltaIndex = Math.round(deltaX / slideWidth);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - deltaIndex;
      return newIndex < 0 ? slides.length - 1 : newIndex % slides.length;
    });
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseLeave = () => {
    if (dragging) {
      setDragging(false);
    }
  };

  return (
    <Container 
      style={{ 
        background: '#0000ff', 
        height: '100vh', 
        width: '98.5vw', 
        overflow: 'hidden', 
        
      }} 
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      <Row>
        <Col>
          <div className='section2-main' style={{ fontSize: '5rem', color: '#fff', paddingTop: '2rem', marginLeft: '2rem' }}>About us</div>
          <div style={{ display: 'flex', transition: 'transform 1s ease', transform: `translateX(-${currentIndex * 20}vw)` }}>
            {duplicatedSlides.map((slide, index) => (
              <div key={index}
              onMouseEnter={() => setDragging(true)}
              onMouseLeave={() => setDragging(false)} 
              style={{ flex: '0 0 auto', width: '20vw', cursor: dragging ? `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24"><circle cx="50%" cy="50%" r="8" fill="blue" stroke="blue" stroke-width="1"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="6" fill="white">Drag</text></svg>') 12 12, auto` 
              : 'auto' }}>
                <Card style={{ height: '17rem', width: '15rem', background: '#333', marginLeft: '2rem', marginTop: '2rem' }}>
                  <img src={slide.image} alt='Slide Image' style={{ width: '100%', height: 'auto' }} />
                </Card>
                <h1 style={{ marginLeft: '2rem', marginTop: '0.5rem', display: 'inline-flex' }}>{slide.title}</h1>
                <p style={{ marginLeft: '2rem', paddingRight: '0rem', marginTop: '0.5rem', width: '15rem', display: 'flex' }}>{slide.content}</p>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Ourwork;
