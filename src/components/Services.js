import React, { useState} from 'react';
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
    <div className='service-container'>
      <img src='https://i.ibb.co/g95xXs4/Group-4.png' alt='layer' />
      <h2 className='service-heading1'>About Us</h2>
      <div id='line1-service'></div>
      <div id='line2-service'></div>
      <div id='line3-service'></div>
      <h1 className='service-heading2'>Check out Our Services</h1>
      <p className='service-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
      standard dummy text ever since the 1500s, when an unknown</p>
      <div className='service-carousel'>
          <Slider {...setting}>
            <div className='card1'>
              <img className='circle1' src='https://i.ibb.co/1QnZmL0/circle.png'/>
                <img className='ai' src='https://i.ibb.co/m6Cw4yy/image.png' alt='ai' />
                <h3 className='h1-f'>Graphics Designing</h3>
                <p className='p1-f'>Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown</p>
            </div> 
            <div className='card2'>
              <img className='circle2' src='https://i.ibb.co/1QnZmL0/circle.png'/>
              <img className='ai' src='https://i.ibb.co/L85bTDp/image.png' alt='ai' /> 
                <h3 className='h2-g'>Website Design & Development</h3>
                <p className='p2-g'>Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown</p>
            </div>
            <div className='card3'>
            <img className='circle3' src='https://i.ibb.co/1QnZmL0/circle.png'/>
            <img className='ai' src='https://i.ibb.co/c1zmjbq/image.png' alt='ai' />  
                <h3 className='h3-w'>App Design & Development</h3>
                <p className='p3-w'>Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown</p>
            </div> 
            <div className='card4'>
            <img className='circle4' src='https://i.ibb.co/1QnZmL0/circle.png'/>
            <img className='ai' src='https://i.ibb.co/TBCTC94/image.png' alt='ai' />
                <h3 className='h4-a'>Software Development</h3>            
                <p className='p4-a'>Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown</p>
            </div>  
            <div className='card5'>
            <img className='circle5' src='https://i.ibb.co/1QnZmL0/circle.png'/>
            <img className='ai' src='https://i.ibb.co/m6Cw4yy/image.png' alt='ai' />               
                <h3 className='h5-b'>Search Engine Optimization</h3>
                <p className='p5-b'>Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown</p>
            </div> 
            <div className='card6'>
            <img className='circle6' src='https://i.ibb.co/1QnZmL0/circle.png'/>
            <img className='ai' src='https://i.ibb.co/m6Cw4yy/image.png' alt='ai' />               
                <h3 className='h6-c'>Social Media Management</h3>
                <p className='p6-c'>Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown</p>
            </div>
            <div className='card7'>
            <img className='circle7' src='https://i.ibb.co/1QnZmL0/circle.png'/>
            <img className='ai' src='https://i.ibb.co/m6Cw4yy/image.png' alt='ai' />             
                <h3 className='h7-d'>Digital Marketing</h3>
                <p className='p7-d'>Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown</p>
            </div> 
            <div className='card8'>
            <img className='circle8' src='https://i.ibb.co/1QnZmL0/circle.png'/>
            <img className='ai' src='https://i.ibb.co/m6Cw4yy/image.png' alt='ai' />            
                <h3 className='h8-e'>E-Commerce</h3>            
                <p className='p8-e'>Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown</p>
            </div>
            <div className='card9'>
            <img className='circle9' src='https://i.ibb.co/1QnZmL0/circle.png'/>
            <img className='ai' src='https://i.ibb.co/m6Cw4yy/image.png' alt='ai' />            
                <h3 className='h9-e'>Game Design & Development</h3>            
                <p className='p9-e'>Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown</p>
            </div> 
            <div className='card10'>
            <img className='circle10' src='https://i.ibb.co/1QnZmL0/circle.png'/>
            <img className='ai' src='https://i.ibb.co/m6Cw4yy/image.png' alt='ai' />            
                <h3 className='h10-e'>2D/3D Animation</h3>            
                <p className='p10-e'>Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown</p>
            </div> 
            <div className='card11'>
            <img className='circle11' src='https://i.ibb.co/1QnZmL0/circle.png'/>
            <img className='ai' src='https://i.ibb.co/m6Cw4yy/image.png' alt='ai' />            
                <h3 className='h11-e'>Block Chain Development</h3>            
                <p className='p11-e'>Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown</p>
            </div> 
            <div className='card12'>
            <img className='circle12' src='https://i.ibb.co/1QnZmL0/circle.png'/>
            <img className='ai' src='https://i.ibb.co/m6Cw4yy/image.png' alt='ai' />            
                <h3 className='h12-e'>NFT</h3>            
                <p className='p12-e'>Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown</p>
            </div> 
            <div className='card13'>
            <img className='circle13' src='https://i.ibb.co/1QnZmL0/circle.png'/>
            <img className='ai' src='https://i.ibb.co/m6Cw4yy/image.png' alt='ai' />            
                <h3 className='h13-e'>Artificial Intelligence</h3>            
                <p className='p13-e'>Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown</p>
            </div> 
          </Slider>
      </div>
      <div className='service-box'>
      &nbsp;
      <PhoneInTalk className='service-phone'/>
      <p className='service-phone-p'>Have Questions Call Us Now!<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      (877)229-0844</p>
      <HeadsetMic style={{position: 'absolute', color: '#fff', transform: 'scale(2.5)', left: '48%', top: '20%'}} classsName='service-headset'/>
      <p className='service-headset-p'>Live Chat With Expert<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It's Free 24/7</p>
      <MenuBook style={{position: 'absolute', color: '#fff', transform: 'scale(2.5)', left: '80%', top: '20%'}} classsName='service-book'/>
      <p className='service-book-p'>Estimate Your Project's Cost<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Talk to Consultant</p>
      </div>
  </div>  
  </div>  
  )
}

export default Services
