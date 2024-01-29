import React, {useState, useRef, useEffect} from 'react';
import '../assets/WebWrapper/Navbar.css';
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {KeyboardArrowDownOutlined, Clear } from '@mui/icons-material';


const Navbar = () => {

  const[setting, setSetting] = useState({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
      });

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


  const toggleSidebar = () => {
    console.log('Toggle Sidebar clicked');
    setSidebarOpen(!isSidebarOpen);
  };


  return (
    <>
    <div className='nav-container'>
         <div className='logo'><a href='https://steptech.com.au/'></a></div>
         <button className='bars' onClick={toggleSidebar}>
              {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        <nav>
        <ul className='nav-items'>
        <li><Link to='/'>home</Link></li>
        <li><Link to='/about-us' className='about'>about us</Link></li>
        <li className='dropdown' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
           <KeyboardArrowDownOutlined style={{position:'absolute', zIndex: 1, fontSize: '25px', top: '290%', left: '73.4px', color: "#fff"}}/>
            <Link to='/service' className='service'>services</Link>
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
        <Link to='/get-a-quote' className='quote-btn'>get a quote </Link>
        <button>
            <FaTimes/>
            </button>
        </ul>
        </nav>
      <img src='https://i.ibb.co/Y8F8xfL/Rectangle-1.png' alt='Banner'></img>
      <div className='banner-line'></div>
      <div className='web-banner-heading'>
        <h1>Unleash The Power Of Pixel With Our Web Development Services<br/>
        <p>Welcome to Step Tech Global, your expert partner in extensive web development services. 
          From initial ideation to a successful launch, our convenient approach ensures a seamless experience 
          through every stage of development.</p>
        </h1>
      </div>
      <div className='web-carousel'>
          <Slider {...setting}>
            <div>
              <img className='wordpress-image' src='https://i.ibb.co/q5f894K/image.png' alt='wordpress'/>
            </div> 
            <div>
            <img className='elementor-image' src='https://i.ibb.co/tbLmgRC/image.png' alt='elementor'/>
            </div>
            <div>
            <img className='angular-image' src='https://i.ibb.co/K202fyg/image.png' alt='angular'/>
            </div> 
            <div>
            <img className='vue-image' src='https://i.ibb.co/Jq88KxD/image.png' alt='wordpress'/>
              </div>
            <div>
            <img className='js-image' src='https://i.ibb.co/CwRb7yn/image.png' alt='wordpress'/>
            </div> 
            <div>
            <img className='js1-image' src='https://i.ibb.co/tBgLwP0/image.png' alt='wordpress'/>
            </div>
          </Slider>
      </div>
      <button className='webbtn-start' onClick={() => setIsVisible(true)}>get started</button>
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
      <div className='webnav-image' data-aos="slide-left" data-aos-duration="750" data-aos-easing="ease-in-sine" data-aos-offset="0"></div>
    </div>
   </>
  );
}

export default Navbar
