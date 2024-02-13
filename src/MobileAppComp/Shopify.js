import React, {useState} from 'react';
import '../assets/MobileAppWrapper/Shopify.css';
import {KeyboardArrowDownOutlined, Clear } from '@mui/icons-material';

const Shopify = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className='appsec5-container'>
      <h1>
      Give your Android App an Innovative Look with our Android App Development Services
      </h1>
      <p>
      Begin a new endeavor with skilled Android developers. Step Tech offers you just the best Android developers. Our 
      developers have significant technical expertise and expertise in the particular programming languages or frameworks
      necessary for the assignment. Our Android app development services strive to give expert support at every level of
      the development process, from idea, design, and coding to quality assurance and Google Play launch.Our years of 
      expertise in the industry have enabled us to establish ourselves as an acknowledged firm in the app development 
      sector. Whether you need an app for a smartphone, a wearable device, or a television, we offer powerful options 
      that function seamlessly across all devices and sectors. Our method solves complicated business challenges and 
      improves your decision-making capabilities.
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
