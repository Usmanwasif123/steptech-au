import React, { useState} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import '../assets/PortWrapper/Shopify.css';


const Shopify = () => {
  const[setting, setSetting] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
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
    <div className='port-section4'>
      <img className='bg-img' src='https://i.ibb.co/WctJPtB/World.png' alt='bg'></img>
      <h1 className='port-right-h'>Motor Mods- AutoParts</h1>
      <ArrowRightIcon style={{position: 'absolute', zIndex: '1', top: '45%', left: '62%', fontSize: '30px'}}/>
      <ArrowRightIcon style={{position: 'absolute', zIndex: '1', top: '50%', left: '62%', fontSize: '30px'}}/>
      <ArrowRightIcon style={{position: 'absolute', zIndex: '1', top: '55%', left: '62%', fontSize: '30px'}}/>
      <h1 className='h1'>Overview</h1>
      <h1 className='h2'>Features</h1>
      <h1 className='h3'>Technologies</h1>
      <div className='port-carousel'>
          <Slider {...setting}>
            <div className='port-card1'>
                <img className='img1' src='https://i.ibb.co/Kq5SBMw/image.png' alt='ai'/>
            </div> 
            <div className='port-card2'> 
                <img className='img2' src='https://i.ibb.co/Ycz3TNP/image.png' alt='ai'/>
            </div>
            <div className='port-card3'>
                <img className='img3' src='https://i.ibb.co/L0L3kjg/image.png' alt='ai'/>
            </div> 
          </Slider>
          </div>
    </div>
  )
}


export default Shopify
