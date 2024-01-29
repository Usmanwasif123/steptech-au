import React, {useState} from 'react';
import '../assets/MobileAppWrapper/Ecommerce.css';
import {KeyboardArrowDownOutlined, Clear } from '@mui/icons-material';

const Ecommerce = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className='appsec1-container'>
      <h1>
      Step Tech Global Not Only Build Mob Apps, We Build Your Dreams
      </h1>
      <p>
      As a full-stack iOS Application Development company, we must dispose of 
      hundreds of native iOS apps that have perceived skyrocketing success rates 
      and were epics on the App Store. We have a highly skilled team of experienced
      IOS best app builders and our foremost tech stack for creating iOS solutions 
      in Objective-C and Swift. Our app-building company solves critical business 
      challenges and facilitates bright decision-making through tailor-made Apple 
      device applications. Serve from our deep expertise in iOS development to build
      an appealing, visually engaging app that enhances your business in a 
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
