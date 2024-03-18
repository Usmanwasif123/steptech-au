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

  useEffect(() => {
    const interval = setInterval(() => {
      if (!dragging) {
        setCurrentIndex((prevIndex) => (prevIndex + 2) % slides.length);
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
  
    // Calculate the new index
  let newIndex = currentIndex - deltaIndex;
  
  // If dragging to the last slide, continue dragging but move back to the first slide
  if (newIndex >= slides.length -1) {
    newIndex = 0;
  }
  
    setCurrentIndex(newIndex);
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
    <Container fluid className='vision-container'
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      <Row>
        <Col>
          <div className='section2-main'>About us</div>
          <div className='outer-div' style={{ transform: `translateX(-${currentIndex * 20}vw)` }}>
            {duplicatedSlides.map((slide, index) => (
              <div key={index}
              onMouseEnter={() => setDragging(true)}
              onMouseLeave={() => setDragging(false)} 
              style={{ flex: '0 0 auto', width: '20vw', cursor: dragging ? `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24"><circle cx="50%" cy="50%" r="8" fill="purple" stroke="purple" stroke-width="1"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="6" fill="white">Drag</text></svg>') 12 12, auto` 
              : 'auto' }}>
                <Card className='card-style'>
                  <img src={slide.image} alt='card-images' className='cards-image'/>
                </Card>
                <h1 className='cards-heading'>{slide.title}</h1>
                <p className='card-para'>{slide.content}</p>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Ourwork;
