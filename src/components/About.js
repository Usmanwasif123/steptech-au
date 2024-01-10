import React from 'react';
import '../assets/wrapper/About.css';
import {Link} from 'react-router-dom';

const About = () => {
  return (
    <div className='about-main'>
        <h1 className='right-about'>About Us</h1>
        <div id='line1-about'></div>
        <div id='line2-about'></div>
        <div id='line3-about'></div>
        <h1 className='right-heading'>
          WHERE YOUR VISION IS REALISED
        </h1>
      <p className='right-p'>
        Step Tech is a software development and web design 
      company. We provide State of the art IT solutions for small and medium 
      businesses and enterprises. We've helped hundreds of businesses plan, 
      develop and manage the perfect websites and apps for their internal needs 
      and customers. Being software development company, we work on a wide range 
      of technologies ranging from open source to proprietary and custom-built 
      solutions. With years of experience, we have perfected the process, system, 
      and technologies that enable us to create high-quality, web and mobile 
      solutions.</p>
      <p className='right-p'>
      Having been in the creative and IT industry for longer than a decade, our 
      focus is on understanding the specific need of our clients. Integrating this.
      </p>
      <Link to='/read-more' className='btn-aboutread'>read more</Link>
      <div className='box'>&nbsp;</div>
      <div className='box1' >&nbsp;</div>
      <div className='about-image'>
      </div>
    </div>
  )
}

export default About
