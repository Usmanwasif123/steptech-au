import React from 'react';
import '../assets/wrapper/Chooseus.css';
import { Grid, styled, Paper } from '@mui/material';
import {Person, Shield, FindInPage, AttachMoney, HistoryEdu} from '@mui/icons-material';

const Chooseus = () => {
    const isMediumScreen = window.innerWidth >= 1024 && window.innerWidth <= 1200;

    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(10),
        textAlign: 'center',
        background: 'transparent',
        border: '1px solid #fff',
        position: 'absolute',
        height: '40px',
        width: '70px',
        left: '2%',
        top: '-700%',

        '@media only screen and (min-width: 1024px) and (max-width: 1200px)': {
            /* Your CSS rules for screens between 1024px and 1200px wide */
            width: '20px', // Example of changing width for this media query
        },
    }));

  return (
    <div className='choose-container'>
      <img src='https://i.ibb.co/HCD7dvD/choose-bg.png' alt='choose-img'/>
      <h1>why choose us</h1>
      <h2>Professionally Proven Worldwide</h2>
      <Grid container spacing={5} data-aos="fade-right" data-aos-duration="500" data-aos-easing="ease-in-sine" data-aos-offset="0">
        <Grid item xs={6} md={4} className='choose-grid1'>
        <Item className='choose-item1'>
            <Person style={{transform:'scale(2.5)', position:'absolute', top: '20%',left: '45%', color: '#fff',
            ...(isMediumScreen && { fontSize: '1rem' }) // Apply different style for medium screens 
        }}/>
            <h3>CONSTANT CLIENT CO-ORDINATION</h3>
        </Item>
        </Grid>
        <Grid item xs={6} md={4} className='choose-grid2'>
        <Item className='choose-item2'>
        <Person style={{transform:'scale(2.5)', position:'absolute', top: '20%', left: '45%', color: '#fff', 
        ...(isMediumScreen && { fontSize: '1rem' })}}/>
        <Shield style={{transform:'scale(1.3)', position:'absolute', top: '25%', 
        left: '53%', color:'#FAF9F6', ...(isMediumScreen && { fontSize: '1rem' }) }}/>
            <h3>SUPREME CUSTOMER SATISFACTION</h3>
        </Item>
        </Grid>
        <Grid item xs={6} md={4} className='choose-grid3'>
        <Item className='choose-item3'>
        <FindInPage style={{transform:'scale(2.5)', position:'absolute', top: '20%', left: '45%', color: '#fff', 
        ...(isMediumScreen && { fontSize: '1rem' })
    }}/>
            <h3>100% OWNERSHIP RIGHTS</h3>
        </Item>
        </Grid>
        <Grid item xs={6} md={4} className='choose-grid4'>
        <Item className='choose-item4'>
        <AttachMoney style={{transform:'scale(2.5)', position:'absolute', top: '20%', left: '45%', color: '#fff', 
        ...(isMediumScreen && { fontSize: '1rem' })}}/>
            <h3>SECURE MONEY BACK GUARANTEE</h3>
        </Item>
        </Grid>
        <Grid item xs={6} md={4} className='choose-grid5'>
        <Item className='choose-item5'>
        <HistoryEdu style={{transform:'scale(2.5)', position:'absolute', top: '20%', left: '45%', color: '#fff', 
        ...(isMediumScreen && { fontSize: '1rem' })}}/>
            <h3>INDUSTRY PROVEN PROFESSIONALS</h3>
        </Item>
        </Grid>
        </Grid>
    </div>
  )
}

export default Chooseus
