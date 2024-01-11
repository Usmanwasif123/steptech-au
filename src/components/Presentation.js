import React from 'react';
import '../assets/wrapper/Presentation.css';
import { Grid, styled, Paper } from '@mui/material';


const Presentation = () => {
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
      <Grid container spacing={5}>
        <Grid item xs={6} md={4} className='present-grid1'>
        <Item className='present-item1'>
            <img src='https://i.ibb.co/XV1dQq0/web-mockupe.jpg' alt='web-mockup'/>
            <h1>Online Auction Platform</h1>
            <button className='present-btn'>Click Here</button>
        </Item>
        </Grid>
        <Grid item xs={6} md={4} className='present-grid2'>
        <Item className='present-item2'>
            <img src='https://i.ibb.co/Bq12K1k/mobilw-mock-STEP-TECH-GRADIENT.jpg' alt='app-mockup'/>
            <h1>Online Auction Platform</h1>
            <button className='present-btn'>Click Here</button>
        </Item>
        </Grid>
        <Grid item xs={6} md={4} className='present-grid3'>
        <Item className='present-item3'>
            <img src='https://i.ibb.co/kByNQSR/BRANDING.jpg' alt='branding'/>
            <h1>Online Auction Platform</h1>
            <button className='present-btn'>Click Here</button>
        </Item>
        </Grid>
        <Grid item xs={6} md={4} className='present-grid4'>
        <Item className='present-item4'>
            <img src='https://i.ibb.co/xX7n3gV/brochure.jpg' alt='brochure'/>
            <h1>Online Auction Platform</h1>
            <button className='present-btn'>Click Here</button>
        </Item>
        </Grid>
        <Grid item xs={6} md={4} className='present-grid5'>
        <Item className='present-item5'>
            <img src='https://i.ibb.co/t3X5q2f/LOGOS.jpg' alt='logo'/>
            <h1>Online Auction Platform</h1>
            <button className='present-btn'>Click Here</button>
        </Item>
        </Grid>
        <Grid item xs={6} md={4} className='present-grid6'>
        <Item className='present-item6'>
            <img src='https://i.ibb.co/Kyw0Mnf/WHITE-PAPER.jpg' alt='whitepaper'/>
            <h1>Online Auction Platform</h1>
            <button className='present-btn'>Click Here</button>
        </Item>
        </Grid>
        <Grid item xs={6} md={4} className='present-grid7'>
        <Item className='present-item7'>
            <img src='https://i.ibb.co/wz31NHM/SOCIALMEDIA-POST.jpg' alt='socialmedia'/>
            <h1>Online Auction Platform</h1>
            <button className='present-btn'>Click Here</button>
        </Item>
        </Grid>
        <Grid item xs={6} md={4} className='present-grid8'>
        <Item className='present-item8'>
            <img src='https://i.ibb.co/M8HXgdY/web-mockupe-2.jpg' alt='web-mockup'/>
            <h1>Online Auction Platform</h1>
            <button className='present-btn'>Click Here</button>
        </Item>
        </Grid>
        <Grid item xs={6} md={4} className='present-grid9'>
        <Item className='present-item9'>
            <img src='https://i.ibb.co/vdPrh2Y/mobilw-mock-STEP-TECH-GRADIENT-2.jpg' alt='app-mockup'/>
            <h1>Online Auction Platform</h1>
            <button className='present-btn'>Click Here</button>
        </Item>
        </Grid>
        </Grid>
    </div>
  )
}

export default Presentation
