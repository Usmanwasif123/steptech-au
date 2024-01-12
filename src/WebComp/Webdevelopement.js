import React from 'react';
import '../assets/WebWrapper/Webdevelopement.css';
import {Link} from 'react-router-dom';



const Webdevelopement = () => {
  return (
    <div className='consultant-container'>
        <h1>Unleash The Full Potential Of Your Business With &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Stunning Web Development Agency</h1>
        <div id='line'></div>
        <p>
        Are you in search of an impeccable streaming application for your auditory recreation? You may crave a convenient
        food or shopping app to cater to your daily needs. At Step Tech Global, we not only recognize your brand’s
        digital needs but also tailor applications to perfectly fill any gaps in your brand identity with custom web 
        development. Join hands with us to embark on a journey of advanced digital experiences that resonate with your 
        audience.
        </p>
        <Link to='/read-more' className='conbtn-read'>talk to consultant</Link>
    </div>
  )
}

export default Webdevelopement