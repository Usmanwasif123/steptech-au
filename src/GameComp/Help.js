import React, {useState} from 'react';
import '../assets/GameWrapper/Help.css';
import { Link } from 'react-router-dom';
import {KeyboardArrowDownOutlined, Clear } from '@mui/icons-material';

const Help = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className='help-container'>
      <h1>
      Transform Boring Pixels Into an Intoxicating with our Hyper Casual Game Development 
      </h1>
      <p>
      Our skill relies on developing engaging and addictive casual mobile games that engage an array of players and 
      enthrall them in gaming sessions with minimal work, simple successes, and endless enjoyment. Our vast expertise 
      with hyper-casual game development projects of all kinds and styles allows us to ensure full compliance with the 
      client's demands for game development from the ground up, game art, or co-creation.
      </p>
      <button className='game-btn' onClick={() => setIsVisible(true)}>talk to consultant</button>
      {isVisible && 
        <div className='game5-visible-div'>
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
      <div className='hel-image'></div>
    </div>
  )
}

export default Help
