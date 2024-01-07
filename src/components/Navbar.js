import React, {useState} from 'react';
import '../assets/wrapper/Navbar.css';
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
    <div className='nav-container'>
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
            <li><a className='contact'>contact us</a></li>
            <li><a className='blog'>blog</a></li>
            <hr></hr>
            <Link to='/get-a-quote' className='quote-btn'>get a quote </Link>
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
      <Link to='/read-more' className='btn-read'>read more</Link>
    </div>
   </>
  );
}

export default Navbar
