import React from 'react';
import '../assets/BlogWrapper/Actiongame.css';
import { Link } from 'react-router-dom';
import {DoubleArrow, Circle} from '@mui/icons-material';

const ActionGame = () => {
  return (
    <div className='blog-section2'>
      <div className='box1' >&nbsp;</div>
      <div className='blog1-img'></div>
      <div className='blog1-logo'></div>
      <h1 className='blog1-h'>
      Bitcoin Halving 2024: Everything You Need to Know			
      </h1>
      <p className='blog1-p'>
      Bitcoin is halving crops every four years, minimizing miners’ rewards and new Bitcoin to the actual 
      supply. It dies down inflation and maximizes Bitcoin’s price. 
      </p>
      <Link to='/bitcoin-halving-2024-everything-you-need-to-know' className='readmore-link'>Read more</Link>
      <DoubleArrow style={{position: 'absolute', zIndex: '1', color: '61ce70', top: '76%', left: '16.5%', fontSize: '13px'}}/>
      <div className='banner-line'></div>
      <span className='date1'>November 11, 2023</span>
      <Circle style={{position: 'absolute', zIndex: '1', color: '#b8b2b6', top: '83.5%', left: '19%', fontSize: '9px'}}/>
      <span className='comment1'>1 Comment</span>
    </div>
  )
}

export default ActionGame