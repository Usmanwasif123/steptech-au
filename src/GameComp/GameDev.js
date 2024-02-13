import React, {useState} from 'react';
import '../assets/GameWrapper/Gamedev.css';
import {KeyboardArrowDownOutlined, Clear } from '@mui/icons-material';



const GameDev = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className='game-container'>
        <h1>Hire the Best Game Developers in Australia</h1>
        <div className='game-line'></div>
        <p>
        We have a team of the best game developers who are cutting-edge with the latest trends in the gaming industry. 
        Our game developers design extraordinary games compatible with the most commonly encountered platforms to draw 
        in a broader audience.  Their knowledge and experience in language programming and game engines, especially Unity
        and Unreal Engine, allow us to offer a comprehensive variety of services for game development, from conception 
        to game launch.
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