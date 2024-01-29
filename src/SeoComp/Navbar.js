import React, {useState} from 'react';
import '../assets/SeoWrapper/Navbar.css';
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
    <div className='seo-nav-container'>
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
        <h1>Make Your Website Spark With Our Best Quality SEO Service In Australia<br/>
        <p>At Step Tech <b>SEO agency</b>, we offer our clients the best <b>search engine optimization</b> services,
         allowing businesses to gain higher rankings, 100% organic traffic growth, and essential investment
         returns. We offer affordable <b>SEO marketing</b> packages in Australia and assist companies in achieving
         higher revenue. To drive traffic to your website, we blend on-page, off-page, Local SEO, and 
         technical SEO Techniques to provoke more leads for your business growth. This enables us to give our
         clients a great profit. 
         </p>
        </h1>
      </div>
      <Link to='/read-more' className='seobtn1-start' data-aos="flip-right" data-aos-duration="500" data-aos-easing="ease-in-sine" data-aos-offset="0">get started</Link>
      <div className='seo-nav-image' data-aos="slide-left" data-aos-duration="500" data-aos-easing="ease-in-sine" data-aos-offset="0"></div>
    </div>
   </>
  );
}

export default Navbar
