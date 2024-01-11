import React from 'react';
import '../assets/wrapper/Brand.css';
import { Grid, styled, Paper } from '@mui/material';
import { ShoppingCart, HeadsetMic, Cloud, 
         Home, ConnectWithoutContact, SportsGymnastics,
         SignalCellularAlt, LocalHospital, Flight, 
         MonitorHeart, Celebration, PersonalVideo}
     from '@mui/icons-material';

const Brand = () => {
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
        <h1 className='let-heading'>LET US INTRODUCE YOU!</h1>
        <div id='line1-brand'></div>
        <div id='line2-brand'></div>
        <div id='line3-brand'></div>
        <h1 className='brand-heading'>PERFECT MATCH FOR YOUR CORPORATE BRANDING</h1>
        <p className='brand-p'>Whether you are seeking to revamp or build your brand from scratch, our brand analysts
         ensure uniformity from the brand logo to digital media. We always recommend customizations. However, here we 
         have designed a package only to give you an idea.
        </p>
    </div>
  )
}

export default Brand
