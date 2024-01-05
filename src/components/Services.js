import React, { useState } from 'react';
import '../assets/wrapper/services.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ai from '../assets/images/asi.png';
import desktop from '../assets/images/pc.png';
import laptop from '../assets/images/pc1.png';
import mobile from '../assets/images/mb.png';
import {PhoneInTalk, HeadsetMic, MenuBook} from '@mui/icons-material';



const Services = () => {

    const[setting, setSetting] = useState({
      dots: true,
      infinite: false,
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
    <div className='service-container'>
      <img src='https://i.ibb.co/g95xXs4/Group-4.png' alt='layer' />
      <h2 className='service-heading1'>About Us</h2>
      <div id='line1-service'></div>
      <div id='line2-service'></div>
      <div id='line3-service'></div>
      <h1 className='service-heading2'>Check out Our Services</h1>
      <p className='service-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
      standard dummy text ever since the 1500s, when an unknown</p>
      <div className='carousel'>
          <Slider {...setting}>
            <div className='cards'>
              <div className='circle'>
                <img src={ai} alt='ai'/>
              </div>
                <h3 className='h1-ai'>Artificial intelligence</h3>
                <p className='p1-ai'>Lorem Ipsum is simply dummy text of the <br/>printing and 
                typesetting industry. Lorem Ipsum <br/>has been the industry's 
                standard dummy text <br/>ever since the 1500s, when an unknown</p>
            </div> 
            <div className='cards'>
              <div className='circle'>
                <img src={desktop} alt='ai'/>
              </div>
                <h3 className='h2-ai'>Graphic Design</h3>
                <p className='p2-ai'>Lorem Ipsum is simply dummy text of the <br/>printing and 
                typesetting industry. Lorem Ipsum <br/>has been the industry's 
                standard dummy text <br/>ever since the 1500s, when an unknown</p>
            </div>
            <div className='cards'>
              <div className='circle'>
                <img src={laptop} alt='ai'/>
              </div>
                <h3 className='h3-ai'>Web Design & Developement</h3>
                <p className='p3-ai'>Lorem Ipsum is simply dummy text of the <br/>printing and 
                typesetting industry. Lorem Ipsum <br/>has been the industry's 
                standard dummy text <br/>ever since the 1500s, when an unknown</p>
            </div> 
            <div className='cards'>
              <div className='circle'>
                <img src={mobile} alt='ai'/>
              </div>
                <h3 className='h4-ai'>Artificial intelligence</h3>            
                <p className='p4-ai'>Lorem Ipsum is simply dummy text of the <br/>printing and 
                typesetting industry. Lorem Ipsum <br/>has been the industry's 
                standard dummy text <br/>ever since the 1500s, when an unknown</p>
            </div>  
            <div className='cards'>
              <div className='circle'>
                <img src={ai} alt='ai'/>
              </div>
                <h3 className='h5-ai'>Artificial intelligence</h3>
                <p className='p5-ai'>Lorem Ipsum is simply dummy text of the <br/>printing and 
                typesetting industry. Lorem Ipsum <br/>has been the industry's 
                standard dummy text <br/>ever since the 1500s, when an unknown</p>
            </div> 
            <div className='cards'>
              <div className='circle'>
                <img src={desktop} alt='ai'/>
              </div>
                <h3 className='h6-ai'>Graphic Design</h3>
                <p className='p6-ai'>Lorem Ipsum is simply dummy text of the <br/>printing and 
                typesetting industry. Lorem Ipsum <br/>has been the industry's 
                standard dummy text <br/>ever since the 1500s, when an unknown</p>
            </div>
            <div className='cards'>
              <div className='circle'>
                <img src={laptop} alt='ai'/>
              </div>
                <h3 className='h7-ai'>Web Design & Developement</h3>
                <p className='p7-ai'>Lorem Ipsum is simply dummy text of the <br/>printing and 
                typesetting industry. Lorem Ipsum <br/>has been the industry's 
              standard dummy text <br/>ever since the 1500s, when an unknown</p>
            </div> 
            <div className='cards'>
              <div className='circle'>
                <img src={mobile} alt='ai'/>
              </div>
                <h3 className='h8-ai'>Artificial intelligence</h3>            
                <p className='p8-ai'>Lorem Ipsum is simply dummy text of the <br/>printing and 
                typesetting industry. Lorem Ipsum <br/>has been the industry's 
                standard dummy text <br/>ever since the 1500s, when an unknown</p>
            </div>  
          </Slider>
      </div>
      <div className='service-box'>
      &nbsp;
      <PhoneInTalk className='service-phone'/>
      <p className='service-phone-p'>Have Questions Call Us Now!<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      (877)229-0844</p>
      <HeadsetMic style={{position: 'absolute', color: '#fff', transform: 'scale(2.5)', left: '48%', top: '20%'}} classsName='service-headset'/>
      <p className='service-headset-p'>Live Chat With Expert<br/>It's Free 24/7</p>
      <MenuBook style={{position: 'absolute', color: '#fff', transform: 'scale(2.5)', left: '80%', top: '20%'}} classsName='service-book'/>
      <p className='service-book-p'>Estimate Your Project's Cost<br/>Talk to Consultant</p>
      </div>
  </div>  
  
  )
}

export default Services
