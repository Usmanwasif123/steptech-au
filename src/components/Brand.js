import React, {useState} from 'react';
import '../assets/wrapper/Brand.css';
import { Grid, styled, Paper } from '@mui/material';
import { ShoppingCart, HeadsetMic, Cloud, 
         Home, ConnectWithoutContact, SportsGymnastics,
         SignalCellularAlt, LocalHospital, Flight, 
         MonitorHeart, Celebration, PersonalVideo}
     from '@mui/icons-material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Brand = () => {

  const[setting, setSetting] = useState({
    dots: true,
    infinite: false,
    autoplay: true,
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
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
      });

  return (
    <div className='brand-container'>
      <div className='brand-carousel'>
          <Slider {...setting}>
            <div>
                <img src='https://i.ibb.co/y5VqCNL/image.png' alt='ai'/>
            </div> 
            <div>
                <img src='https://i.ibb.co/x3HCdm5/image.png' alt='ai'/>
            </div>
            <div>
                <img src='https://i.ibb.co/y5VqCNL/image.png' alt='ai'/>
            </div> 
          </Slider>
      </div>
        <h1 className='let-heading'>LET US INTRODUCE YOU!</h1>
        <div id='line1-brand'></div>
        <div id='line2-brand'></div>
        <div id='line3-brand'></div>
        <h1 className='brand-heading'>PERFECT MATCH FOR YOUR CORPORATE BRANDING</h1>
        <p className='brand-p'>Whether you are seeking to revamp or build your brand from scratch, our brand analysts
         ensure uniformity from the brand logo to digital media. We always recommend customizations. However, here we 
         have designed a package only to give you an idea.
        </p>
    </div>
  )
}

export default Brand
