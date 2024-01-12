import React from 'react';
import '../assets/WebWrapper/FrontExpert.css';
import {Link} from 'react-router-dom';

const FrontExpert = () => {
  return (
    <div className='frontexp-container'>
      <h1>
      Our Front- End Developer Expertise
      </h1>
      <p className='frontexp-p'>
      Our front-end development experts understand your business objectives and develop top-quality solutions that meet 
      your needs, influencing the best front-end development technologies and practices. Our front-end experts will 
      utilize tested best techniques and their in-front-end development to give you a customer-centric and appealing web 
      application.
      </p>
      <Link className='reactjs-btn'>reactjs</Link>
      <Link className='angular-btn'>angular</Link>
      <Link className='vue-btn'>vue</Link>
      <Link className='html-btn'>html</Link>
      <Link className='js-btn'>js</Link>
      <p className='react-p'>ReactJS is popular for its flexibility, adjustability, and convenience. Our ReactJS developers create hard 
        software for your business involving web browsers and mobile application user interfaces.
      </p>
    </div>
  )
}

export default FrontExpert
