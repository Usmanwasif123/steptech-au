import React, {useState} from 'react';
import '../assets/WebWrapper/Shopify.css';
import {KeyboardArrowDownOutlined, Clear } from '@mui/icons-material';

const Shopify = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className='web-section5'>
      <h1 className='shopify-left-h'>
      Unlock The Full-Potential Of Your Store With Our Shopify Website Development</h1>
      <p className='shopify-left-p'>
      Modernize your online business with our Shopify development services. Our team of experts, backed by a decade's worth of skills, excels 
      in developing visually attractive, highly effective, and search engine-friendly websites. Our solutions cater to an extensive variety of 
      businesses, guaranteeing dependability, security, and outstanding outcomes.
      </p>
      <button className='shobtn' onClick={() => setIsVisible(true)}>talk to consultant</button>
      {isVisible && 
        <div className='shop-visible-div'>
          <img style={{height: '300px', width: '500px'}} src='https://i.ibb.co/h8xCwvR/image.png' alt='visible-image' />
          <p className='visible-p1'>We are Friendly & Experienced Development Company</p>
          <p className='visible-p2'>We are here to help!</p>
          <p className='visible-p3'>Take your business higher than ever of accomplishment with our unrivaled administrations.
          <br/>Reach out at this point!</p>
          <form className='visible-contact-form' >
            <input className='full-name' type='text' name='Full Name' placeholder='Full Name' />
            <input className='email' type='email' name='Email' placeholder='Email' />
            <input className='phone-no' type='tel' name='phone no' placeholder='Phone no' />
            <textarea className='message-input' name='Message' placeholder='Enter a brief' />
            <button className='submit-btn' type='submit'>submit request</button>
            <button className='btn-close' onClick={() => setIsVisible(false)}>
            <Clear style={{fontSize: '40px'}}/>
            </button>
          </form>
        </div>
      }
      <div className='sho-image' ></div>
    </div>
  )
}

export default Shopify
