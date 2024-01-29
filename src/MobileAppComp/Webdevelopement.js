import React, {useState} from 'react';
import '../assets/MobileAppWrapper/Webdevelopement.css';
import {KeyboardArrowDownOutlined, Clear } from '@mui/icons-material';



const Webdevelopement = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className='appdev-container'>
        <h1>From Concept To Completion, Leverage The Expertise &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Impeccable App Development Agency</h1>
        <div className='app-line'></div>
        <p>Step Tech accommodates clients’ mobile app development needs, cutting through a range of industries spread across continents. Our 
        comprehensive experience providing mobile app development services has permitted us to work with brands on key industry difficulties 
        and build an effective industry through smart apps.
        </p>
        <button className='appbtn-con' onClick={() => setIsVisible(true)}>talk to consultant</button>
      {isVisible && 
        <div className='app2-visible-div'>
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
    </div>
  )
}

export default Webdevelopement