import React, {useState} from 'react';
import '../assets/GameWrapper/Shopify.css';
import {KeyboardArrowDownOutlined, Clear } from '@mui/icons-material';

const Shopify = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className='shopify-container'>
      <h1 className='shopify-left-h'>
      Ignite your Gaming Passion with RPG Game Development
      </h1>
      <p className='shopify-left-p'>
      We create your RPG games employing a variety of verticals involving artificial intelligence, audio effects, 3D 
      graphics, animations, and diverse other components that give online games an elegant appearance (RPG). We are world
      famous Roleplay Game development company that provides idealistic role-playing game services and solutions
      </p>
      <button className='sbtn' onClick={() => setIsVisible(true)}>talk to consultant</button>
      {isVisible && 
        <div className='game4-visible-div'>
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
      <div className='sho-image'></div>
    </div>
  )
}

export default Shopify
