import React, {useState} from 'react';
import '../assets/WebWrapper/Secure.css';
import {KeyboardArrowDownOutlined, Clear } from '@mui/icons-material';

const Secure = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className='web-section7'>
      <h1 className='secure-left-h'>
      To Make Your Experience More Personalized Get Our Custom Web Development  Services 
      </h1>
      <p className='secure-left-p'>
      Step Tech custom web development company, can develop customized web apps that satisfy the particular needs of your business. Our field of
      expertise is developing customized approaches that allow your business to grow and succeed.  Our custom web development team collaborate
      closely with businesses- be it startups, SMBs, or enterprises, to build custom web solutions that achieve your vision. 
      </p>
      <button className='secbtn' onClick={() => setIsVisible(true)}>talk to consultant</button>
      {isVisible && 
        <div className='sec-visible-div'>
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
      <div className='sec-image'></div>
    </div>
  )
}

export default Secure