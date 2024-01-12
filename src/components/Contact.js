import React, { useState } from 'react';
import '../assets/wrapper/Contact.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {DraftsOutlined,PhoneInTalkOutlined, PinDropOutlined } from '@mui/icons-material';
import { Grid, styled, Paper } from '@mui/material';


const Contact = () => {
  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(10),
    textAlign: 'center',
    background: 'transparent',
    border: '1px solid #fff',
    position: 'absolute',
    height: '100px',
    width: '70px',
    left: '10%',
    top: '-100%',
}));

  const[setting, setSetting] = useState({
    dots: true,
    infinite: true,
    autoplay: false,
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

  const forminitial={
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  }
  const [values, setValues]= useState(forminitial)

  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({...forminitial, [name]: value});
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const {firstname, lastname, email, phone, message } = values;
  }

  return (
    <div className='contact-container'>
      <img src='https://i.ibb.co/chrdsWb/contact.png' alt='contact-bg'/>
      <div className='contact-box'>&nbsp;</div>
      <h1>Contact<span>us</span></h1>
      <p>Get To Know More About  By Connecting With Us.</p>
      <form className='contact-form' onSubmit={onSubmit}>
      <input className='firstname-input' type='text' name='First Name' value={values.firstname} placeholder='First Name' handleChange={handleChange}/>
      <input className='lastname-input'type='text' name='Last Name'value={values.lastname} placeholder='Last Name'  handleChange={handleChange}/>
      <input className='email-input' type='email' name='Email' value={values.email} placeholder='Email'  handleChange={handleChange}/>
      <input className='phone-input' type='tel' name='Phone Number' value={values.phone} placeholder='Phone Number'  handleChange={handleChange}/>
      <textarea className='message-input' name='Message' value={values.message} placeholder='Message' handleChange={handleChange}></textarea>
      <button className='submit-btn' type='submit'>send message</button>
      </form>
      <div className='contact-box1' >&nbsp;</div>
      <div className='contact-carousel'>
          <Slider {...setting}>
            <div>
            <h3 className='contact-ai'>Take your business higher than ever of accomplishment with our 
            unrivaled administrations.
            </h3>
            <DraftsOutlined style={{position: 'absolute', zIndex: '3', top: '45%', fontSize: '40px', color: '#fff'}}/>
            <p>sales@steptechglobal.com</p>
            <PhoneInTalkOutlined style={{position: 'absolute', zIndex: '3', top: '70%', fontSize: '40px', color: '#fff'}}/>
            <p>+61 410 025 346</p>
            <PinDropOutlined style={{position: 'absolute', zIndex: '3', top: '90%', fontSize: '40px', color: '#fff'}}/>
            <p>Australia</p>
            </div> 
            <div>
            <h3 className='contact-ai'>Take your business higher than ever of accomplishment with our 
            unrivaled administrations.
            </h3>
            <DraftsOutlined style={{position: 'absolute', zIndex: '3', top: '45%', fontSize: '40px', color: '#fff'}}/>
            <p className='contact-email-p'>sales@steptechglobal.com</p>
            <PhoneInTalkOutlined style={{position: 'absolute', zIndex: '3', top: '70%', fontSize: '40px', color: '#fff'}}/>
            <p>+61 410 025 346</p>
            <PinDropOutlined style={{position: 'absolute', zIndex: '3', top: '90%', fontSize: '40px', color: '#fff'}}/>
            <p>Australia</p>
            </div>
            <div>
            <h3 className='contact-ai'>Take your business higher than ever of accomplishment with our 
            unrivaled administrations.
            </h3>
            <DraftsOutlined style={{position: 'absolute', zIndex: '3', top: '45%', fontSize: '40px', color: '#fff'}}/>
            <p>sales@steptechglobal.com</p>
            <PhoneInTalkOutlined style={{position: 'absolute', zIndex: '3', top: '70%', fontSize: '40px', color: '#fff'}}/>
            <p>+61 410 025 346</p>
            <PinDropOutlined style={{position: 'absolute', zIndex: '3', top: '90%', fontSize: '40px', color: '#fff'}}/>
            <p>Australia</p>
            </div> 
          </Slider>
      </div>
    </div>
  )
}

export default Contact
