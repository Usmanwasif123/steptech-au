import React, { useState} from 'react';
import '../assets/MobileAppWrapper/Passion.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Passion = () => {

    const[setting, setSetting] = useState({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
      ]
        });
    
  return (
    <div className='passion-container'>
      <h1>Portfolio- Passion For All</h1>
      <div className='passion-carousel'>
          <Slider {...setting}>
            <div className='passion-card1'>
                <img className='img1' src='https://i.ibb.co/1mXSkMj/image.png' alt='ai'/>
            </div> 
            <div className='passion-card2'> 
                <img className='img2' src='https://i.ibb.co/GWc1yt4/image.png' alt='ai'/>
            </div>
            <div className='passion-card3'>
                <img className='img3' src='https://i.ibb.co/Yh0vyZM/image.png' alt='ai'/>
            </div> 
            <div className='passion-card4'>
                <img className='img4' src='https://i.ibb.co/2jG8ZBV/image.png' alt='ai'/>
              </div>
            <div className='passion-card5'>
                <img className='img5' src='https://i.ibb.co/HHMxt3Z/image.png' alt='ai'/>
            </div> 
            <div className='passion-card6'>
                <img className='img6' src='https://i.ibb.co/w642Zz7/image.png' alt='ai'/>
            </div>
          </Slider>
          </div>
    </div>  
  )
}

export default Passion