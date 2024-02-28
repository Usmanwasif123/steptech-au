import React from 'react';
import '../assets/wrapper/Footer.css';
import {Facebook, Instagram, LinkedIn, Twitter} from '@mui/icons-material/';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer-container'>
      <img  className='footer-image' src='https://i.ibb.co/fMtLC6F/footer.jpg' alt='footer-bg'/>
      <div className='footer-logo'><a href='https://steptech.com.au/'></a></div>
      <p className='footer-para'>At Step Tech Global, your journey isn’t just a project; it’s our shared expedition towards excellence. 
        Join hands with us to redefine possibilities and conquer new horizons in the digital real.
      </p>
      <Facebook style={{position: 'absolute', zIndex: '3', top: '75%', left: '1.5%',
        color: '#fff', transform: 'scale(1.5)'}}/>
        <Instagram style={{position: 'absolute', zIndex: '3', top: '75%', left: '4.7%',
        color: '#fff', transform: 'scale(1.5)'}}/>
        < LinkedIn style={{position: 'absolute', zIndex: '3', top: '75%', left: '7.8%',
        color: '#fff', transform: 'scale(1.5)'}}/>
        <Twitter style={{position: 'absolute', zIndex: '3', top: '75%', left: '11%',
        color: '#fff', transform: 'scale(1.5)'}}/>
        <div className='quick-links'>
            <h1>quick links</h1>
            <nav>
            <ul className='quick-foolinks'>
            <li><Link to='/' style={{textDecoration: 'none', color: '#fff'}}>home</Link></li>
            <li><Link to='/about-us' style={{textDecoration: 'none', color: '#fff'}}>about us</Link></li>
            <li><Link to='/service' style={{textDecoration: 'none', color: '#fff'}}>services</Link></li>
            <li><Link to='/portfolio' style={{textDecoration: 'none', color: '#fff'}}>portfolio</Link></li>
            <li><Link to='/blog' style={{textDecoration: 'none', color: '#fff'}}>blog</Link></li>
            </ul>
            </nav>
        </div>
        <div className='service-links'>
            <h1>Services</h1>
            <nav className='service-foolinks'>
            <li><Link to='/graphic-designing' style={{textDecoration: 'none', color: '#fff'}}>Graphics Designing</Link></li>
            <li><Link to='/web-design-and-development' style={{textDecoration: 'none', color: '#fff'}}>Website Design & 
            Development</Link></li>
            <li><Link to='/app-development' style={{textDecoration: 'none', color: '#fff'}}>Mobile App UI/UX Design &<br/>
             Development</Link></li>
            <li><Link to='/software-development' style={{textDecoration: 'none', color: '#fff'}}>Software Development</Link></li>
            <li><Link to='/search-engine-optimization' style={{textDecoration: 'none', color: '#fff'}}>Search Engine Optimization</Link></li>
            <li><Link to='/social-media-management'style={{textDecoration: 'none', color: '#fff'}}>Social Media Management</Link></li>
            </nav>
        </div>
        <div className='service-links2'>
            <h1>Services</h1>
            <nav className='service-foolinks2'>
            <li><Link to='/digital-marketing' style={{textDecoration: 'none', color: '#fff'}}>Digital Marketing</Link></li>
            <li><Link to='/ecommerce' style={{textDecoration: 'none', color: '#fff'}}>E-commerce</Link></li>
            <li><Link to='/game-design-and-development' style={{textDecoration: 'none', color: '#fff'}}>Game Design & Development
            </Link>
            </li>
            <li><Link to='/2D/3D-Animation' style={{textDecoration: 'none', color: '#fff'}}>2D/3D Animation</Link>
            </li>
            <li><Link to='/block-chain-development' style={{textDecoration: 'none', color: '#fff'}}>Block Chain Development</Link>
            </li>
            <li><Link to='/nft' style={{textDecoration: 'none', color: '#fff'}}>NFT</Link>
            </li>
            <li><Link to='/artificial-intelligence-development' style={{textDecoration: 'none', color: '#fff'}}>Artificial Intelligence</Link>
            </li>
            </nav>
        </div>
        <div className='contact-link'>
            <h1>Contact Info</h1>
            <nav className='contact-foolinks'>
            <li><img src='https://i.ibb.co/b3XwQZv/aus-flag.png'/><a href='tel:+61410025346'>AUS: +61 410 025 346</a></li>
            <li><img src='https://i.ibb.co/Jd2ytp6/Untitled-design-1-1.png'/><a href='tel:+8772290844'>USA: (877) 229 0844</a></li>
            <li><img src='https://i.ibb.co/F40skg4/uk-flag.png'/><a href='tel:+442030384780'>UK: +44 203 038 4780</a></li>
            <li><img src='https://i.ibb.co/Wn56L99/pk-flag.png'/><a href='tel:+923042989911'>PK: +92 304 298 9911</a></li>
            </nav>
        </div>
        <div className='banner-line'></div>
        <h1 className='copyright-h1'>Copyright © 2024 Steptech Australia</h1>      
    </div>
  )
}

export default Footer
