import React, { useState } from 'react';
import '../assets/wrapper/Contact.css';
import contactGif  from "../assets/videos/contact_gif.mp4";
const Contact = () => {

   const forminitial={
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  }
  const [values, setValues]= useState(forminitial)

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({...values, [name]: value});
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const {firstname, lastname, email, phone, message } = values;
  }
  return (
    <div className='contact-container d-flex flex-column mb-3'>
      <img src='https://i.ibb.co/chrdsWb/contact.png' alt='contact-bg'/>
      <div className='contact-box' style={{borderRadius: '30px'}}>&nbsp;</div>
      <h1 className='main-heading'>Contact<span className='main-span'>us</span></h1>
      <p>Get To Know More About  By Connecting With Us.</p>
      <form className='contact-form' onSubmit={onSubmit} style={{marginLeft: '-5rem'}}>
      <input className='firstname-input' type='text' name='firstname' value={values.firstname} placeholder='First Name' onChange={handleChange}/>
      <input className='lastname-input'type='text' name='lastname'value={values.lastname} placeholder='Last Name'  onChange={handleChange}/>
      <input className='email-input' type='email' name='email' value={values.email} placeholder='Email'  onChange={handleChange}/>
      <input className='phone-input' type='tel' name='phone' value={values.phone} placeholder='Phone Number'  onChange={handleChange}/>
      <textarea className='message-input' name='message' value={values.message} placeholder='Message' onChange={handleChange}></textarea>
      <button className='submit-btn' type='submit'>send message</button>
      </form>
      <div className='video-container'>
      <video autoPlay loop muted>
        <source src={contactGif} type="video/mp4"/>
      </video>
    </div>
    </div>
  )
}

export default Contact
