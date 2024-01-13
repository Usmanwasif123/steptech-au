import React from 'react';
import '../assets/MobileAppWrapper/Ecommerce.css';
import {Link} from 'react-router-dom';

const Ecommerce = () => {
  return (
    <div className='appsec1-container'>
      <h1>
      Step Tech Global Not Only Build Mob Apps, We Build Your Dreams
      </h1>
      <p>
      As a full-stack iOS Application Development company, we must dispose of 
      hundreds of native iOS apps that have perceived skyrocketing success rates 
      and were epics on the App Store. We have a highly skilled team of experienced
      IOS best app builders and our foremost tech stack for creating iOS solutions 
      in Objective-C and Swift. Our app-building company solves critical business 
      challenges and facilitates bright decision-making through tailor-made Apple 
      device applications. Serve from our deep expertise in iOS development to build
      an appealing, visually engaging app that enhances your business in a 
      competitive marketplace.
      </p>
      <Link to='/read-more' className='btn'>talk to consultant</Link>
      <div className='right-image'></div>
    </div>
  )
}

export default Ecommerce
