import React, {useState} from 'react';
import '../assets/DigitalMarWrapper/Navbar.css';
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log('Toggle Sidebar clicked');
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
    <div className='digi-nav-container'>
         <div className='logo'><a href='https://steptech.com.au/'></a></div>
         <button className='bars' onClick={toggleSidebar}>
              {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        <nav>
        <ul className='nav-items'>
            <li><a href='https://steptech.com.au/'>home</a></li>
            <li><a className='about'>about us</a></li>
            <li><a className='service'>services</a></li>
            <li><a className='portfolio'>portfolio</a></li>
            <li><a className='blog'>blog</a></li>
            <hr></hr>
            <Link to='/get-a-quote' className='quote-btn'>get a quote </Link>
            <button>
              <FaTimes/>
            </button>
        </ul>
        </nav>
      <img src='https://i.ibb.co/Y8F8xfL/Rectangle-1.png' alt='Banner'></img>
      <div className='seo-banner-line'></div>
      <div className='seo-heading'>
        <h1>Get Ready to Accelerate Business Success With Our Digital Marketing Services<br/>
        <p>We’re Australia’s well-known <b>Digital marketing agency</b>. We offer you an all-inclusive cohesive marketing 
          solution to enhance your business. Whether that’s leads or product sales, boost your brand share in the 
          marketplace. To thrive in the market, our strategy for <b>digital marketing</b> involves laying a strong foundation
           in advertising concepts and experimenting with quick campaign deployment and flexible content creation. So 
           be ready to revolutionize your digital journey with us!!
        </p>
        </h1>
      </div>
      <Link to='/read-more' className='digibtn1-start' data-aos="flip-right" data-aos-duration="500" data-aos-easing="ease-in-sine" data-aos-offset="0">get started</Link>
      <div className='digi-nav-image' data-aos="slide-left" data-aos-duration="500" data-aos-easing="ease-in-sine" data-aos-offset="0"></div>
    </div>
   </>
  );
}

export default Navbar
