import React, {useState} from 'react';
import '../assets/wrapper/Presentation.css';
import { Grid, styled, Paper } from '@mui/material';
import { Link } from 'react-router-dom';


const Presentation = () => {
    const [content, setContent] = useState({
        items: [
            {
              heading: 'Clothing Brand',
              imageSrc: 'https://i.ibb.co/XV1dQq0/web-mockupe.jpg',
              buttonPosition: {marginLeft: '-50px'},
              headingPosition: {marginLeft: '-100px'}
            },
            {
              heading: 'AutoParts - Motor Mods',
              imageSrc:'https://i.ibb.co/Bq12K1k/mobilw-mock-STEP-TECH-GRADIENT.jpg',
              buttonPosition: {marginLeft: '-120px', marginTop: '50px'},
              
            },
            {
              heading: 'Tourism Web',
              imageSrc: 'https://i.ibb.co/kByNQSR/BRANDING.jpg',
              buttonPosition: {marginLeft: '-170px'},
            },
            {
              heading: 'Music Web',
              imageSrc: 'https://i.ibb.co/xX7n3gV/brochure.jpg',
              buttonPosition: {marginLeft: '-160px'}, 
            },
            {
              heading: 'Sweat - Fitness',
              imageSrc: 'https://i.ibb.co/t3X5q2f/LOGOS.jpg', 
              buttonPosition: {marginLeft: '-180px'},
            },
            {
              heading: 'Nutritional Web',
              imageSrc: 'https://i.ibb.co/Kyw0Mnf/WHITE-PAPER.jpg',
              buttonPosition: {marginLeft: '-30px'}, 
              buttonPosition: {marginLeft: '-180px'}, 
            },
          ],
});

const handleButtonClick = (category) => {
    switch (category) {
      case 'web':
        setContent({
          items: [
            {
              heading: 'Clothing Brand',
              imageSrc: 'https://i.ibb.co/XV1dQq0/web-mockupe.jpg',
              buttonPosition: {marginLeft: '-50px'},
              headingPosition: {marginLeft: '-100px'}
            },
            {
              heading: 'AutoParts - Motor Mods',
              imageSrc:'https://i.ibb.co/Bq12K1k/mobilw-mock-STEP-TECH-GRADIENT.jpg',
              buttonPosition: {marginLeft: '-120px', marginTop: '50px'},
              
            },
            {
                heading: 'Tourism Web',
                imageSrc: 'https://i.ibb.co/kByNQSR/BRANDING.jpg', 
                buttonPosition: {marginLeft: '-170px'},
            },
            {
                heading: 'Music Web',
                imageSrc: 'https://i.ibb.co/xX7n3gV/brochure.jpg', 
                buttonPosition: {marginLeft: '-160px'}, 
            },
            {
                heading: 'Sweat - Fitness',
                imageSrc: 'https://i.ibb.co/t3X5q2f/LOGOS.jpg', 
               buttonPosition: {marginLeft: '-180px'}, 
            },
            {
                heading: 'Nutritional Web',
                imageSrc: 'https://i.ibb.co/Kyw0Mnf/WHITE-PAPER.jpg', 
               buttonPosition: {marginLeft: '-180px'}, 
            },
          ],
        });
        break;
        case 'app':
        setContent({
          items: [
            {
              heading: 'Study App',
              imageSrc: 'https://i.ibb.co/jfMQP47/image.png',
              buttonPosition: {marginLeft: '-70px'},
            },
            {
              heading: 'Rental Service',
              imageSrc:'https://i.ibb.co/ZL8Z9Tg/image.png',
              buttonPosition: {marginLeft: '-160px', marginTop: '70px'}
            },
            {
                heading: 'Real Estate',
                imageSrc: 'https://i.ibb.co/mhcNLsM/image.png', 
                buttonPosition: {marginLeft: '-170px'},
            },
            {
                heading: 'eShaafi: Healthcare',
                imageSrc: 'https://i.ibb.co/z4688Pd/image.png', 
                buttonPosition: {marginLeft: '-200px'}, 
            },
            {
                heading: 'Casamundo',
                imageSrc: 'https://i.ibb.co/Hz12WV1/image.png',
                buttonPosition: {marginLeft: '-180px'},  
            },
            {
                heading: 'Sneaker Den',
                imageSrc: 'https://i.ibb.co/GR1Cdkf/image.png', 
                buttonPosition: {marginLeft: '-180px'}, 
                
            },
          ],
        });
        break;
        case 'game':
        setContent({
          items: [
            {
              heading: 'Ultimate Racer',
              imageSrc: 'https://i.ibb.co/Jtr7GR4/image.png',
              buttonPosition: {marginLeft: '-70px'},
            },
            {
              heading: 'Arcade',
              imageSrc:'https://i.ibb.co/zSn0nnb/image.png',
              buttonPosition: {marginLeft: '-160px', marginTop: '70px'}
            },
            {
                heading: 'Fantasy Game',
                imageSrc: 'https://i.ibb.co/whN4k08/image.png', 
                buttonPosition: {marginLeft: '-170px'},
            },
            {
                heading: 'Ultimate Shooter',
                imageSrc: 'https://i.ibb.co/k4hjTdm/image.png',
                buttonPosition: {marginLeft: '-200px'},  
            },
            {
                heading: 'The Hallowen Nightmare',
                imageSrc: 'https://i.ibb.co/YWVvx2j/image.png', 
                buttonPosition: {marginLeft: '-180px'},
            },
            {
                heading: 'RPG Game',
                imageSrc: 'https://i.ibb.co/qFM2Zmy/image.png', 
                buttonPosition: {marginLeft: '-180px'}, 
            },
          ],
        });
    }
  };
    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(10),
        textAlign: 'center',
        background:  'linear-gradient(256deg, #6347AA 7.85%, #233F81 107.97%)',
        position: 'absolute',
        width: '250px',
        height: '200px',
        left: '-100%',
        top: "-250%",
    }));
  return (
    <div className='present-container'>
    <button className='webpresent-btn' onClick={() => handleButtonClick('web')}>
        Web Developement
      </button>
      <button className='apppresent-btn' onClick={() => handleButtonClick('app')}>
        App Developement
      </button>
      <button className='gamepresent-btn' onClick={() => handleButtonClick('game')}>
        Game Developement
      </button>
      <Grid container spacing={5}>
      {content.items.map((item, index) => (
        <React.Fragment key={index}>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index} className='present-grid1'>
        <Item className='present-item1'>
            <img src={content.items[0].imageSrc} alt='web-mockup'/>
            <h1 style={item.headingPosition}>{content.items[0].heading}</h1>
            <Link to={'/portfolio'} className='present-btn' style={content.items[0].buttonPosition}>Click Here</Link>
        </Item>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index} className='present-grid2'>
        <Item className='present-item2'>
            <img src={content.items[1].imageSrc} alt='app-mockup'/>
            <h1>{content.items[1].heading}</h1>
            <Link to='/portfolio' className='present-btn' style={content.items[1].buttonPosition}>Click Here</Link>
        </Item>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index} className='present-grid3'>
        <Item className='present-item3'>
            <img src={content.items[2].imageSrc} alt='branding'/>
            <h1>{content.items[2].heading}</h1>
            <Link to='/portfolio' className='present-btn' style={content.items[2].buttonPosition}>Click Here</Link>
        </Item>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index} className='present-grid4'>
        <Item className='present-item4'>
            <img src={content.items[3].imageSrc} alt='brochure'/>
            <h1>{content.items[3].heading}</h1>
            <Link to='/portfolio' className='present-btn' style={content.items[3].buttonPosition}>Click Here</Link>
        </Item>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index} className='present-grid5'>
        <Item className='present-item5'>
            <img src={content.items[4].imageSrc} alt='logo'/>
            <h1>{content.items[4].heading}</h1>
            <Link to='/portfolio' className='present-btn' style={content.items[4].buttonPosition}>Click Here</Link>
        </Item>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index} className='present-grid6'>
        <Item className='present-item6'>
            <img src={content.items[5].imageSrc} alt='whitepaper'/>
            <h1>{content.items[5].heading}</h1>
            <Link to='/portfolio' className='present-btn' style={content.items[5].buttonPosition}>Click Here</Link>
        </Item>
        </Grid>
        </React.Fragment>
    ))}
        </Grid>
    </div>
  )
}

export default Presentation
