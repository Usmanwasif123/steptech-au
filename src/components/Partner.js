import React from 'react';
import '../assets/wrapper/Partner.css';
import { Grid, styled, Paper } from '@mui/material';

const Partner = () => {
    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(10),
        textAlign: 'center',
        background:  '#E3E4F6',
        position: 'absolute',
        height: '40px',
        width: '70px',
        left: '2%',

    }));
  return (
    <div className='partner-container'>
      <Grid container spacing={5}>
        <Grid item xs={6} md={4} className='partner-grid1'>
        <Item className='partner-item1'>
            <img src='https://i.ibb.co/hgkfw35/image1.png' alt='campaign'/>
        </Item>
        </Grid>
        <Grid item xs={6} md={4} className='partner-grid2'>
        <Item className='partner-item2'>
            <img src='https://i.ibb.co/hgkfw35/image1.png' alt='campaign'/>
        </Item>
        </Grid>
        <Grid item xs={6} md={4} className='partner-grid3'>
        <Item className='partner-item3'>
            <img src='https://i.ibb.co/hgkfw35/image1.png' alt='campaign'/>
        </Item>
        </Grid>
        <Grid item xs={6} md={4} className='partner-grid4'>
        <Item className='partner-item4'>
            <img src='https://i.ibb.co/hgkfw35/image1.png' alt='campaign'/>
        </Item>
        </Grid>
        <Grid item xs={6} md={4} className='partner-grid5'>
        <Item className='partner-item5'>
            <img src='https://i.ibb.co/hgkfw35/image1.png' alt='campaign'/>
        </Item>
        </Grid>
        </Grid>
        <h1>Best Web and App Development Company in <br/>Wyoming, USA</h1>
        <div id='line-partner'></div>
        <p>Are you also looking for the best web and app development company in the USA? Then stop scrolling anymore. 
            Step Tech Global is the best web and mobile app development services provider, but there are more-in-one 
            solutions for all your digital needs. We’ve driven the rollercoaster of startups, so we understand the 
            complexity and conquests of building a prosperous business in Wyoming. We collaborate with you as developers
             and business consultants, assisting you in voyaging the digital landscape and reaching your full potential. 
            No matter what type or size of business you have, we always provide our clients with exceptional service 
            according to their needs. We offer our clients numerous web development services, such as PHP development, 
            ruby web development, c++ web programming, ASP.net web development Services, and many more. Our website 
            development service diminishes the time-consuming coding process for various systems and streamlines your 
            site development and management.
        </p>
    </div>
  )
}

export default Partner
