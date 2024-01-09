import React, { useState } from 'react';
import '../assets/wrapper/Contact.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {DraftsOutlined,PhoneInTalkOutlined, PinDropOutlined } from '@mui/icons-material';


const Contact = () => {
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
          <Slider className='contact-slider'{...setting}>
            <div className='contact-div'></div> 
              <p className='head-p'>Take your business higher than ever of accomplishment with our 
                  unrivaled administrations.<br/><span>Reach out at this point!</span>
              </p>
              <DraftsOutlined style={{position: 'absolute', zIndex: '2', transform:'scale(3.0)', top: '-20%'}}/>
            <div>
                {/*<p>Take your business higher than ever of accomplishment with our 
                  unrivaled administrations.Reach out at this point!
                 </p>*/}
            </div>
            <div>
                 {/*<p>Take your business higher than ever of accomplishment with our 
                  unrivaled administrations.Reach out at this point!
                 </p>*/}
            </div> 
          </Slider>
      </div>
    </div>
  )
}

export default Contact
