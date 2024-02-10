import React, {useState} from 'react';
import '../assets/WebWrapper/Webdevelopement.css';
import {KeyboardArrowDownOutlined, Clear } from '@mui/icons-material';



const Webdevelopement = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className='web-section2'>
        <h1>Hire The Best Web Development Agency</h1>
        <div className='web-line'></div>
        <p>
        We have an adept team of website developers. We deliver results-driven solutions that enable businesses to succeed. With websites that 
        dynamically adjust to user behavior and choices, they produce highly personalized user experiences. This customization makes certain 
        that each visitor has a unique experience by ranging from the way content is displayed to how the user interface is designed.
        </p>
        <button className='webbtn2-talk' onClick={() => setIsVisible(true)}>talk to consultant</button>
      {isVisible && 
        <div className='web-visible-div'>
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