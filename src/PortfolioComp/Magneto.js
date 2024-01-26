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
      <button className='webmag-btn' >
        Web Developement
      </button>
      <button className='appmag-btn' >
        App Developement
      </button>
      <button className='gamemagneto-btn' >
        Game Developement
      </button>
      <img className='bg-img1' src='https://i.ibb.co/WctJPtB/World.png' alt='bg'></img>
      <h1 className='port-right-h1'>Alo</h1>
      <ArrowRightIcon style={{position: 'absolute', zIndex: '1', top: '9%', left: '68%', fontSize: '30px'}}/>
      <ArrowRightIcon style={{position: 'absolute', zIndex: '1', top: '10%', left: '68%', fontSize: '30px'}}/>
      <ArrowRightIcon style={{position: 'absolute', zIndex: '1', top: '11%', left: '68%', fontSize: '30px'}}/>
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
          <img className='bg-img' src='https://i.ibb.co/WctJPtB/World.png' alt='bg'></img>
            <h1 className='port-left-h2'>Music Web Store</h1>
      <ArrowRightIcon style={{position: 'absolute', zIndex: '1', top: '24%', left: '5%', fontSize: '30px'}}/>
      <ArrowRightIcon style={{position: 'absolute', zIndex: '1', top: '25%', left: '5%', fontSize: '30px'}}/>
      <ArrowRightIcon style={{position: 'absolute', zIndex: '1', top: '26%', left: '5%', fontSize: '30px'}}/>
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
          <div className='port-section4'>
      <img className='bg-img' src='https://i.ibb.co/WctJPtB/World.png' alt='bg'></img>
      <h1 className='port-right-h3'>Motor Mods -AutoParts</h1>
      <ArrowRightIcon style={{position: 'absolute', zIndex: '1', top: '44%', left: '62%', fontSize: '30px'}}/>
      <ArrowRightIcon style={{position: 'absolute', zIndex: '1', top: '43%', left: '62%', fontSize: '30px'}}/>
      <ArrowRightIcon style={{position: 'absolute', zIndex: '1', top: '45%', left: '62%', fontSize: '30px'}}/>
      <h1 className='h1'>Overview</h1>
      <h1 className='h2'>Features</h1>
      <h1 className='h3'>Technologies</h1>
      <div className='port3-carousel'>
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
          <div className='port-section5'>
      <img className='bg-img' src='https://i.ibb.co/WctJPtB/World.png' alt='bg'></img>
      <h1 className='port-left-h4'>Study Web Store</h1>
      <ArrowRightIcon style={{position: 'absolute', zIndex: '1', top: '61%', left: '5%', fontSize: '30px'}}/>
      <ArrowRightIcon style={{position: 'absolute', zIndex: '1', top: '62%', left: '5%', fontSize: '30px'}}/>
      <ArrowRightIcon style={{position: 'absolute', zIndex: '1', top: '63%', left: '5%', fontSize: '30px'}}/>
      <h1 className='h1'>Overview</h1>
      <h1 className='h2'>Features</h1>
      <h1 className='h3'>Technologies</h1>
      <div className='port4-carousel'>
          <Slider {...setting}>
            <div className='port-card1'>
                <img className='img1' src='https://i.ibb.co/Ss0t33V/image.png' alt='ai'/>
            </div> 
            <div className='port-card2'> 
                <img className='img2' src='https://i.ibb.co/m9H4LMm/image.png' alt='ai'/>
            </div>
            <div className='port-card3'>
                <img className='img3' src='https://i.ibb.co/J5LyWLk/image.png' alt='ai'/>
            </div> 
          </Slider>
          </div>
          <div className='port-section6'>
      <img className='bg-img' src='https://i.ibb.co/WctJPtB/World.png' alt='bg'></img>
      <h1 className='port-right-h5'>Sweat - Fitness</h1>
      <ArrowRightIcon style={{position: 'absolute', zIndex: '1', top: '78%', left: '63%', fontSize: '30px'}}/>
      <ArrowRightIcon style={{position: 'absolute', zIndex: '1', top: '79%', left: '63%', fontSize: '30px'}}/>
      <ArrowRightIcon style={{position: 'absolute', zIndex: '1', top: '80%', left: '63%', fontSize: '30px'}}/>
      <h1 className='h1'>Overview</h1>
      <h1 className='h2'>Features</h1>
      <h1 className='h3'>Technologies</h1>
      <div className='port5-carousel'>
          <Slider {...setting}>
            <div className='port-card1'>
                <img className='img1' src='https://i.ibb.co/Th7M3gw/image.png' alt='ai'/>
            </div> 
            <div className='port-card2'> 
                <img className='img2' src='https://i.ibb.co/pLsk32q/image.png' alt='ai'/>
            </div>
            <div className='port-card3'>
                <img className='img3' src='https://i.ibb.co/CJBKXPc/image.png' alt='ai'/>
            </div> 
          </Slider>
          </div>
          <div className='port-section7'>
      <img className='bg-img' src='https://i.ibb.co/WctJPtB/World.png' alt='bg'></img>
      <h1 className='port-left-h6'>Tourism Web Store</h1>
      <ArrowRightIcon style={{position: 'absolute', zIndex: '1', top: '92%', left: '5%', fontSize: '30px'}}/>
      <ArrowRightIcon style={{position: 'absolute', zIndex: '1', top: '93%', left: '5%', fontSize: '30px'}}/>
      <ArrowRightIcon style={{position: 'absolute', zIndex: '1', top: '94%', left: '5%', fontSize: '30px'}}/>
      <h1 className='h1'>Overview</h1>
      <h1 className='h2'>Features</h1>
      <h1 className='h3'>Technologies</h1>
      <div className='port6-carousel'>
          <Slider {...setting}>
            <div className='port-card1'>
                <img className='img1' src='https://i.ibb.co/xLQGczF/image.png' alt='ai'/>
            </div> 
            <div className='port-card2'> 
                <img className='img2' src='https://i.ibb.co/wgnYbXP/image.png' alt='ai'/>
            </div>
            <div className='port-card3'>
                <img className='img3' src='https://i.ibb.co/68yPsrt/image.png' alt='ai'/>
            </div> 
          </Slider>
          </div>
       </div>
        </div>
        </div>
        </div>
        </div>
      </div>
     )
}

export default Magneto
