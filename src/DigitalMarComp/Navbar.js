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
        <h1>Get The Top-Quality And Robust Ecommmerce Development Services<br/>
        <p>Be ready to improve your digital presence and skyrocket your revenue with Ecommmerce Web Development 
          services. Step Tech Global is a leading Ecommmerce Website Development company, offering the best 
          all-inclusive and memorable Custom Ecommmerce Development services to indulge your business needs 
          and ambitions. As a well-known service provider, Ecommmerce Development services guarantee high-grade
          and competent website performance, offering an excellent user experience for all of our clients.
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
