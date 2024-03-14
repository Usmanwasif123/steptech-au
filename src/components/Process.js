import React, {useState } from 'react';
import '../assets/wrapper/Process.css';
import { Container, Row, Col, Card } from 'react-bootstrap';


const Process = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  
  return (
    <Container style={{height: '620vh', width: '98.7vw', background: 'linear-gradient(256.4deg, #6347AA 7.85%, #233F81 107.97%)', scrollBehavior: 'smooth'}}>
    <Row>
      <Col>
      <div style={{paddingTop: '2rem'}}>
        <Card className="wave-container" style={{background: '#fff', height: '30rem', width: '50rem', marginTop: '2rem', display: 'flex', overflow: 'hidden'}}  onMouseEnter={() => setIsHovered1(true)} onMouseLeave={() => setIsHovered1(false)}>
        <img className='wave-image' src={isHovered1 ? 'https://i.ibb.co/wQYN5C1/glitch-image-1710402956.png' : 'https://i.ibb.co/txSYFYv/discover-and-planning.jpg'}  alt='card-image' style={{ width: '100%', height: 'auto', transformOrigin: 'bottom center', transform: 'scaleY(1.05) rotateX(-5deg)', maskRepeat: 'no-repeat', maskPosition: 'center' }}/>
        </Card>
        <p style={{fontSize: '2rem', marginTop: '5rem', marginLeft: '2rem', marginRight: '40rem', display: 'flex', textAlign: 'flex-start', justifyContent: 'flex-start' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
        <p style={{fontSize: '2rem', marginTop: '5rem', marginLeft: '50rem', marginRight: '5rem', display: 'flex', textAlign: 'flex-start', justifyContent: 'flex-start' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
        <Card className="wave-container" style={{background: '#fff', height: '30rem', width: '50rem', marginTop: '2rem', marginLeft: '34.1rem', display: 'flex', overflow: 'hidden'}} onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)}>
        <img className='wave-image' src={isHovered2 ? 'https://i.ibb.co/6rXNQHC/glitch-image-1710404200.png' : 'https://i.ibb.co/HGG61Gy/design-prototyping.jpg'} alt='card-image' style={{ width: '100%', height: 'auto', transformOrigin: 'bottom center', transform: 'scaleY(1.05) rotateX(-5deg)', maskRepeat: 'no-repeat', maskPosition: 'center'}}/>
        </Card>
        <p style={{fontSize: '2rem', marginTop: '5rem', marginLeft: '37rem', marginRight: '10rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
        <p style={{fontSize: '2rem', marginTop: '5rem', marginLeft: '2rem', marginRight: '50rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
        <Card className="wave-container" style={{background: '#fff', height: '30rem', width: '50rem', marginTop: '2rem', display: 'flex', overflow: 'hidden'}} onMouseEnter={() => setIsHovered3(true)} onMouseLeave={() => setIsHovered3(false)}>
        <img className='wave-image' src={isHovered3 ? 'https://i.ibb.co/Rhb1WkQ/glitch-image-1710404437.png' :'https://i.ibb.co/wJjDzdR/image.png' } alt='card-image' style={{ width: '100%', height: 'auto', transformOrigin: 'bottom center', transform: 'scaleY(1.05) rotateX(-5deg)', maskRepeat: 'no-repeat', maskPosition: 'center' }}/>
        </Card>
        <p style={{fontSize: '2rem', marginTop: '5rem', marginLeft: '2rem', marginRight: '40rem', display: 'flex', textAlign: 'flex-start', justifyContent: 'flex-start' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
        <p style={{fontSize: '2rem', marginTop: '5rem', marginLeft: '50rem', marginRight: '5rem', display: 'flex', textAlign: 'flex-start', justifyContent: 'flex-start' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
        <Card className="wave-container" style={{background: '#fff', height: '30rem', width: '50rem', marginTop: '2rem', marginLeft: '34.1rem', display: 'flex', overflow: 'hidden'}} onMouseEnter={() => setIsHovered4(true)} onMouseLeave={() => setIsHovered4(false)}>
        <img className='wave-image' src={isHovered4 ? 'https://i.ibb.co/bPtmVMk/glitch-image-1710404653.png' : 'https://i.ibb.co/whCK3Wj/development-testing.jpg'} alt='card-image' style={{ width: '100%', height: 'auto', transformOrigin: 'bottom center', transform: 'scaleY(1.05) rotateX(-5deg)', maskRepeat: 'no-repeat', maskPosition: 'center' }}/>
        </Card>
        <p style={{fontSize: '2rem', marginTop: '5rem', marginLeft: '37rem', marginRight: '10rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
        <p style={{fontSize: '2rem', marginTop: '5rem', marginLeft: '2rem', marginRight: '50rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
      </div>
      </Col>
      </Row>
  </Container>
    
  )
}

export default Process
