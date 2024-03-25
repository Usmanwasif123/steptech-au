import React, { useState, useEffect, useRef } from 'react';
import '../assets/wrapper/Vision.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Ourwork = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [offset, setOffset] = useState(0);
  const containerRef = useRef(null);

  const slides = [
    { 
      image: 'https://i.ibb.co/RcdR9yG/business-people-in-a-board-room-meeting-2022-01-27-23-40-01-utc.jpg',
      title: 'Title 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' 
    },
    { 
      image: 'https://i.ibb.co/RcdR9yG/business-people-in-a-board-room-meeting-2022-01-27-23-40-01-utc.jpg',
      title: 'Title 2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' 
    },
    { 
      image: 'https://i.ibb.co/RcdR9yG/business-people-in-a-board-room-meeting-2022-01-27-23-40-01-utc.jpg',
      title: 'Title 3',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' 
    },
    { 
      image: 'https://i.ibb.co/RcdR9yG/business-people-in-a-board-room-meeting-2022-01-27-23-40-01-utc.jpg',
      title: 'Title 4',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' 
    },
    { 
      image: 'https://i.ibb.co/RcdR9yG/business-people-in-a-board-room-meeting-2022-01-27-23-40-01-utc.jpg',
      title: 'Title 5',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' 
    },
    { 
      image: 'https://i.ibb.co/RcdR9yG/business-people-in-a-board-room-meeting-2022-01-27-23-40-01-utc.jpg',
      title: 'Title 6',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' 
    },
    { 
      image: 'https://i.ibb.co/RcdR9yG/business-people-in-a-board-room-meeting-2022-01-27-23-40-01-utc.jpg',
      title: 'Title 7',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' 
    },
    { 
      image: 'https://i.ibb.co/RcdR9yG/business-people-in-a-board-room-meeting-2022-01-27-23-40-01-utc.jpg',
      title: 'Title 8',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' 
    },
  ];

  // Duplicate the slides array to create a loop effect
  const duplicatedSlides = [...slides];

  const slideWidth = 200; // Adjust as needed

  useEffect(() => {
    const interval = setInterval(() => {
      if (!dragging) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, dragging, slides.length]);

  const handleMouseDown = (e) => {
    setDragging(false);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    const newOffset = e.clientX - startX;
    setOffset(newOffset);
  };

  const handleMouseUp = () => {
    if (dragging) {
      setDragging(false);
      const newIndex = currentIndex - Math.round(offset / slideWidth);
      setCurrentIndex(newIndex < 0 ? slides.length - 1 : newIndex % slides.length);
      setOffset(0);
    }
  };

  const handleMouseLeave = () => {
    if (dragging) {
      setDragging(false);
      const newIndex = currentIndex - Math.round(offset / slideWidth);
      setCurrentIndex(newIndex < 0 ? slides.length - 1 : newIndex % slides.length);
      setOffset(0);
    }
  };

  const handleCardClick = () => {
    setDragging(true);
  };

  return (
    <Container fluid className='vision-container bg-white overflow-hidden' ref={containerRef}>
      <Row>
        <Col xs={12} md={8}>
          <div className='section2-main text-black fs-1 mt-2'>About us</div>
          <div className='outer-div-vis d-flex flex-row overflow-x-hidden overflow-y-hidden'
          onMouseDown={handleMouseDown} 
          onMouseMove={handleMouseMove} 
          onMouseUp={handleMouseUp} 
          onMouseLeave={handleMouseLeave}>
            {duplicatedSlides.map((slide, index) => (
              <div key={index} className='slide-div'
              onMouseEnter={() => setDragging(true)} 
              onMouseLeave={() => setDragging(false)}
              style={{ transform: `translateX(-${currentIndex * slideWidth + offset}px)`,
              transition: dragging ? 'none' : 'transform 0.5s ease',
              cursor: dragging ? `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24"><circle cx="50%" cy="50%" r="8" fill="purple" stroke="purple" stroke-width="1"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="6" fill="white">Drag</text></svg>') 12 12, auto` : 'auto' }}>
                <Card className='card-style' onClick={handleCardClick}>
                  <Card.Img variant="top" src={slide.image} alt='card-images' className='cards-image'/>
                  <Card.Body>
                    <Card.Title className='text-black'>{slide.title}</Card.Title>
                    <Card.Text className='text-black'>{slide.content}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Ourwork;
