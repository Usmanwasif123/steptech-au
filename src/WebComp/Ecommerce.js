import React from 'react';
import '../assets/WebWrapper/Ecommerce.css';
import {Link} from 'react-router-dom';

const Ecommerce = () => {
  return (
    <div className='ecommerce-container'>
      <h1 className='ecommerce-left-h'>
        ECommerce & CMS Development Services
      </h1>
      <p className='ecommerce-left-p'>
      In today’s fast-paced digital world, establishing a powerful online presence is paramount. Step Tech Global is your 
      gateway to all-inclusive and up-to-date website solutions. We create eCommerce web development and CMS platforms with
       an easy-to-use backend and an interactive front end, ensuring responsiveness, SEO-friendliness, and aesthetic appeal.
      </p>
      <Link to='/read-more' className='ebtn'>talk to consultant</Link>
      <div className='ecom-image' data-aos="slide-left" data-aos-duration="750" data-aos-easing="ease-in-sine" data-aos-offset="0"></div>
    </div>
  )
}

export default Ecommerce
