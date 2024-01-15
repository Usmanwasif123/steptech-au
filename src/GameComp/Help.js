import React from 'react';
import '../assets/GameWrapper/Help.css';
import {Link} from 'react-router-dom';

const Help = () => {
  return (
    <div className='help-container'>
      <h1>
      Turning Pixel into Excitement with Hyper Casual Game Development
      </h1>
      <p>
      Our team of Shopify developers brings a wealth of technical expertise to fulfill all your website development needs.
      From eCommerce development and custom theme design to integrations, mobile app development, and migration, we’ve 
      delivered over 1000 Shopify stores with precision and finesse.
      </p>
      <Link to='/read-more' className='game-btn'>talk to consultant</Link>
      <div className='hel-image'></div>
    </div>
  )
}

export default Help
