import React from 'react';
import '../assets/MobileAppWrapper/Promoted.css';

const Promoted = () => {
  return (
    <div className='promoted-container'>
       <h1>Industries, We Have Promoted Instantly</h1>
      <div className='promoted-box'>&nbsp;</div>
      <button className='h-btn'>healthcare</button>
      <button className='r-btn'>restaurant</button>
      <button className='e-btn'>ecommerce</button>
      <button className='re-btn'>real estate</button>
      <button className='ed-btn'>education</button>
      <div className='p-left-box'>&nbsp;</div>
      <div className='p-left-box1'>&nbsp;</div>
      <h1 className='health-h1'>Healthcare</h1>
      <p>We are conveying the best application improvement administrations for the medical care area since we are in the 
       advanced world. We are planning applications going from telemedicine to applications created for patients and 
       emergency clinics. Everything is conceivable with creatives like us.</p>
       <button className='click-btn'>click here</button>
      <div className='p-left-img'></div>
    </div>
  )
}

export default Promoted
