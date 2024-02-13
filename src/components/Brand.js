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
          </Slider>
      </div>
        <h1 className='let-heading'>Explore More About Us</h1>
        <div id='line1-brand'></div>
        <div id='line2-brand'></div>
        <div id='line3-brand'></div>
        <h1 className='brand-heading'>What Makes Us Standout In the Crowd</h1>
        <p className='brand-p'>Joining Step Tech means accepting an obligation to excellence rather than simply selecting a 
        service. Our passion, creativity, and dedication to your success are what drive us. We are pioneers of digital 
        accomplishments, not just creators. Our team of experts dedicates themselves to turning your concepts into 
        significant reality since they have an obsession with cutting-edge technology.
        </p>
    </div>
  )
}

export default Brand
