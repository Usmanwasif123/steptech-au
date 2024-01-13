import React from 'react';
import '../assets/MobileAppWrapper/Secure.css';
import {Link} from 'react-router-dom';

const Secure = () => {
  return (
    <div className='secure-container'>
      <h1 className='secure-left-h'>
      Secure & High-Quality WordPress Development Services
      </h1>
      <p className='secure-left-p'>
      Looking to establish your website swiftly? Step Tech Global serves as a one-stop WordPress Development hub. Our 
      team of dedicated WordPress developers has delivered over 3000 projects, ensuring robust digital presences that 
      match your expectations. Leveraging this popular CMS’s features and plugin support, we create dynamic websites 
      across various industry verticals.
      </p>
      <Link to='/read-more' className='secbtn'>talk to consultant</Link>
      <div className='sec-image'></div>
    </div>
  )
}

export default Secure