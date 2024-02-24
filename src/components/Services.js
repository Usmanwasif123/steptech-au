import React from 'react';
import '../assets/wrapper/services.css';
import {PhoneInTalk, HeadsetMic, MenuBook} from '@mui/icons-material';
import Card from 'react-bootstrap/Card';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';


const Services = () => {
      
  return (
    <Container className='service-container'>
      <Row>
      <Col col={12} md={8} lg={6}>
      <img src='https://i.ibb.co/g95xXs4/Group-4.png' alt='layer' />
      <h2 className='service-heading1'><b>Services</b></h2>
      <h1 className='service-heading2'>What We Offer</h1>
      <p className='service-p'>Step Tech, a well-known website development company has battle-tested developers who 
      specialize in an extensive variety of digital services. These are some of our following services.</p>
      <button><Link to='/service' className='service-button'>What we do
      <ArrowRightAltIcon style={{ color: '#fff', fontSize: '25px', marginLeft: '2px'}}/>
      </Link>
      </button>
      </Col>
      </Row>
      <Row>
      <Col md={4} lg={2} sm={1}>
      <Card className='card' style={{position: 'absolute', zIndex: '1', border: '#fff', borderRadius: '0.625rem', 
      padding: '6.25rem 0.313rem', width: '16rem',height: '100px', marginLeft: '-40rem',marginTop: '-200px',  boxShadow: '0px 10px 20px 0px rgba(0, 0, 0, 0.3)',
      }}>
      <Card.Img className='card-image' src="https://imgtr.ee/images/2024/02/22/51f9bd30ac6189817252d8b810499577.png" alt="Card image" />
      <Card.Text className='card-heading'>
         Website Development
        </Card.Text>
      <Card.Text className='card-para'>
          We can create a web application that's easy to navigate and use.
        </Card.Text>
        <Link to='/web-design-and-development' style={{textDecoration: 'none'}}><ArrowRightAltIcon className='card-arrow'/></Link>
      </Card>
      </Col>
      <Col  md={4} lg={2} sm={1}>
      <Card className='card' style={{position: 'absolute', zIndex: '1', border: '#fff', borderRadius: '0.625rem', 
      padding: '6.25rem 0.313rem', width: '16rem', height: '100px', marginLeft: '-22rem',marginTop: '-200px',  boxShadow: '0px 10px 20px 0px rgba(0, 0, 0, 0.3)',
      }}>
      <Card.Img className='card-image' src="https://imgtr.ee/images/2024/02/22/142144d86688e9539e5f9abd616b9682.png" alt="Card image" />
      <Card.Text className='card-heading'>
        Application Development
        </Card.Text>
      <Card.Text className='card-para'>
      For all of your needs about the creation of mobile apps.
        </Card.Text>
        <Link to='/app-development' style={{textDecoration: 'none'}}><ArrowRightAltIcon className='card-arrow'/></Link>
      </Card>
      </Col>
      <Col  md={4} lg={2} sm={1}>
      <Card className='card' style={{position: 'absolute', zIndex: '1', border: '#fff', borderRadius: '0.625rem', 
      padding: '6.25rem 0.313rem', width: '16rem',height: '100px', marginLeft: '-40rem',marginTop: '150px',  
      boxShadow: '0px 10px 20px 0px rgba(0, 0, 0, 0.3)',
      }}>
      <Card.Img className='card-image' src="https://imgtr.ee/images/2024/02/20/113eed58ae34d798cb01c892a15bf730.png" alt="Card image" />
      <Card.Text className='card-heading'>
       Game Development 
        </Card.Text>
      <Card.Text className='card-para'>
      We offer comprehensive services for developing games.
        </Card.Text>
        <Link to='/game-design-and-development' style={{textDecoration: 'none'}}><ArrowRightAltIcon className='card-arrow'/></Link>
      </Card>
      </Col>
      <Col  md={4} lg={2} sm={1}>
      <Card className='card' style={{position: 'absolute', zIndex: '1', border: '#fff', borderRadius: '0.625rem', 
      padding: '6.25rem 0.313rem', width: '16rem',height: '100px', marginLeft: '-22rem',marginTop: '150px',  boxShadow: '0px 10px 20px 0px rgba(0, 0, 0, 0.3)',
      }}>
      <Card.Img  className='card-image' src="https://imgtr.ee/images/2024/02/20/0079b8737e5cb10ebafe8077f5ba934c.png" alt="Card image" />
      <Card.Text className='card-heading'>
       Software Development
        </Card.Text>
      <Card.Text className='card-para'>
          Some quick example text to build on the card title
        </Card.Text>
        <Link to='/software-development' style={{textDecoration: 'none'}}><ArrowRightAltIcon className='card-arrow'/></Link>
      </Card>
      </Col>
      </Row>
      <Row>
      <Col col={12} md={6}>
      <div className='service-box'>
      &nbsp;
      <PhoneInTalk className='service-phone'/>
      <p><a className='service-phone-p'  href='tel:+61410025346'>Have Questions Call Us Now!<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      +61 410 025346</a></p>
      <HeadsetMic style={{position: 'absolute', color: '#fff', transform: 'scale(2.5)', left: '48%', top: '20%'}} classsName='service-headset'/>
      <p className='service-headset-p'>Live Chat With Expert<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It's Free 24/7</p>
      <MenuBook style={{position: 'absolute', color: '#fff', transform: 'scale(2.5)', left: '80%', top: '20%'}} classsName='service-book'/>
      <p className='service-book-p'>Estimate Your Project's Cost<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Talk to Consultant</p>
      </div>
      </Col>
      </Row>
    </Container>
  )
}

export default Services
