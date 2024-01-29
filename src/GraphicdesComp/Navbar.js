import React, {useState} from 'react';
import '../assets/GraphicdesWrapper/Navbar.css';
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
    <div className='graph-nav-container'>
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
      <div className='graph-banner-line'></div>
      <div className='graph-heading'>
        <h1>Embrace The Beauty Of Creativity With Our Design Services<br/>
        <p>Want to enchant your user with visually appealing graphics and design? At Step Tech, the <b>best logo design company</b>, our 
          skillful <b>graphic designers</b> worldwide will make it happen for you. We understand the need for your design project and work based
          on Our client’s requirements. With our <b>best logo designers</b>, we can build the best design, <b>creative logo design, vector 
          illustration</b>, etc, for start-ups or well-established ventures to accomplish their goals. We assist you in organizing and 
          materializing your demands with compelling designs that leave a permanent impression on your customers. 
        </p>
        </h1>
      </div>
      <Link to='/read-more' className='graphbtn1-start' data-aos="flip-right" data-aos-duration="500" data-aos-easing="ease-in-sine" data-aos-offset="0">get started</Link>
      <div className='graph-nav-image' data-aos="slide-left" data-aos-duration="500" data-aos-easing="ease-in-sine" data-aos-offset="0"></div>
    </div>
   </>
  );
}

export default Navbar
