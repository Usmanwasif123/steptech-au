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
        <Container fluid className='solution-container mt-2'>
          <Row>
          <Col xs={12} md={6} lg={3}>
          <div className='sol-main-heading'>Solution</div>
          <Card className={`card1 ${isFlipped1 ? 'flipped' : ''}`} onClick={handleCard1Click}
            style={{transform: isFlipped1 ? 'rotateY(180deg)' : 'rotateY(0deg)' // Rotate based on isFlipped state
            }}> 
            <div className="card-inner">
            <div className="card-front">
             <img src='https://i.ibb.co/vq6rQ6Z/4-1.png' className='frontimage'/>
             <h1 className='frontpara mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis laoreet erat. Fusce dignissim lacinia justo dignissim tristique. Vestibulum tempus.</h1>
            </div>
           <div className="card-back">
           <img src='https://i.ibb.co/Wyvz0Bs/11.png' className='backimage' />
           <h1 className='backpara mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis laoreet erat. Fusce dignissim lacinia justo dignissim tristique. Vestibulum tempus.</h1>
           </div>
           </div>
            </Card>
            </Col>
            <Col xs={12} md={6} lg={3}>
           <Card className={`card2 ${isFlipped2 ? 'flipped' : ''}`} onClick={handleCard2Click}
            style={{transform: isFlipped2 ? 'rotateY(180deg)' : 'rotateY(0deg)', // Rotate based on isFlipped state
            }}>
            <div className="card-inner">
            <div className="card-front" >
            <img src='https://i.ibb.co/WBrfgGK/15.png' className='frontimage'/>
             <h1 className='frontpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis laoreet erat. Fusce dignissim lacinia justo dignissim tristique. Vestibulum tempus.</h1>
            </div>
           <div className="card-back">
           <img src='https://i.ibb.co/1X0JHkm/26.png' className='backimage'/>
           <h1  className='backpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis laoreet erat. Fusce dignissim lacinia justo dignissim tristique. Vestibulum tempus.</h1>
           </div>
           </div>
            </Card>
            </Col>
            <Col xs={12} md={6} lg={3}>
            <Card className={`card3 ${isFlipped3 ? 'flipped' : ''}`} onClick={handleCard3Click}  
            style={{transform: isFlipped3 ? 'rotateY(180deg)' : 'rotateY(0deg)', // Rotate based on isFlipped state
            }}>
            <div className="card-inner">
            <div className="card-front">
            <img src='https://i.ibb.co/1RpkjXW/35.png' className='frontimage' />
             <h1  className='frontpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis laoreet erat. Fusce dignissim lacinia justo dignissim tristique. Vestibulum tempus.</h1>
            </div>
           <div className="card-back">
           <img src='https://i.ibb.co/Wyvz0Bs/11.png' className='backimage'/>
           <h1 className='backpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis laoreet erat. Fusce dignissim lacinia justo dignissim tristique. Vestibulum tempus.</h1>
           </div>
           </div>
            </Card>
            </Col>
            <Col xs={12} md={6} lg={3}>
            <Card className={`card4 ${isFlipped4 ? 'flipped' : ''}`} onClick={handleCard4Click}   
            style={{transform: isFlipped4 ? 'rotateY(180deg)' : 'rotateY(0deg)', // Rotate based on isFlipped state
            }}>
            <div className="card-inner" >
            <div className="card-front">
            <img src='https://i.ibb.co/vq6rQ6Z/4-1.png' className='frontimage'/>
             <h1  className='frontpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis laoreet erat. Fusce dignissim lacinia justo dignissim tristique. Vestibulum tempus.</h1>
            </div>
           <div className="card-back">
           <img src='https://i.ibb.co/Wyvz0Bs/11.png' className='backimage'/>
           <h1  className='backpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis laoreet erat. Fusce dignissim lacinia justo dignissim tristique. Vestibulum tempus.</h1>
           </div>
           </div>
            </Card>
            </Col>
            </Row>
        </Container>   
  );
}

export default Solution
