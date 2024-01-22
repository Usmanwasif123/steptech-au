import React from 'react';
import '../assets/WebWrapper/Magneto.css';
import {Link} from 'react-router-dom';

const Magneto = () => {
  return (
    <div className='web-section4'>
      <h1 className='magneto-right-h'>
      Trusted Best Magento Development Company
      </h1>
      <p className='magneto-right-p'>
      Website development forms the backbone of any online venture. With a focus on uniqueness and functionality, we 
      specialize in crafting impressive eCommerce stores using Magento. Our solutions are backed by rich industry 
      experience, ensuring each webpage is not just responsive but also optimized for search engines, offering a seamless 
      user experience.
      </p>
      <Link to='/read-more' className='magbtn'>talk to consultant</Link>
      <div className='mag-image' data-aos="slide-right" data-aos-duration="750" data-aos-easing="ease-in-sine" data-aos-offset="0"></div>
    </div>
  )
}

export default Magneto
