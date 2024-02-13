import React, {useState} from 'react';
import '../assets/GameWrapper/Sportgame.css';
import {KeyboardArrowDownOutlined, Clear } from '@mui/icons-material';

const Sportgame = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className='magneto-container'>
      <h1 className='magneto-right-h'>
      Dominate the World of Sport With our Best Sports Games 
      </h1>
      <p className='magneto-right-p'>
      In the virtual world sports <b>game app development</b> is the next big thing in gaming, and it's time for you to get 
      part and create a multiplayer sports game. Step Tech has significant experience in the blockchain business and 
      will help you with future <b>game development solutions.</b> We can assist you in expanding your gaming business to new 
      heights.
      </p>
      <button className='mbtn' onClick={() => setIsVisible(true)}>talk to consultant</button>
      {isVisible && 
        <div className='game3-visible-div'>
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
      <div className='mag-image'></div>
    </div>
  )
}

export default Sportgame