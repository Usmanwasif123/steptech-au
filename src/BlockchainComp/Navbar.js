import React, {useState} from 'react';
import '../assets/BlockchainWrapper/Navbar.css';
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
    <div className='animate-nav-container'>
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
      <div className='animatie-banner-line'></div>
      <div className='animate-heading'>
        <h1>Ride The Swing Of Innovation With Our Blockchain Development<br/>
        <p>Step Tech Global is an Industry-Leading blockchain mobile app development company Discover reliable, 
        Secure, Scalable, and cooperative Blockchain Solutions services for Blockchain App Development with our
        solutions based on blockchain technologies that we provide.</p>
        </h1>
      </div>
      <Link to='/read-more' className='animatebtn1-start' data-aos="flip-right" data-aos-duration="500" data-aos-easing="ease-in-sine" data-aos-offset="0">get started</Link>
      <div className='block-nav-image' data-aos="slide-left" data-aos-duration="500" data-aos-easing="ease-in-sine" data-aos-offset="0"></div>
    </div>
   </>
  );
}

export default Navbar
