import React, {useState} from 'react';
import '../assets/MobileAppWrapper/Help.css';
import {KeyboardArrowDownOutlined, Clear } from '@mui/icons-material';

const Help = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className='appsec6-container'>
      <h1>
      Welcome Innovation in Your Business With Progressive Web App Development
      </h1>
      <p>
      Our in-depth knowledge of creating <b>mobile applications</b> adds to our ability to offer 360-degree advanced web app 
      solutions. With our adept <b>app developers</b> at your fingertips, you can continually focus on PWA development to 
      deliver quick, engaging, and cross-platform user experiences. As an established <b>mobile app development services</b> 
      provider, we provide advanced <b>web app development</b> solutions that help companies by integrating clever techniques 
      used in web and mobile apps to streamline creation and execution. With our strong <b>web app solutions,</b> you can offer 
      constant access to app-like elements and functionalities on any device with a web browser, therefore increasing 
      your consumer reach and brand presence.
      </p>
      <button className='appbtn5' onClick={() => setIsVisible(true)}>talk to consultant</button>
      {isVisible && 
        <div className='app6-visible-div'>
          <img style={{height: '300px', width: '500px'}} src='https://i.ibb.co/h8xCwvR/image.png' alt='visible-image' />
          <p className='visible-p1'>We are Friendly & Experienced Development Company</p>
          <p className='visible-p2'>We are here to help!</p>
          <p className='visible-p3'>Take your business higher than ever of accomplishment with our unrivaled administrations.
          <br/>Reach out at this point!</p>
          <form className='visible-contact-form' >
            <input className='full-name' type='text' name='Full Name' placeholder='Full Name' />
            <input className='email' type='email' name='Email' placeholder='Email' />
            <input className='phone-no' type='tel' name='phone no' placeholder='Phone no' />
            <textarea className='message-input' name='Message' placeholder='Enter a brief' />
            <button className='submit-btn' type='submit'>submit request</button>
            <button className='btn-close' onClick={() => setIsVisible(false)}>
            <Clear style={{fontSize: '40px'}}/>
            </button>
          </form>
        </div>
      }
      <div className='left-img'></div>
    </div>
  )
}

export default Help
