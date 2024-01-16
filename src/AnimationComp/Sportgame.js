import React from 'react';
import '../assets/AnimationWrapper/Sportgame.css';
import {Link} from 'react-router-dom';

const Sportgame = () => {
  return (
    <div className='animate-section2'>
      <h1>Ideate, Plan, and Build;<br/>Mission Situated Games
      </h1>
      <p>
      By collaborating with our best 2d game makers, you can embrace the latest technologies and select the optimal database, language, and 
      framework for building mobile games.
      </p>
      <div className='animate-img2' data-aos="slide-right" data-aos-duration="600" data-aos-easing="ease-in-sine" data-aos-offset="0"></div>
    </div>
  )
}

export default Sportgame