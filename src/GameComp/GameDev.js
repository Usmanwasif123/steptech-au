import React from 'react';
import '../assets/GameWrapper/Gamedev.css';
import {Link} from 'react-router-dom';



const GameDev = () => {
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
        <Link to='/read-more' className='gamebtn-con'>talk to consultant</Link>
    </div>
  )
}

export default GameDev