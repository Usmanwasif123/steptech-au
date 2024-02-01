import React, {useState, useRef, useEffect} from 'react';
import '../assets/wrapper/Navbar.css';
import {Link, NavLink} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import {KeyboardArrowDownOutlined, Clear, ArrowRight }from '@mui/icons-material';

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [closeTimeout, setCloseTimeout] = useState(null);

  const handleMouseEnter = () => {
    console.log('Mouse enter');
    clearTimeout(closeTimeout); // Clear any existing timeout to close the dropdown
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    // Set a timeout to close the dropdown after a delay
    const timeoutId = setTimeout(() => {
      setDropdownOpen(false);
    }, 300); // You can adjust the delay time (in milliseconds) as needed
    setCloseTimeout(timeoutId);
  };

  const handleDropdownMouseEnter = () => {
    clearTimeout(closeTimeout); // Clear the timeout when entering the dropdown content
  };

  const handleDropdownMouseLeave = () => {
    // Set a timeout to close the dropdown after a delay
    const timeoutId = setTimeout(() => {
      setDropdownOpen(false);
    }, 300); // You can adjust the delay time (in milliseconds) as needed
    setCloseTimeout(timeoutId);
  };

  useEffect(() => {
    // Clear the timeout when the component is unmounted
    return () => {
      clearTimeout(closeTimeout);
    };
  }, [closeTimeout]);


  return (
    <div className='nav-container'>
         <div className='logo'><a href='https://steptech.com.au/'></a></div>
         <button className='bars'>
              {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        <nav>
        <ul className='nav-items'>
            <li><NavLink to='/' className='home'>home</NavLink></li>
            <li><Link to='/about-us' className='about'>about us</Link></li>
            <li className='dropdown' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
           <KeyboardArrowDownOutlined style={{position:'absolute', zIndex: 1, fontSize: '25px', marginTop: '46px', paddingLeft: '76px', color: "#fff"}}/>
            <li><Link to='/service'  className='service' style={{paddingTop: '55px'}}>services</Link></li>
            {isDropdownOpen && 
            <div className='dropdown-content' ref={dropdownRef} onMouseEnter={handleDropdownMouseEnter} onMouseLeave={handleDropdownMouseLeave}>
             <li><Link to='/web-design-and-development' className='nav-service1'>web design & development</Link></li>
             <li><Link to='/app-development' className='nav-service2'>Mobile UI/UX Design & development</Link></li>
             <li><Link to='/game-design-and-development' className='nav-service3'>game design and development</Link></li>
             <li><Link to='/2D/3D-Animation' className='nav-service4'>2d/3d animation</Link></li>
             <li><Link to='/graphic-designing' className='nav-service5'>graphic designing</Link></li>
             <li><Link to='/block-chain-development' className='nav-service6'>block chain development</Link></li>
             <li><Link to='/nft' className='nav-service7'>nft</Link></li>
             <li><Link to='/artificial-intelligence-development' className='nav-service8'>artificial intelligence</Link></li>
             <li><Link to='/software-development' className='nav-service9'>software development</Link></li>
             <li><Link to='/search-engine-optimization' className='nav-service10'>search engine optimization</Link></li>
             <li><Link to='/social-media-management' className='nav-service11'>social media marketing</Link></li>
             <li><Link to='/digital-marketing' className='nav-service12'>digital marketing</Link></li>
             <li><Link to='/ecommerce' className='nav-service13'>e-commerce</Link></li>
            </div>
          }
          </li>
            <li><Link to='/portfolio' className='portfolio'>portfolio</Link></li>
            <li><Link to='/blog' className='blog'>blog</Link></li>
            <button><a href='tel:+61410025346' class='call-btn'>+61 410 025 346</a></button>
            <button>
              <FaTimes/>
            </button>
        </ul>
        </nav>
      <img src='https://i.ibb.co/Y8F8xfL/Rectangle-1.png' alt='Banner'></img>
      <div className='banner-line'></div>
      <div className='banner-span'>
        <span>Welcome to step tech</span>
      </div>
      <div className='banner-heading'>
        <h1>OPTIMIZE YOUR<br/>
        <div className='banner-half-h'>
            <h1 className='digital'>DIGITAL</h1>
        </div>
        <h1 className='potential'>POTENTIAL</h1>
        </h1>
      </div>
      <div id='line1'></div>
      <div id='line2'></div>
      <div id='line3'></div>
      <button className='btn-start' onClick={() => setIsVisible(true)}>get started</button>
      {isVisible && 
        <div className='visible-div'>
          <img style={{height: '300px', width: '500px'}} src='https://i.ibb.co/h8xCwvR/image.png' alt='visible-image' />
          <p className='visible-p1'>We are Friendly & Experienced Development Company</p>
          <p className='visible-p2'>We are here to help!</p>
          <p className='visible-p3'>Take your business higher than ever of accomplishment with our unrivaled administrations.
          <br/>Reach out at this point!</p>
          <form className='visible-contact-form' >
            <input className='full-name' type='text' name='Full Name' placeholder='Full Name' />
            <input className='email' type='email' name='Email' placeholder='Email' />
            <input className='phone-no' type='tel' name='phone no' placeholder='Phone no' />
            <textarea className='message-input' name='Message' placeholder='Enter a brief' />
            <button className='submit-btn' type='submit'>submit request</button>
            <button className='btn-close' onClick={() => setIsVisible(false)}>
            <Clear style={{fontSize: '40px'}}/>
            </button>
          </form>
        </div>
      }

    </div>
  );
}

export default Navbar
