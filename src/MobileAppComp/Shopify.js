import React, {useState} from 'react';
import '../assets/MobileAppWrapper/Shopify.css';
import {KeyboardArrowDownOutlined, Clear } from '@mui/icons-material';

const Shopify = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className='appsec5-container'>
      <h1>
      Get Outstanding Android App Development Service with Step Tech Global
      </h1>
      <p>
      Start your next project with skilled Android developers. Step Tech Global brings the best of the best Android 
      developers to you. Our developers possess strong technical skills and expertise in the precise programming languages
       or frameworks required for the job. Our services for creating Android apps aim to provide professional assistance 
       at each stage of the development process, from conception, design, and coding to quality assurance and Google Play 
       launch.Our vast expertise in the domain allowed us to build ourselves as a reputable company in the app development
       industry.. Whether you want an app for a smartphone, a wearable device, or a TV, we build powerful solutions that 
       work flawlessly across all devices and industries. Our approach solves tricky business challenges and boosts your
       decision-making capabilities.
      </p>
      <button className='appbtn4' onClick={() => setIsVisible(true)}>talk to consultant</button>
      {isVisible && 
        <div className='app5-visible-div'>
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
      <div className='right-img'></div>
    </div>
  )
}

export default Shopify
