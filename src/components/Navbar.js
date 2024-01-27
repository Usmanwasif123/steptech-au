import React, {useState} from 'react';
import '../assets/wrapper/Navbar.css';
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const toggleSidebar = () => {
    console.log('Toggle Sidebar clicked');
    setSidebarOpen(!isSidebarOpen);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownClose = () => {
    setDropdownOpen(false);
  };

  return (
    <div className='nav-container'>
         <div className='logo'><a href='https://steptech.com.au/'></a></div>
         <button className='bars' onClick={toggleSidebar}>
              {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        <nav>
        <ul className='nav-items'>
            <li><Link to='/'>home</Link></li>
            <li><Link to='about-us' className='about'>about us</Link></li>
            <li className='dropdown'
                  onMouseEnter={handleDropdownToggle}
             onMouseLeave={handleDropdownClose}>
           <KeyboardArrowDownOutlinedIcon style={{position:'absolute', zIndex: 1, fontSize: '25px', top: '260%', left: '73.4px', color: "#fff"}}/>
            <Link to='service' className='serv'>services</Link>
            {isDropdownOpen && (
            <div className='dropdown-content'>
              <Link to='/service/service1'>Service 1</Link>
              <Link to='/service/service2'>Service 2</Link>
              <Link to='/service/service3'>Service 3</Link>
            </div>
          )}
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
      <button to='/read-more' onClick={toggleVisibility} className='btn-read'>get started</button>
      {isVisible && (
        <div className='visibile-div'>
          <img style={{height: '260px', width: '460px'}} src='https://i.ibb.co/h8xCwvR/image.png' alt='visible-image' />
          <p>We are Friendly & Experienced Development Company</p>
        </div>
      )}
    </div>
  );
}

export default Navbar
