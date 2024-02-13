import React, {useState} from 'react';
import '../assets/MobileAppWrapper/Magneto.css';
import {KeyboardArrowDownOutlined, Clear } from '@mui/icons-material';

const Magneto = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className='appsec4-container'>
      <h1>
      Don’t Let Your App Be a Fossil Stay Up to date with our IOS App Development Services 
      </h1>
      <p>
      We are an iOS app development company in the UK that assists businesses better their business strategy, 
      establishing viable options, designing unforgettable user experiences, and coding apps that add outstanding value 
      to customers' lives. Our iOS application development is known for offering quick, secure, and scalable digital 
      solutions. Our iOS software developers promise that your applications have been created to help you become a 
      future-ready company.
      We have years of expertise in building mobility solutions centered on custom iOS app development. A specific 
      Centre of Excellence (CoE) allows able iOS app developers to stay up to speed on iOS updates, trends, and 
      frameworks that help them build compelling apps. Partner with Full-stack developers to begin an exciting digital 
      transformation journey and witness your business thrive in the digital realm. 
      </p>
      <button className='appbtn3' onClick={() => setIsVisible(true)}>talk to consultant</button>
      {isVisible && 
        <div className='app4-visible-div'>
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

export default Magneto
