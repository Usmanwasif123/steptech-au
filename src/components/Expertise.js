import React from 'react';
import '../assets/wrapper/Expertise.css';
import { Grid, styled, Paper } from '@mui/material';
import { ShoppingCart, HeadsetMic, Cloud, 
         Home, ConnectWithoutContact, SportsGymnastics,
         SignalCellularAlt, LocalHospital, Flight, 
         MonitorHeart, Celebration, PersonalVideo}
     from '@mui/icons-material';

const Expertise = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === '#fff',
        padding: theme.spacing(2),
        textAlign: 'center',
        border: '2px solid #333',
        borderRadius: '10px',
        margin: '5px',
      }));

  return (
    <div className='expertise-container'>
        <h1 className='exper-heading'>OUR INDUSTRY EXPERTISE</h1>
        <p className='exper-p'>Step Tech Global digital service provider. We’ve provided many services to clients of all industries 
            for 14+ years. Our digital marketing services include web and app development, mobile app development 
            services, and various custom solutions, including blockchain, AR/VR Development, Artificial Intelligence 
            development, and more. We also offer expert game development services like 2D, 3D, and RPG game 
            development,etc. Don’t just partner with any digital service agency; work with a trustworthy company for 
            your business growth.
        </p>
        <Grid container spacing={-5}>
        <Grid item xs={6} md={3}>
        <Item>
            <ShoppingCart style={{marginLeft: '-240px',paddingTop: '10px', transform:'scale(2.5)'}}/>
            <h1 className='Ecommerce'>Ecommerce</h1> 
        </Item>
        </Grid>
        <Grid item xs={6} md={3}>
        <Item>
            <HeadsetMic style={{marginLeft: '-240px',paddingTop: '10px', transform:'scale(2.5)'}}/>
            <h1 className='Entertainment'>Entertainment</h1> 
        </Item>
        </Grid>
        <Grid item xs={6} md={3}>
        <Item>
            <Cloud style={{marginLeft: '-250px',paddingTop: '10px', transform:'scale(2.5)'}}/>
            <h1 className='NewsWeather'>News & Weather</h1> 
        </Item>
        </Grid>
        <Grid item xs={6} md={3}>
        <Item>
            <Home style={{marginLeft: '-250px',paddingTop: '10px', transform:'scale(2.5)'}}/>
            <h1 className='Realestate'>Real Estate</h1>
        </Item>
        </Grid>
        <Grid item xs={6} md={3}>
        <Item>
            <ConnectWithoutContact style={{marginLeft: '-250px',paddingTop: '10px', transform:'scale(2.5)'}}/>
            <h1 className='Social'>Social Networking</h1>
        </Item>
        </Grid>
        <Grid item xs={6} md={3}>
        <Item>
            <SportsGymnastics style={{marginLeft: '-250px',paddingTop: '10px', transform:'scale(2.5)'}}/>
            <h1 className='Sports'>Sports</h1>
        </Item>
        </Grid>
        <Grid item xs={6} md={3}>
        <Item>
            <SignalCellularAlt style={{marginLeft: '-250px',paddingTop: '10px', transform:'scale(2.5)'}}/>
            <h1 className='OnDemand'>On Demand</h1>
        </Item>
        </Grid>
        <Grid item xs={6} md={3}>
        <Item>
            <LocalHospital style={{marginLeft: '-250px',paddingTop: '10px', transform:'scale(2.5)'}}/>
            <h1 className='Healthcare'>Healthcare</h1>
        </Item>
        </Grid>
        <Grid item xs={6} md={3}>
        <Item>
            <Flight style={{marginLeft: '-250px',paddingTop: '10px', transform:'scale(2.5)'}}/>
            <h1 className='Airline'>Airline</h1>
        </Item>
        </Grid>
        <Grid item xs={6} md={3}>
        <Item>
            <MonitorHeart style={{marginLeft: '-250px',paddingTop: '10px', transform:'scale(2.5)'}}/>
            <h1 className='Medical'>Medical</h1>
        </Item>
        </Grid>
        <Grid item xs={6} md={3}>
        <Item>
            <Celebration style={{marginLeft: '-250px',paddingTop: '10px', transform:'scale(2.5)'}}/>
            <h1 className='Event'>Event</h1>
        </Item>
        </Grid>
        <Grid item xs={6} md={3}>
        <Item>
            <PersonalVideo style={{marginLeft: '-250px',paddingTop: '10px', transform:'scale(2.5)'}}/>
            <h1 className='Entertainments'>Entertainments</h1>
        </Item>
        </Grid>
        </Grid>
    </div>
  )
}

export default Expertise
