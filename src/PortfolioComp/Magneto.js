import React, { useState} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import '../assets/PortWrapper/Magneto.css';

const Magneto = () => {
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
    <div className='port-section2'>
      <img className='bg-img' src='https://i.ibb.co/WctJPtB/World.png' alt='bg'></img>
      <h1 className='port-right-h'>Alo</h1>
      <ArrowRightIcon style={{position: 'absolute', zIndex: '1', top: '45%', left: '62%', fontSize: '30px'}}/>
      <ArrowRightIcon style={{position: 'absolute', zIndex: '1', top: '50%', left: '62%', fontSize: '30px'}}/>
      <ArrowRightIcon style={{position: 'absolute', zIndex: '1', top: '55%', left: '62%', fontSize: '30px'}}/>
      <h1 className='h1'>Overview</h1>
      <h1 className='h2'>Features</h1>
      <h1 className='h3'>Technologies</h1>
      <div className='port1-carousel'>
          <Slider {...setting}>
            <div className='port-card1'>
                <img className='img1' src='https://i.ibb.co/vY5RGGd/image.png' alt='ai'/>
            </div> 
            <div className='port-card2'> 
                <img className='img2' src='https://i.ibb.co/qWJRWdk/image.png' alt='ai'/>
            </div>
            <div className='port-card3'>
                <img className='img3' src='https://i.ibb.co/vY5RGGd/image.png' alt='ai'/>
            </div> 
          </Slider>
          </div>
      <div className='port-section3'>
      <h1 className='port-left-h'>Music Web Store</h1>
      <ArrowRightIcon style={{position: 'absolute', zIndex: '1', top: '45%', left: '4%', fontSize: '30px'}}/>
      <ArrowRightIcon style={{position: 'absolute', zIndex: '1', top: '50%', left: '4%', fontSize: '30px'}}/>
      <ArrowRightIcon style={{position: 'absolute', zIndex: '1', top: '55%', left: '4%', fontSize: '30px'}}/>
      <h1 className='h1'>Overview</h1>
      <h1 className='h2'>Features</h1>
      <h1 className='h3'>Technologies</h1>
      <div className='port2-carousel'>
          <Slider {...setting}>
            <div className='port-card4'>
                <img className='img4' src='https://i.ibb.co/Gc6mbTf/image.png' alt='ai'/>
            </div> 
            <div className='port-card5'> 
                <img className='img5' src='https://i.ibb.co/h8ZvY07/image.png' alt='ai'/>
            </div>
            <div className='port-card6'>
                <img className='img6' src='https://i.ibb.co/tL1vNzx/image.png' alt='ai'/>
            </div> 
          </Slider>
          </div>
          </div>
    </div>
  )
}

export default Magneto
