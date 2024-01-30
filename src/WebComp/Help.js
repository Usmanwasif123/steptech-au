import React, {useState} from 'react';
import '../assets/WebWrapper/Help.css';
import {KeyboardArrowDownOutlined, Clear } from '@mui/icons-material';

const Help = () => {
  const [isVisible, setIsVisible] = useState(false);
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
      <button className='helpbtn' onClick={() => setIsVisible(true)}>talk to consultant</button>
      {isVisible && 
        <div className='help-visible-div'>
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
      <div className='hel-image' ></div>
    </div>
  )
}

export default Help
