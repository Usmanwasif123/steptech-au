import React, {useState} from 'react';
import '../assets/WebWrapper/Navbar.css';
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        <li><Link to='/service' className='service'>services</Link></li>
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
              <img src='' alt='wordpress'/>
            </div> 
            <div>
            <img src='' alt='elementor'/>
            </div>
            <div>
            <img src='' alt='angular'/>
            </div> 
            <div>
            <img src='' alt='wordpress'/>
              </div>
            <div>
            <img src='' alt='wordpress'/>
            </div> 
            <div>
            <img src='' alt='wordpress'/>
            </div>
            <div>
            <img src='' alt='wordpress'/>
            </div>
            <div>
            <img src='' alt='wordpress'/>
            </div> 
            <div>
            <img src='' alt='wordpress'/>
            </div>  
            <div>
            <img src='' alt='wordpress'/>
            </div> 
            <div>
            <img src='' alt='wordpress'/>
            </div> 
            <div>
            <img src='' alt='wordpress'/>
            </div> 
            <div>
            <img src='' alt='wordpress'/>
            </div> 
            <div>
            <img src='https://i.ibb.co/ZTmxgrT/image.png' alt='wordpress'/>
            </div> 
          </Slider>
      </div>
      <Link to='/read-more' className='webbtn-start'>get started</Link>
      <div className='webnav-image' data-aos="slide-left" data-aos-duration="750" data-aos-easing="ease-in-sine" data-aos-offset="0"></div>
    </div>
   </>
  );
}

export default Navbar
