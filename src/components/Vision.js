import React from 'react';
import '../assets/wrapper/Vision.css';
import {Link} from 'react-router-dom';

const About = () => {
  return (
    <div className='main-section2'>
        <h1 className='right-vision'>About Us</h1>
        <div id='line1-vision'></div>
        <div id='line2-vision'></div>
        <div id='line3-vision'></div>
        <h1 className='right-heading'>
        Maximize the High Potential of Your Business
        </h1>
      <p className='right-p'>
      Step Tech is the most prominent website development company in Australia. We were established in 2015 to provide 
      our customers with an unparalleled digital experience. We are not just building your website. We are building your 
      business. We go beyond the ordinary for our clients by offering unique, customized, and productive solutions. 
      Whether it is a web app, mobile app, game app development, or any IT Solution- it will be one of a kind.
      <br/><br/>
      Step Tech is a hub for growth, education, and exploration for creative individuals. We are an eclectic bunch of 
      brave and creative thinkers from every background. Our focus on inclusion throughout the organization offers our 
      personnel enormous opportunities, and our open culture propels achievement for our clients.
      </p>
      <Link to='/read-more' className='btn-visionread'>read more</Link>
      <div className='box'>&nbsp;</div>
      <div className='box1' >&nbsp;</div>
      <div className='vision-image'>
        <img src='https://i.ibb.co/hVNvHLj/man-1.png'/>
      </div>
    </div>
  )
}

export default About
