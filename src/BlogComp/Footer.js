import React from 'react';
import '../assets/BlogWrapper/Footer.css';
import {Facebook, Instagram, LinkedIn, Twitter, ArrowRight, ChevronRight} from '@mui/icons-material/';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='blogfooter-container'>
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
            <h1>quick links</h1>
            <nav>
            <ul className='quick-foolinks'>
            <li><ArrowRight style={{position: 'absolute', left: '-5%', top: '23%'}}/><Link to='/'>home</Link></li>
            <li><ArrowRight style={{position: 'absolute', left: '-5%',  top: '39%'}}/><a>about us</a></li>
            <li><ArrowRight style={{position: 'absolute', left: '-5%', top: '55%'}}/><Link to='/service'>service</Link></li>
            <li><ArrowRight style={{position: 'absolute', left: '-5%', top: '72%'}}/><Link to='/portfolio'>portfolio</Link></li>
            <li><ArrowRight style={{position: 'absolute', left: '-5%', top: '89%'}}/><a>blog</a></li>
            </ul>
            </nav>
        </div>
        <div className='service-links'>
            <h1>Services</h1>
            <nav className='service-foolinks'>
            <li><ChevronRight style={{position: 'absolute', left: '-8%', top: '18%'}}/><a>Graphics Designing</a></li>
            <li><ChevronRight style={{position: 'absolute', left: '-8%', top: '31%'}}/><Link to='/web-design-and-development'>Website Design & 
            Development</Link></li>
            <li><ChevronRight style={{position: 'absolute', left: '-8%', top: '44%'}}/><Link to='/app-development'>Mobile App UI/UX Design &<br/>
             Development</Link></li>
            <li><ChevronRight style={{position: 'absolute', left: '-8%', top: '65%'}}/><a>Software Development</a></li>
            <li><ChevronRight style={{position: 'absolute', left: '-8%', top: '78%'}}/><a>Search Engine Optimization</a></li>
            <li><ChevronRight style={{position: 'absolute', left: '-8%', top: '91%'}}/><a>Social Media Management</a></li>
            </nav>
        </div>
        <div className='service-links2'>
            <h1>Services</h1>
            <nav className='service-foolinks2'>
            <li><ChevronRight style={{position: 'absolute', left: '-8%', top: '18%'}}/><a>Digital Marketing</a></li>
            <li><ChevronRight style={{position: 'absolute', left: '-8%', top: '30%'}}/><a>E-Commerce</a></li>
            <li><ChevronRight style={{position: 'absolute', left: '-8%', top: '42%'}}/><Link to='/game-design-and-development'>Game Design & Development
            </Link>
            </li>
            <li><ChevronRight style={{position: 'absolute', left: '-8%', top: '54%'}}/><Link to='/2D/3D-Animation'>2D/3D Animation</Link>
            </li>
            <li><ChevronRight style={{position: 'absolute', left: '-8%', top: '67%'}}/><Link to='/block-chain-development'>Block Chain Development</Link>
            </li>
            <li><ChevronRight style={{position: 'absolute', left: '-8%', top: '79%'}}/><Link to='/nft'>NFT</Link>
            </li>
            <li><ChevronRight style={{position: 'absolute', left: '-8%', top: '92%'}}/><Link to='/artificial-intelligence-development'>Artificial Intelligence</Link>
            </li>
            </nav>
        </div>
        <div className='contact-link'>
            <h1>Contact us</h1>
            <nav className='contact-foolinks'>
            <li><img src='https://i.ibb.co/b3XwQZv/aus-flag.png'/><a href='#'>AUS: +61 410 025 346</a></li>
            <li><img src='https://i.ibb.co/Jd2ytp6/Untitled-design-1-1.png'/><a>USA: (877) 229 0844</a></li>
            <li><img src='https://i.ibb.co/F40skg4/uk-flag.png'/><a className='portfolio'>UK: +44 203 038 4780</a></li>
            <li><img src='https://i.ibb.co/Wn56L99/pk-flag.png'/><a className='contact'>PK: +92 304 298 9911</a></li>
            </nav>
        </div>
        <div className='copyright'>&nbsp;
        <h1 className='copyright-h1'>Copyright© [2024] Steptechglobal</h1>
        </div>
       
    </div>
  )
}

export default Footer
