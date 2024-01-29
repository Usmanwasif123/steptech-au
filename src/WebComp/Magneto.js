import React, {useState} from 'react';
import '../assets/WebWrapper/Magneto.css';
import {KeyboardArrowDownOutlined, Clear } from '@mui/icons-material';

const Magneto = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className='web-section4'>
      <h1 className='magneto-right-h'>
      Trusted Best Magento Development Company
      </h1>
      <p className='magneto-right-p'>
      Website development forms the backbone of any online venture. With a focus on uniqueness and functionality, we 
      specialize in crafting impressive eCommerce stores using Magento. Our solutions are backed by rich industry 
      experience, ensuring each webpage is not just responsive but also optimized for search engines, offering a seamless 
      user experience.
      </p>
      <button className='magbtn' onClick={() => setIsVisible(true)}>talk to consultant</button>
      {isVisible && 
        <div className='mag-visible-div'>
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
      <div className='mag-image' data-aos="slide-right" data-aos-duration="750" data-aos-easing="ease-in-sine" data-aos-offset="0"></div>
    </div>
  )
}

export default Magneto
