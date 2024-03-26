import React, { useRef, useState } from 'react';
import '../assets/wrapper/Process.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Process = () => {
  const imagesRef = useRef(null);
  const [startX, setStartX] = useState(null);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (startX === null) return;
    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;
    imagesRef.current.style.transform = `translateX(-${diffX}px)`;
  };

  const handleTouchEnd = () => {
    if (startX === null) return;
    setStartX(null);
    // Reset transform on touch end
    imagesRef.current.style.transform = `translateX(0)`;
  };

  // Define array of image URLs and accompanying text
  const images = [
    { url: 'https://ibb.co/p1fMkX0', text: 'Image 1' },
    { url: 'https://ibb.co/p1fMkX0', text: 'Image 2' },
    { url: 'https://ibb.co/p1fMkX0', text: 'Image 3' },
    { url: 'https://ibb.co/p1fMkX0', text: 'Image 4' },
    { url: 'https://ibb.co/p1fMkX0', text: 'Image 5' },
  ];

  return (
    <Container fluid className="process-container">
      <Row
        ref={imagesRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ transition: 'transform 0.3s ease' }} // Add transition for smooth movement
      >
        {images.map((image, index) => (
          <Col key={index}>
            <Card className="process-card">
              <img src={image.url} alt={image.text} />
              <p>{image.text}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Process;
