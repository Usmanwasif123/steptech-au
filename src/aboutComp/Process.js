import React from 'react';
import '../assets/aboutWrapper/Process.css';
import { Grid, styled, Paper } from '@mui/material';
import {Person, Shield, FindInPage, AttachMoney, HistoryEdu} from '@mui/icons-material';

const Process = () => {

    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(10),
        textAlign: 'center',
        background: 'transparent',
        border: '1px solid #fff',
        position: 'absolute',
        height: '30px',
        width: '40px',
        left: '2%',
        top: '-900%',
    }));

  return (
    <div className='achoose-container'>
      <img src='https://i.ibb.co/HCD7dvD/choose-bg.png' alt='choose-img'/>
      <Grid container spacing={5} data-aos="fade-right" data-aos-duration="500" data-aos-easing="ease-in-sine" data-aos-offset="0">
        <Grid item xs={6} md={4} className='achoose-grid1'>
        <Item className='achoose-item1'>
            <Person style={{transform:'scale(2.5)', position:'absolute', top: '20%',left: '45%', color: '#fff' }}/>
            <h2>CONSTANT CLIENT CO-ORDINATION</h2>
        </Item>
        </Grid>
        <Grid item xs={6} md={4} className='achoose-grid2'>
        <Item className='achoose-item2'>
        <Person style={{transform:'scale(2.5)', position:'absolute', top: '20%', left: '45%', color: '#fff'}}/>
        <Shield style={{transform:'scale(1.3)', position:'absolute', top: '25%', 
        left: '53%', color:'#FAF9F6'}}/>
            <h2>SUPREME CUSTOMER SATISFACTION</h2>
        </Item>
        </Grid>
        <Grid item xs={6} md={4} className='achoose-grid3'>
        <Item className='achoose-item3'>
        <FindInPage style={{transform:'scale(2.5)', position:'absolute', top: '20%', left: '45%', color: '#fff'}}/>
            <h2>100% OWNERSHIP RIGHTS</h2>
        </Item>
        </Grid>
        <Grid item xs={6} md={4} className='achoose-grid4'>
        <Item className='achoose-item4'>
        <AttachMoney style={{transform:'scale(2.5)', position:'absolute', top: '20%', left: '45%', color: '#fff'}}/>
            <h2>SECURE MONEY BACK GUARANTEE</h2>
        </Item>
        </Grid>
        </Grid>
    </div>
  )
}

export default Process
