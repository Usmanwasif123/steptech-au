import React, {useState} from 'react';
import '../assets/WebWrapper/Webdevelopement.css';
import {KeyboardArrowDownOutlined, Clear } from '@mui/icons-material';



const Webdevelopement = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className='web-section2'>
        <h1>Unleash The Full Potential Of Your Business With &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Stunning Web Development Agency</h1>
        <div className='web-line'></div>
        <p>
        Are you in search of an impeccable streaming application for your auditory recreation? You may crave a convenient
        food or shopping app to cater to your daily needs. At Step Tech Global, we not only recognize your brand’s
        digital needs but also tailor applications to perfectly fill any gaps in your brand identity with custom web 
        development. Join hands with us to embark on a journey of advanced digital experiences that resonate with your 
        audience.
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