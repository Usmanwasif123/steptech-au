import React from 'react';
import '../assets/WebWrapper/BackExpert.css';
import {Link} from 'react-router-dom';

const BackExpert = () => {
  return (
    <div className='backexp-container'>
      <h1>
      Our Back-End Developer Expertise
      </h1>
      <p className='backexp-p'>
      We optimize functionality, security, and performance, ensuring a solid foundation that supports your platform’s 
      growth and evolution. Step Tech Global boasts expertise in various back-end technologies such as PHP, Node JS, 
      Laravel, C#, .NET, and Express JS. This allows us to build powerful, scalable, and secure web applications.
      </p>
      <Link className='php-btn'>php</Link>
      <Link className='nodejs-btn'>node js</Link>
      <Link className='laravel-btn'>laravel</Link>
      <Link className='chashtag-btn'>c#</Link>
      <Link className='net-btn'>.net</Link>
      <Link className='expressjs-btn'>expressjs</Link>
      <p className='php-p'>We bring authentically and trusted web development solutions with our ExpressJS development 
      experts. Projects requiring lightweight and user-friendly web app solutions are done with utmost perfection. With 
      our years of experience and unparalleled skills, we will build exceptional applications customized for your business
      needs. Get connected now.
      </p>
    </div>
  )
}

export default BackExpert
