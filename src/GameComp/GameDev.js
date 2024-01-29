import React, {useState} from 'react';
import '../assets/GameWrapper/Gamedev.css';
import {KeyboardArrowDownOutlined, Clear } from '@mui/icons-material';



const GameDev = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className='game-container'>
        <h1>Upraise your Gaming Experience with Superior &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;
        Game Development Agency</h1>
        <div className='game-line'></div>
        <p>
        We provide all-inclusive game development services bridging all three stages – pre-production, production, and post-production. We 
        provide full-cycle game development, gaming project revamps, and much more. Our experience in hands-on and captivating technology 
        benefits you by offering outstanding modern gaming experiences to your audience. Sensational visuals and seamless and intuitive 
        gameplay make your game charming for the game folks.<br/><br/>By incorporating the advanced updates and trends in the gaming 
        industry, we ensure that your game is relevant and appealing to players. Moreover, AI-powered visions into player behavior and 
        preferences empower us to build personalized experiences that vibrate with your target audience.
        </p>

        <button className='gamebtn-con' onClick={() => setIsVisible(true)}>talk to consultant</button>
      {isVisible && 
        <div className='game1-visible-div'>
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

export default GameDev