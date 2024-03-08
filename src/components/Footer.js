import React from 'react';
import '../assets/wrapper/Footer.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {Facebook, Instagram, LinkedIn, Twitter} from '@mui/icons-material/';

const Footer = () => {
  return (
   <Container style={{height: '70vh', width: '98.7vw', position: 'relative', background: 'linear-gradient(256.4deg, #6347AA 7.85%, #233F81 107.97%)', scrollBehavior: 'smooth'}}>
    <Row>
      <Col>
      <div style={{marginTop: '1.99rem', position: 'absolute', width: '20rem', }}>
      <img  style={{height: '10rem', width: 'auto', backgroundSize: 'cover',  marginTop: '0rem', marginLeft: '2rem', position: 'absolute', display: 'flex', textAlign: 'center', justifyContent: 'center'}} 
        src='https://i.ibb.co/j8S1jw9/image.png' alt='footer-logo'/>
        <p style={{fontSize: '1.2rem', color: '#fff', paddingTop: '10.2rem', marginLeft: '1rem', marginRight: '-2rem', paddingRight: '1rem' }}>At Step Tech Australia, your journey isn't just a project; it's our shared expedition towards excellence. 
          Join hands with us to redefine possibilities and conquer new horizons in the digital real.</p>
        <Facebook style={{position: 'absolute', zIndex: '3', top: '120%', left: '71rem',
        color: '#fff', transform: 'scale(1.3)'}}/>
        <Instagram style={{position: 'absolute', zIndex: '3', top: '120%', left: '74rem',
        color: '#fff', transform: 'scale(1.3)'}}/>
        < LinkedIn style={{position: 'absolute', zIndex: '3', top: '120%', left: '77rem',
        color: '#fff', transform: 'scale(1.3)'}}/>
        <Twitter style={{position: 'absolute', zIndex: '3', top: '120%', left: '80rem',
        color: '#fff', transform: 'scale(1.3)'}}/>
      </div>
      </Col>
      <Col>
      <div style={{marginTop: '1.5rem', position: 'absolute', marginLeft: '21rem'}}>
        <Row>
          <Col style={{width: '6rem', marginLeft: '0.5rem', height: 'auto' }}>
        <h1 style={{fontSize:'1.4rem', textTransform: 'capitalize', marginTop: '0.5rem', color: '#fff'}}>pages</h1>
        <ul style={{fontSize: '1.2rem', textDecoration: 'none', listStyleType: 'none'}}>
        <li  style={{marginTop: '1rem', marginBottom: '1rem',textTransform: 'capitalize' }}><a style={{textDecoration: 'none', color: '#fff'}} href='/about-us'>about us</a></li>
        <li  style={{marginTop: '1rem', marginBottom: '1rem', textTransform: 'capitalize'}}><a style={{textDecoration: 'none', color: '#fff'}}  href='/service'>services </a></li>
        <li  style={{marginTop: '1rem', marginBottom: '1rem', textTransform: 'capitalize'}}><a style={{textDecoration: 'none', color: '#fff'}}  href='portfolio'>portfolio</a></li>
        <li  style={{marginTop: '1rem', marginBottom: '1rem', textTransform: 'capitalize'}}><a style={{textDecoration: 'none', color: '#fff'}}  href='/blog'>blog</a></li>
        </ul>
        </Col>
        </Row>
        <Row>
          <Col style={{width: '10rem', marginLeft: '7rem', height: 'auto'}}>
        <h1 style={{fontSize:'1.5rem', marginLeft: '0rem', marginTop: '-12rem', textTransform: 'capitalize', color: '#fff'}}>useful links</h1>
        <ul style={{fontSize: '1.2rem', textDecoration: 'none', listStyleType: 'none', marginTop: '1rem', marginLeft: '0rem'}}>
        <li  style={{marginTop: '1rem', marginBottom: '1rem', textTransform: 'capitalize'}}><a style={{textDecoration: 'none', color: '#fff'}} href='/about-us'>FAQs</a></li>
        <li  style={{marginTop: '1rem', marginBottom: '1rem',  textTransform: 'capitalize'}}><a style={{textDecoration: 'none', color: '#fff'}}  href='/service'>privacy & policy</a></li>
        </ul>
        </Col>
        </Row>
        <Row>
          <Col style={{width: '15rem', marginLeft: '17.7rem', marginTop: '-7.5rem', height: 'auto'}}>
        <h1 style={{fontSize:'1.5rem', marginLeft: '0rem', textTransform: 'capitalize', color: '#fff'}}>services</h1>
        <ul style={{fontSize: '1.2rem', textDecoration: 'none', listStyleType: 'none', marginLeft: '0rem'}}>
        <li  style={{marginTop: '1rem', marginBottom: '1rem', textTransform: 'capitalize'}}><a style={{textDecoration: 'none', color: '#fff'}} href='/graphic-designing'>graphics designing</a></li>
        <li  style={{marginTop: '1rem', marginBottom: '1rem',  textTransform: 'capitalize'}}><a style={{textDecoration: 'none', color: '#fff'}}  href='/web-design-and-development'>website design & development</a></li>
        <li  style={{marginTop: '1rem', marginBottom: '1rem', textTransform: 'capitalize'}}><a style={{textDecoration: 'none', color: '#fff'}} href='/app-development'>mobile design & development</a></li>
        <li  style={{marginTop: '1rem', marginBottom: '1rem',  textTransform: 'capitalize'}}><a style={{textDecoration: 'none', color: '#fff'}}  href='/software-development'>software development</a></li>
        <li  style={{marginTop: '1rem', marginBottom: '1rem',  textTransform: 'capitalize'}}><a style={{textDecoration: 'none', color: '#fff'}}  href='/search-engine-optimization'>search engine optimization</a></li>
        <li  style={{marginTop: '1rem', marginBottom: '1rem',  textTransform: 'capitalize'}}><a style={{textDecoration: 'none', color: '#fff'}}  href='/social-media-management'>social media management</a></li>
        </ul>
        </Col>
        <Row>
          <Col style={{background: '', width: '15rem', marginLeft: '33rem', height: 'auto', marginTop: '-19.8rem'}}>
        <h1 style={{fontSize:'1.5rem', marginLeft: '0rem', textTransform: 'capitalize', color: '#fff'}}>services</h1>
        <ul style={{fontSize: '1.2rem', textDecoration: 'none', listStyleType: 'none', marginLeft: '0rem'}}>
        <li  style={{marginTop: '1rem', marginBottom: '1rem', textTransform: 'capitalize'}}><a style={{textDecoration: 'none', color: '#fff'}} href='/digital-marketing'>digital marketing</a></li>
        <li  style={{marginTop: '1rem', marginBottom: '1rem',  textTransform: 'capitalize'}}><a style={{textDecoration: 'none', color: '#fff'}}  href='/ecommerce'>e-commmerce</a></li>
        <li  style={{marginTop: '1rem', marginBottom: '1rem', textTransform: 'capitalize', }}><a style={{textDecoration: 'none', color: '#fff'}} href='/game-design-and-development'>game design & development</a></li>
        <li  style={{marginTop: '1rem', marginBottom: '1rem',  textTransform: 'capitalize'}}><a style={{textDecoration: 'none', color: '#fff'}}  href='/2D/3D-Animation'>2D/3D animation</a></li>
        <li  style={{marginTop: '1rem', marginBottom: '1rem',  textTransform: 'capitalize'}}><a style={{textDecoration: 'none', color: '#fff'}}  href='/block-chain-development'>blockchain development</a></li>
        <li  style={{marginTop: '1rem', marginBottom: '1rem',  textTransform: 'capitalize'}}><a style={{textDecoration: 'none', color: '#fff'}}  href='/nft'>nft</a></li>
        <li  style={{marginTop: '1rem', marginBottom: '1rem',  textTransform: 'capitalize'}}><a style={{textDecoration: 'none', color: '#fff'}}  href='/artificial-intelligence-development'>artificial intelligence</a></li>
        </ul>
        </Col>
        </Row>
        <Row>
          <Col style={{width: '15rem', marginLeft: '48rem', height: 'auto', marginTop: '-20.75rem'}}>
        <h1 style={{fontSize:'1.5rem', marginLeft: '0rem', textTransform: 'capitalize', color: '#fff'}}>Connect with us</h1>
        <ul style={{fontSize: '1.2rem', textDecoration: 'none', listStyleType: 'none', marginLeft: '0rem'}}>
        <li style={{marginTop: '1rem', marginBottom: '1rem', textTransform: 'capitalize', fontSize: '1.1rem'}}>
        <img style={{height: '1rem', width: '1.5rem', paddingRight: '0.5rem'}} src='https://i.ibb.co/b3XwQZv/aus-flag.png'/>
        <a  style={{textDecoration: 'none', color: '#fff'}} href='tel:+61410025346'>AUS: +61 410 025 346</a>
        </li>
        <li  style={{marginTop: '1rem', marginBottom: '1rem',  textTransform: 'capitalize', fontSize: '1.1rem'}}>
        <img style={{height: '1rem', width: '1.5rem', paddingRight: '0.5rem'}}src='https://i.ibb.co/Jd2ytp6/Untitled-design-1-1.png'/>
        <a style={{textDecoration: 'none', color: '#fff'}}  href='tel:+8772290844'>USA: (877) 229 0844</a>
        </li>
        <li  style={{marginTop: '1rem', marginBottom: '1rem', textTransform: 'capitalize', fontSize: '1.1rem' }}>
        <img style={{height: '1rem', width: '1.5rem', paddingRight: '0.5rem'}} src='https://i.ibb.co/F40skg4/uk-flag.png'/>
        <a style={{textDecoration: 'none', color: '#fff'}} href='tel:+442030384780'>UK: +44 203 038 4780</a>
        </li>
        <li  style={{marginTop: '1rem', marginBottom: '1rem',  textTransform: 'capitalize', fontSize: '1.1rem'}}>
        <img style={{height: '1rem', width: '1.5rem', paddingRight: '0.5rem'}} src='https://i.ibb.co/Wn56L99/pk-flag.png'/>
        <a style={{textDecoration: 'none', color: '#fff'}}  href='tel:+923042989911'>PK: +92 304 298 9911</a>
        </li>
        </ul>
        </Col>
        </Row>
        <Row>
          <Col style={{marginTop: '10.95rem',marginLeft: '-20.99rem',}}>
          <div>
            <h1 style={{fontSize: '1.3rem', color: '#fff', marginLeft: '1rem'}}>© [2024] Steptechglobal</h1>
          </div>
          </Col>
        </Row>
        </Row>
      </div>
      </Col>
    </Row>
   </Container>
  );
}

export default Footer
