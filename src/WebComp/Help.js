import React from 'react';
import '../assets/WebWrapper/Help.css';
import {Link} from 'react-router-dom';

const Help = () => {
  return (
    <div className='web-section6'>
      <h1 className='help-right-h'>
      How does Step Tech Global help eCommerce businesses with Shopify Development Services?
      </h1>
      <p className='help-right-p'>
      Our team of Shopify developers brings a wealth of technical expertise to fulfill all your website development needs.
      From eCommerce development and custom theme design to integrations, mobile app development, and migration, we’ve 
      delivered over 1000 Shopify stores with precision and finesse.
      </p>
      <Link to='/read-more' className='helpbtn'>talk to consultant</Link>
      <div className='hel-image'></div>
    </div>
  )
}

export default Help
