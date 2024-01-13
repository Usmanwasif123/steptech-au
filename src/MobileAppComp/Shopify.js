import React from 'react';
import '../assets/MobileAppWrapper/Shopify.css';
import {Link} from 'react-router-dom';

const Shopify = () => {
  return (
    <div className='appsec3-container'>
      <h1>
      Get Outstanding Android App Development Service with Step Tech Global
      </h1>
      <p>
      Start your next project with skilled Android developers. Step Tech Global brings the best of the best Android 
      developers to you. Our developers possess strong technical skills and expertise in the precise programming languages
       or frameworks required for the job. Our services for creating Android apps aim to provide professional assistance 
       at each stage of the development process, from conception, design, and coding to quality assurance and Google Play 
       launch.Our vast expertise in the domain allowed us to build ourselves as a reputable company in the app development
       industry.. Whether you want an app for a smartphone, a wearable device, or a TV, we build powerful solutions that 
       work flawlessly across all devices and industries. Our approach solves tricky business challenges and boosts your
       decision-making capabilities.
      </p>
      <Link to='/read-more' className='btn'>talk to consultant</Link>
      <div className='right-img'></div>
    </div>
  )
}

export default Shopify
