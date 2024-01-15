import React from 'react';
import '../assets/GameWrapper/Sportgame.css';
import {Link} from 'react-router-dom';

const SportGame = () => {
  return (
    <div className='magneto-container'>
      <h1 className='magneto-right-h'>
      Turn on Epic Adventure with Our Sports Game
      </h1>
      <p className='magneto-right-p'>
      Metaverse sports game development is the next big thing, and it’s time for you to join the race and build your own 
      sports game. At Step Tech Global, we have extensive years of experience in the blockchain industry and assist you 
      with futuristic game development solutions. We assist you in bringing your gaming business to new heights.
      </p>
      <Link to='/read-more' className='mbtn'>talk to consultant</Link>
      <div className='mag-image'></div>
    </div>
  )
}

export default SportGame