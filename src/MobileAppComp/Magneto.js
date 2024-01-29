import React, {useState} from 'react';
import '../assets/MobileAppWrapper/Magneto.css';
import {KeyboardArrowDownOutlined, Clear } from '@mui/icons-material';

const Magneto = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className='appsec4-container'>
      <h1>
      Stay Up-To-Date With Our iOS App Development Service
      </h1>
      <p>
      We are an iOS app development company in USA known for assisting businesses to upgrade their business strategy, 
      build feasible solutions, design remarkable experiences, and code apps that add premium quality to users’ lives. 
      Our iOS application development is notorious as the right choice for building fast, secure, scalable digital 
      solutions. Our iOS software developers guarantee that your applications are engineered to make you a future-adaptive
      business.Step Tech Global has deep expertise in designing mobility solutions centered throughout custom iOS app 
      development. A devoted Center of Excellence (CoE) further allow certified iOS app developers to stay cutting-edge 
      with iOS updates, trends, and frameworks that assist them build captivating apps. Partner with Full Stack developers
      to start an incredible digital transformation journey and see business prosper in the digital realm.
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
