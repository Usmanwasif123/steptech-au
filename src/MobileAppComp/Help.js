import React, {useState} from 'react';
import '../assets/MobileAppWrapper/Help.css';
import {KeyboardArrowDownOutlined, Clear } from '@mui/icons-material';

const Help = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className='appsec6-container'>
      <h1>
      Get the Advancment in Your Business With Progressive Web App Development
      </h1>
      <p>
      Step Tech Global extensive experience in mobile application development also helps us provide 360-degree progressive
      web app solutions. With our expert app developers at your dumping, you can continuously undertake PWA development to 
      dispose fast, engaging, and cross-platform user experiences.As a top-leading mobile app development services company,
       we design progressive web app development solutions that benefit companies combine astute solutions applied in web 
       and mobile applications beneficial for simple development and distribution. Using our advanced web app solutions, 
       you allow persistent access to app-like elements and features on any device with a web browser, augmenting your 
       customer reach and brand presence.
      </p>
      <button className='appbtn5' onClick={() => setIsVisible(true)}>talk to consultant</button>
      {isVisible && 
        <div className='app6-visible-div'>
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
      <div className='left-img'></div>
    </div>
  )
}

export default Help
