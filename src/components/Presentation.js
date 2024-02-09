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
            },
            {
              heading: 'AutoParts - Motor Mods',
              imageSrc:'https://i.ibb.co/Bq12K1k/mobilw-mock-STEP-TECH-GRADIENT.jpg',
            },
            {
              heading: 'Tourism Web',
              imageSrc: 'https://i.ibb.co/kByNQSR/BRANDING.jpg',
            },
            {
              heading: 'Music Web',
              imageSrc: 'https://i.ibb.co/xX7n3gV/brochure.jpg', 
            },
            {
              heading: 'Sweat - Fitness',
              imageSrc: 'https://i.ibb.co/t3X5q2f/LOGOS.jpg', 
            },
            {
              heading: 'Nutritional Web',
              imageSrc: 'https://i.ibb.co/Kyw0Mnf/WHITE-PAPER.jpg',  
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
              
            },
            {
              heading: 'AutoParts - Motor Mods',
              imageSrc:'https://i.ibb.co/Bq12K1k/mobilw-mock-STEP-TECH-GRADIENT.jpg',
              
            },
            {
                heading: 'Tourism Web',
                imageSrc: 'https://i.ibb.co/kByNQSR/BRANDING.jpg', 
            },
            {
                heading: 'Music Web',
                imageSrc: 'https://i.ibb.co/xX7n3gV/brochure.jpg', 
            },
            {
                heading: 'Sweat - Fitness',
                imageSrc: 'https://i.ibb.co/t3X5q2f/LOGOS.jpg', 
            },
            {
                heading: 'Nutritional Web',
                imageSrc: 'https://i.ibb.co/Kyw0Mnf/WHITE-PAPER.jpg', 
            },
          ],
        });
        break;
        case 'app':
        setContent({
          items: [
            {
              heading: 'Study App',
              imageSrc: 'https://i.ibb.co/XV1dQq0/web-mockupe.jpg',
            },
            {
              heading: 'Rental Service',
              imageSrc:'https://i.ibb.co/Bq12K1k/mobilw-mock-STEP-TECH-GRADIENT.jpg',
            },
            {
                heading: 'Real Estate',
                imageSrc: 'https://i.ibb.co/kByNQSR/BRANDING.jpg', 
            },
            {
                heading: 'eShaafi: Healthcare',
                imageSrc: 'https://i.ibb.co/xX7n3gV/brochure.jpg', 
            },
            {
                heading: 'Casamundo',
                imageSrc: 'https://i.ibb.co/t3X5q2f/LOGOS.jpg', 
            },
            {
                heading: 'Sneaker Den',
                imageSrc: 'https://i.ibb.co/Kyw0Mnf/WHITE-PAPER.jpg', 
                buttonPosition: {position: 'absolute', left: '100%' },
            },
          ],
        });
        break;
        case 'game':
        setContent({
          items: [
            {
              heading: 'Ultimate Racer',
              imageSrc: 'https://i.ibb.co/XV1dQq0/web-mockupe.jpg',
            },
            {
              heading: 'Arcade',
              imageSrc:'https://i.ibb.co/Bq12K1k/mobilw-mock-STEP-TECH-GRADIENT.jpg',
            },
            {
                heading: 'Fantasy Game',
                imageSrc: 'https://i.ibb.co/kByNQSR/BRANDING.jpg', 
            },
            {
                heading: 'Ultimate Shooter',
                imageSrc: 'https://i.ibb.co/xX7n3gV/brochure.jpg', 
            },
            {
                heading: 'The Hallowen Nightmare',
                imageSrc: 'https://i.ibb.co/t3X5q2f/LOGOS.jpg', 
            },
            {
                heading: 'RPG Game',
                imageSrc: 'https://i.ibb.co/Kyw0Mnf/WHITE-PAPER.jpg', 
                buttonPosition: {position: 'absolute', top: '20%', left: '100%' },
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
        <Grid item xs={6} md={4} className='present-grid1'>
        <Item className='present-item1'>
            <img src={content.items[0].imageSrc} alt='web-mockup'/>
            <h1>{content.items[0].heading}</h1>
            <Link to='/portfolio' className='present-btn'>Click Here</Link>
        </Item>
        </Grid>
    ))}
        <Grid item xs={6} md={4} className='present-grid2'>
        <Item className='present-item2'>
            <img src={content.items[1].imageSrc} alt='app-mockup'/>
            <h1>{content.items[1].heading}</h1>
            <Link to='/portfolio' className='present-btn'>Click Here</Link>
        </Item>
        </Grid>

        <Grid item xs={6} md={4} className='present-grid3'>
        <Item className='present-item3'>
            <img src={content.items[2].imageSrc} alt='branding'/>
            <h1>{content.items[2].heading}</h1>
            <Link to='/portfolio' className='present-btn'>Click Here</Link>
        </Item>
        </Grid>

        <Grid item xs={6} md={4} className='present-grid4'>
        <Item className='present-item4'>
            <img src={content.items[3].imageSrc} alt='brochure'/>
            <h1>{content.items[3].heading}</h1>
            <Link to='/portfolio' className='present-btn'>Click Here</Link>
        </Item>
        </Grid>

        <Grid item xs={6} md={4} className='present-grid5'>
        <Item className='present-item5'>
            <img src={content.items[4].imageSrc} alt='logo'/>
            <h1>{content.items[4].heading}</h1>
            <Link to='/portfolio' className='present-btn'>Click Here</Link>
        </Item>
        </Grid>

        <Grid item xs={6} md={4} className='present-grid6'>
        <Item className='present-item6'>
            <img src={content.items[5].imageSrc} alt='whitepaper'/>
            <h1>{content.items[5].heading}</h1>
            <Link to='/portfolio' className='present-btn'>Click Here</Link>
        </Item>
        </Grid>

        </Grid>
    </div>
  )
}

export default Presentation
