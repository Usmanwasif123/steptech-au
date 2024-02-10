import React, {useState} from 'react';
import '../assets/WebWrapper/Ecommerce.css';
import {Link} from 'react-router-dom';
import {KeyboardArrowDownOutlined, Clear } from '@mui/icons-material';

const Ecommerce = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className='web-section3'>
      <h1 className='ecommerce-left-h'>
      Get The High-Quality CMS Development Services for your E-commerce 
      </h1>
      <p className='ecommerce-left-p'>
      Step Tech Global is your one-stop shop for comprehensive and modern website solutions. We create mobile, SEO-friendly, and visually 
      appealing eCommerce web development and CMS platforms with an accessible backend and a captivating front end. Our Custom Software 
      Application firm thrives at developing solutions that are both efficient and powerful, as well as user-friendly and straightforward. 
      </p>
      <button className='ecombtn' onClick={() => setIsVisible(true)}>talk to consultant</button>
      {isVisible && 
        <div className='ecom-visible-div'>
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
      <div className='ecom-image' ></div>
    </div>
  )
}

export default Ecommerce
