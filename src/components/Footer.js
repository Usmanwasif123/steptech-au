import React from 'react';
import '../assets/wrapper/Footer.css';
import {Facebook, Instagram, LinkedIn, Twitter} from '@mui/icons-material/';

const Footer = () => {
  return (
    <div className='footer-container'>
      <img src='https://i.ibb.co/fMtLC6F/footer.jpg' alt='footer-bg'/>
      <div className='footer-logo'><a href='https://steptech.com.au/'></a></div>
      <p>At Step Tech Global, your journey isn’t just a project; it’s our shared expedition towards excellence. 
        Join hands with us to redefine possibilities and conquer new horizons in the digital real.
      </p>
      <Facebook style={{position: 'absolute', zIndex: '3', top: '85%', left: '1.5%',
        color: '#fff', transform: 'scale(1.5)'}}/>
        <Instagram style={{position: 'absolute', zIndex: '3', top: '85%', left: '4.7%',
        color: '#fff', transform: 'scale(1.5)'}}/>
        < LinkedIn style={{position: 'absolute', zIndex: '3', top: '85%', left: '7.8%',
        color: '#fff', transform: 'scale(1.5)'}}/>
        <Twitter style={{position: 'absolute', zIndex: '3', top: '85%', left: '11%',
        color: '#fff', transform: 'scale(1.5)'}}/>
        <div className='quick-links'>
            <h1>QUICK LINKS</h1>
            <nav>
            <li><a href='https://steptech.com.au/'>home</a></li>
            <li><a className='about'>about us</a></li>
            <li><a className='portfolio'>portfolio</a></li>
            <li><a className='contact'>contact us</a></li>
            <li><a className='blog'>blog</a></li>
            </nav>
        </div>
        <div className='service-links'>
            <h1>Services</h1>
            <nav>
            <li><a href='https://steptech.com.au/'>home</a></li>
            <li><a className='about'>about us</a></li>
            <li><a className='portfolio'>portfolio</a></li>
            <li><a className='contact'>contact us</a></li>
            <li><a className='blog'>blog</a></li>
            </nav>
        </div>
        <div className='service-links2'>
            <h1>Services</h1>
            <nav>
            <li><a href='https://steptech.com.au/'>home</a></li>
            <li><a className='about'>about us</a></li>
            <li><a className='portfolio'>portfolio</a></li>
            <li><a className='contact'>contact us</a></li>
            <li><a className='blog'>blog</a></li>
            </nav>
        </div>
        <div className='contact-link'>
            <h1>Contact us</h1>
            <nav>
            <li><a href='https://steptech.com.au/'>home</a></li>
            <li><a className='about'>about us</a></li>
            <li><a className='portfolio'>portfolio</a></li>
            <li><a className='contact'>contact us</a></li>
            <li><a className='blog'>blog</a></li>
            </nav>
        </div>
    </div>
  )
}

export default Footer
