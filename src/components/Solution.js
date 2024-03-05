import React, { useState } from 'react';
import '../assets/wrapper/Solution.css';
import {Link} from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Solution = () => {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isFlipped4, setIsFlipped4] = useState(false);

  const handleCard1Click = () => {
    setIsFlipped1(!isFlipped1);
  };

  const handleCard2Click = () => {
    setIsFlipped2(!isFlipped2);
  };

  const handleCard3Click = () => {
    setIsFlipped3(!isFlipped3);
  };

  const handleCard4Click = () => {
    setIsFlipped4(!isFlipped4);
  };

  return (
        <Container style={{height: '100vh', width: '98.5vw', background: '#006677'}}>
          <Row>
            <Col>
            <div style={{fontSize: '5rem', paddingTop: '3rem', marginLeft: '3rem'}}>Solution</div>
            <Card className={`card ${isFlipped1 ? 'flipped' : ''}`} onClick={handleCard1Click}  
            style={{ height: '25rem', width: '18rem', background: '#333', marginLeft: '3rem', marginTop: '2rem', 
            borderRadius: '1rem', boxShadow: '0 0 0px 5px white', transformStyle: 'preserve-3d',
            transform: isFlipped1 ? 'rotateY(180deg)' : 'rotateY(0deg)', // Rotate based on isFlipped state
            transition: 'transform 0.5s',}}>
            <div className="card-inner" style={{ transformStyle: 'preserve-3d', width: '100%', height: '100%', transition: 'transform 0.5s' }}>
            <div className="card-front" style={{ position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden' }}>
             <h1 style={{color: '#fff', fontSize: '2rem',paddingTop: '10rem', display: 'flex', TextAlign: 'center', justifyContent: 'center'}}>Front of the card</h1>
            </div>
           <div className="card-back" style={{ position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
           <h1 style={{color: '#fff', fontSize: '2rem',paddingTop: '10rem', display: 'flex', TextAlign: 'center', justifyContent: 'center'}}>Back of the card</h1>
           </div>
           </div>
            </Card>
            <Card className={`card ${isFlipped2 ? 'flipped' : ''}`} onClick={handleCard2Click}  
            style={{ height: '25rem', width: '18rem', background: '#333', marginLeft: '23rem', marginTop: '-25rem', 
            borderRadius: '1rem', boxShadow: '0 0 0px 5px white', transformStyle: 'preserve-3d',
            transform: isFlipped2 ? 'rotateY(180deg)' : 'rotateY(0deg)', // Rotate based on isFlipped state
            transition: 'transform 0.5s',}}>
            <div className="card-inner" style={{ transformStyle: 'preserve-3d', width: '100%', height: '100%', transition: 'transform 0.5s' }}>
            <div className="card-front" style={{ position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden' }}>
             {/* Content for the front side of the card */}
            </div>
           <div className="card-back" style={{ position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
            {/* Content for the back side of the card */}
           </div>
           </div>
            </Card>
            <Card className={`card ${isFlipped3 ? 'flipped' : ''}`} onClick={handleCard3Click}  
            style={{ height: '25rem', width: '18rem', background: '#333', marginLeft: '43rem', marginTop: '-25rem', 
            borderRadius: '1rem', boxShadow: '0 0 0px 5px white', transformStyle: 'preserve-3d',
            transform: isFlipped3 ? 'rotateY(180deg)' : 'rotateY(0deg)', // Rotate based on isFlipped state
            transition: 'transform 0.5s',}}>
            <div className="card-inner" style={{ transformStyle: 'preserve-3d', width: '100%', height: '100%', transition: 'transform 0.5s' }}>
            <div className="card-front" style={{ position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden' }}>
             {/* Content for the front side of the card */}
            </div>
           <div className="card-back" style={{ position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
            {/* Content for the back side of the card */}
           </div>
           </div>
            </Card>
            <Card className={`card ${isFlipped4 ? 'flipped' : ''}`} onClick={handleCard4Click}  
            style={{ height: '25rem', width: '18rem', background: '#333', marginLeft: '63rem', marginTop: '-25rem', 
            borderRadius: '1rem', boxShadow: '0 0 0px 5px white', transformStyle: 'preserve-3d',
            transform: isFlipped4 ? 'rotateY(180deg)' : 'rotateY(0deg)', // Rotate based on isFlipped state
            transition: 'transform 0.5s',}}>
            <div className="card-inner" style={{ transformStyle: 'preserve-3d', width: '100%', height: '100%', transition: 'transform 0.5s' }}>
            <div className="card-front" style={{ position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden' }}>
             {/* Content for the front side of the card */}
            </div>
           <div className="card-back" style={{ position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
            {/* Content for the back side of the card */}
           </div>
           </div>
            </Card>
            </Col>
            </Row>
        </Container>   
  );
}

export default Solution
