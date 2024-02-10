import React, {useState} from 'react';
import '../assets/AnimationWrapper/AnimateDev.css';
import {KeyboardArrowDownOutlined, Clear } from '@mui/icons-material';



const AnimateDev = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className='animate-section4'>
        <h1>Grab The Attention Of Your Audience With Our Fascinated Animation Services!!!</h1>
        <button className='animatebtn-start' onClick={() => setIsVisible(true)}>get started</button>
      {isVisible && 
        <div className='animate4-visible-div'>
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

export default AnimateDev