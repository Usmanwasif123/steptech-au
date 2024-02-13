import React, {useState} from 'react';
import '../assets/GameWrapper/Actiongame.css';
import {KeyboardArrowDownOutlined, Clear } from '@mui/icons-material';

const ActionGame = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className='actgame-container'>
      <h1 data-aos="zoom-in" data-aos-duration="500" data-aos-easing="ease-in-sine" data-aos-offset="0">
       It’s Time to Gear Up the Adventure with our Action Games
      </h1>
      <p data-aos="zoom-in" data-aos-duration="500" data-aos-easing="ease-in-sine" data-aos-offset="0">
      Our understanding of gameplay structure, basic gameplay logic, and skill in creating AI (Artificial Intelligence) 
      for single or multiplayer games has been pushed by the action genre's continued popularity and acceptance in 
      addition to our experience developing games. To enhance the quality of your action games. Our expertise creates 
      flexible, flexible games that are easy to modify in the future.
      </p>
      <button className='actgame-btn' onClick={() => setIsVisible(true)}>talk to consultant</button>
      {isVisible && 
        <div className='game2-visible-div'>
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
      <div className='actgame-img' ></div>
    </div>
  )
}

export default ActionGame