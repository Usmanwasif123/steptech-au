import React from 'react';
import '../assets/wrapper/Solution.css';
import {Link} from 'react-router-dom';
import Cube from './Cube';

const Solution = () => {
  return (
    <div className='solution-container'>
        <div className='sol-background'></div>
        <div id='sol-line1'></div>
        <div id='sol-line2'></div>
        <h1 class='sol-heading-left' >Crafting a Stunning Digital Experience For Your Business</h1>
        <h2 className='sol-heading2-left' >Achieve Your Business Goals And Build The Best  Digital Experience For Your Business Future With StepTech</h2>
        <p className='sol-para-left' >We are a worldwide, multi-award-winning web development company offering outstanding
          digital marketing, game development, web development, and app development solutions. We take delight in providing
          our global clients with the ideal blend of knowledge and technology. We have a team of top-tier industry 
          specialists constantly working to meet your needs for customized web, apps, games, and solutions. We don't just 
          offer solutions for your brand; we build a business to help you thrive in your competitive market.
        </p>
        <Link to='/step-tech-on-designrush' className='btn-design'>
          Learn More
        </Link>
        <div className='right-side'>
          <img className='bg-img' src='https://imgtr.ee/images/2024/02/21/de07be8ebd2b591aab25794145ccac24.png' alt="layer"/>
          <Cube />
        </div>
      
    </div>
  )
}

export default Solution
