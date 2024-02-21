import React, { useState } from 'react';
import '../assets/wrapper/Vision.css';
import { Link } from 'react-router-dom';

const About = () => {
  const images = [
    'https://imgtr.ee/images/2024/02/21/62fadf09cc1c385227b233bdff72977e.png',
    'https://imgtr.ee/images/2024/02/20/65da18de939f926930b9430b2e80df64.png',
    'https://imgtr.ee/images/2024/02/20/078be0c22df45ec68a636526f0a045ab.png',
    // Add more image URLs as needed
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const PrevBtn = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? prevIndex : prevIndex - 1));
  };

  const NextBtn = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? prevIndex : prevIndex + 1));
  };

  const isFirstImage = currentImageIndex === 0;
  const isLastImage = currentImageIndex === images.length - 1;

  return (
    <div className='main-section2'>
      <h1 className='right-vision'>About Us</h1>
      <div id='line1-vision'></div>
      <div id='line2-vision'></div>
      <div id='line3-vision'></div>
      <h1 className='right-heading'>Maximize the High Potential of Your Business</h1>
      <p className='right-p'>
        Step Tech is the most prominent website development company in Australia. We were established in 2015 to provide
        our customers with an unparalleled digital experience. We are not just building your website. We are building
        your business. We go beyond the ordinary for our clients by offering unique, customized, and productive
        solutions. Whether it is a web app, mobile app, game app development, or any IT Solution- it will be one of a
        kind.
        <br />
        <br />
        Step Tech is a hub for growth, education, and exploration for creative individuals. We are an eclectic bunch of
        brave and creative thinkers from every background. Our focus on inclusion throughout the organization offers our
        personnel enormous opportunities, and our open culture propels achievement for our clients.
      </p>
      <Link to='/portfolio' className='btn-visionread'>
        see projects
      </Link>
      <div className='vision-image'>
        <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
      </div>
      <div
        className='btn-box'
        style={{
          background: '#fff',
          padding: '40px 50px',
          marginTop: '-130px',
          marginLeft: '-550px',
          zIndex: '3',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <button
          onClick={PrevBtn}
          className='prev-btn'
          style={{
            color: isFirstImage ? '#ccc' : '#000',
            border: 'none',
            fontSize: '15px',
            background: 'none',
            fontWeight: '600',
            marginLeft: '-10px',
            cursor: isFirstImage ? 'not-allowed' : 'pointer',
            textTransform: 'uppercase',
            transition: '.4s cubic-bezier(0,0,.3642,1)',
          }}
          disabled={isFirstImage}
        >
          Prev
        </button>
        <button
          onClick={NextBtn}
          className='next-btn'
          style={{
            color: isLastImage ? '#ccc' : '#000',
            border: 'none',
            fontSize: '15px',
            background: 'none',
            fontWeight: '600',
            cursor: isLastImage ? 'not-allowed' : 'pointer',
            textTransform: 'uppercase',
            marginLeft: '50px',
            transition: '.4s cubic-bezier(0,0,.3642,1)',
          }}
          disabled={isLastImage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default About;
