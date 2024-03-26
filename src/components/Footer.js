import React from 'react';
import '../assets/wrapper/Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import {Facebook, Instagram, LinkedIn, Twitter} from '@mui/icons-material/';

const Footer = () => {
  return (
    <Container fluid className="footeres-container">
    <Row className="justify-content-center align-items-center">
      <Col xs={12} md={6}>
      <div className="footer-content">
      <img className="footer-logo" src='https://i.ibb.co/j8S1jw9/image.png' alt='footer-logo'/>
        <p className="footer-text text-white">At Step Tech Australia, your journey isn't just a project; it's our shared expedition towards excellence. 
          Join hands with us to redefine possibilities and conquer new horizons in the digital real.</p>
          <div className="social-icons">
        <Facebook className="social-icon" id='fb-i'/>
        <Instagram className="social-icon" id='ig-i'/>
        < LinkedIn className="social-icon" id='li-i' />
        <Twitter className="social-icon" id='tw-i' />
        </div>
      </div>
      </Col>
      <Col xs={12} md={6}>
      <div className="footer-links text-white" >
      <h1 className="footer-heading" id='footer-heading'>Pages</h1>
            <ul className="footer-list" id='footer-list'>
              <li><a href='/about-us' className='footer-list-item'>About Us</a></li>
              <li><a href='/service'  className='footer-list-item'>Services</a></li>
              <li><a href='/portfolio'  className='footer-list-item'>Portfolio</a></li>
              <li><a href='/blog'  className='footer-list-item'>Blog</a></li>
            </ul>
            <h1 className="footer-heading2" id='footer-heading2'>Useful Links</h1>
            <ul className="footer-list2" id='footer-list2'>
              <li><a href='/faq'  className='footer-list-item'>FAQs</a></li>
              <li><a href='/privacy-policy'  className='footer-list-item'>Privacy & Policy</a></li>
            </ul>
        <h1 className="footer-heading3" id='footer-heading3'>Services</h1>
            <ul className="footer-list3" id='footer-list3'>
              <li><a href='/graphic-designing'  className='footer-list-item'>Web Design & Development</a></li>
              <li><a href='/web-design-and-development'  className='footer-list-item' id='footer-mobile-item'>MobileApp UI UX Design & Development</a></li>
              <li><a href='/graphic-designing'  className='footer-list-item'>2D/3D Animation</a></li>
              <li><a href='/web-design-and-development'  className='footer-list-item'>BlockChain Development</a></li>
              <li><a href='/graphic-designing'  className='footer-list-item'>NFT</a></li>
              <li><a href='/web-design-and-development'  className='footer-list-item'>ArtificialIntelligence Development</a></li>
              </ul>
              <h1 className="footer-heading4" id='footer-heading4'>Services</h1>
            <ul className="footer-list4" id='footer-list4'>
              <li><a href='/graphic-designing'  className='footer-list-item'>Software Development</a></li>
              <li><a href='/web-design-and-development'  className='footer-list-item'>Ecommerce</a></li>
              <li><a href='/web-design-and-development'  className='footer-list-item'>Graphic Design</a></li>
              <li><a href='/web-design-and-development'  className='footer-list-item'>Search Engine Optimization</a></li>
              <li><a href='/web-design-and-development'  className='footer-list-item'>Social Media Management</a></li>
              <li><a href='/web-design-and-development'  className='footer-list-item'>Digital Marketing</a></li>
              </ul>
              <h1 className="footer-heading5" id='footer-heading5'>Connect with Us</h1>
            <ul className="footer-list5" id='footer-list5'>
              <li>
                <img 
                className="footer-flag" src='https://i.ibb.co/b3XwQZv/aus-flag.png' alt="AUS Flag" />
                <a className='footer-flag-phone'style={{textDecoration: 'none', color: '#fff'}} href='tel:+61410025346'>AUS: +61 410 025 346</a>
              </li>
          <li>
        <img className="footer-flag" src='https://i.ibb.co/Jd2ytp6/Untitled-design-1-1.png'/>
        <a className='footer-flag-phone' style={{textDecoration: 'none', color: '#fff'}}  href='tel:+8772290844'>USA: (877) 229 0844</a>
        </li>
        <li>
        <img className="footer-flag" src='https://i.ibb.co/F40skg4/uk-flag.png'/>
        <a className='footer-flag-phone' style={{textDecoration: 'none', color: '#fff'}} href='tel:+442030384780'>UK: +44 203 038 4780</a>
        </li>
        <li>
        <img className="footer-flag" src='https://i.ibb.co/Wn56L99/pk-flag.png'/>
        <a className='footer-flag-phone' style={{}}  href='tel:+923042989911'>PK: +92 304 298 9911</a>
        </li>
        </ul>
        <div className="footer-copy">
              <h1>© [2024] Steptechglobal</h1>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer
