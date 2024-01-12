import React from 'react';
import '../assets/WebWrapper/Shopify.css';
import {Link} from 'react-router-dom';

const Shopify = () => {
  return (
    <div className='shopify-container'>
      <h1 className='shopify-left-h'>
      Explore New Business Possibilities With Our Shopify Development Services
      </h1>
      <p className='shopify-left-p'>
      Upgrade your online business with our customized Shopify development services. Backed by over a decade of 
      experience, our team specializes in creating visually stunning, high-performing, and search engine-friendly website
      development. Our solutions cater to diverse industries, offering reliability, security, and exceptional performance.
      </p>
      <Link to='/read-more' className='sbtn'>talk to consultant</Link>
      <div className='sho-image'></div>
    </div>
  )
}

export default Shopify
