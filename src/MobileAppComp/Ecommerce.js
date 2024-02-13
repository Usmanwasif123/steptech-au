import React, {useState} from 'react';
import '../assets/MobileAppWrapper/Ecommerce.css';
import {KeyboardArrowDownOutlined, Clear } from '@mui/icons-material';

const Ecommerce = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className='appsec1-container'>
      <h1>
      More than Just Build an App We Build a Solution for the Inflame Your Success
      </h1>
      <p>
      Being a full-stack <b>iOS application development company</b> we have successfully gotten rid of thousands of native <b>iOS 
      applications</b> that were epic tales on the App Store and appeared to have explosive success rates. We have a highly 
      skilled staff of professional <b>iOS best app</b> builders, as well as our main tech stack to create iOS solutions in 
      Objective-C and Fast technologies. <b>Our app development company</b> responds to vital company challenges and allows 
      informed choices through custom Apple device applications. Use the privilege of significant <b>iOS development</b> 
      experience to develop an attractive, visually engaging app that will assist your business break out in a highly
      competitive marketplace.
      </p>
      <button className='appbtn2' onClick={() => setIsVisible(true)}>talk to consultant</button>
      {isVisible && 
        <div className='app3-visible-div'>
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
      <div className='right-image'></div>
    </div>
  )
}

export default Ecommerce
