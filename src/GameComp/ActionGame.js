import React from 'react';
import '../assets/GameWrapper/Actiongame.css';
import {Link} from 'react-router-dom';

const ActionGame = () => {
  return (
    <div className='actgame-container'>
      <h1 data-aos="zoom-in" data-aos-duration="500" data-aos-easing="ease-in-sine" data-aos-offset="0">
      Level up your Game experience with Stunning Action Games.
      </h1>
      <p data-aos="zoom-in" data-aos-duration="500" data-aos-easing="ease-in-sine" data-aos-offset="0">
      The endurance and acceptance of the action genre and our experience developing games have thrust our knowledge of 
      gameplay styles, core game logic, and expertise in developing AI (Artificial Intelligence) for single or multiplayer.
      To upgrade the experience of your action games. Our experts develop flexible and open-ended games that are simple to 
      update in the future.
      </p>
      <Link to='/read-more' className='actgame-btn'>talk to consultant</Link>
      <div className='actgame-img' data-aos="slide-left" data-aos-duration="600" data-aos-easing="ease-in-sine" data-aos-offset="0"></div>
    </div>
  )
}

export default ActionGame