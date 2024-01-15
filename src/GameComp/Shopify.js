import React from 'react';
import '../assets/GameWrapper/Shopify.css';
import {Link} from 'react-router-dom';

const Shopify = () => {
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
      <Link to='/read-more' className='sbtn'>talk to consultant</Link>
      <div className='sho-image'></div>
    </div>
  )
}

export default Shopify
