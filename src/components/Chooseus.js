import React from 'react';
import '../assets/wrapper/Chooseus.css';
import { Grid, styled, Paper } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const Chooseus = () => {

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
    }));

  return (
    <div className='choose-container'>
      <img src='https://i.ibb.co/HCD7dvD/choose-bg.png' alt='choose-img'/>
      <h1>why choose us</h1>
      <h2>Professionally Proven Worldwide</h2>
      <Grid container spacing={5}>
        <Grid item xs={6} md={4} className='choose-grid1'>
        <Item className='choose-item1'>
            <PersonIcon style={{transform:'scale(2.5)', position:'absolute', top: '20%', left: '45%', color: '#fff'}}/>
            <h2>CONSTANT CLIENT CO-ORDINATION</h2>
        </Item>
        </Grid>
        <Grid item xs={6} md={4} className='choose-grid2'>
        <Item className='choose-item2'>
        <PersonIcon style={{transform:'scale(2.5)', position:'absolute', top: '20%', left: '45%', color: '#fff'}}/>
            <h2>CONSTANT CLIENT CO-ORDINATION</h2>
        </Item>
        </Grid>
        <Grid item xs={6} md={4} className='choose-grid3'>
        <Item className='choose-item3'>
        <PersonIcon style={{transform:'scale(2.5)', position:'absolute', top: '20%', left: '45%', color: '#fff'}}/>
            <h2>CONSTANT CLIENT CO-ORDINATION</h2>
        </Item>
        </Grid>
        <Grid item xs={6} md={4} className='choose-grid4'>
        <Item className='choose-item4'>
        <PersonIcon style={{transform:'scale(2.5)', position:'absolute', top: '20%', left: '45%', color: '#fff'}}/>
            <h2>CONSTANT CLIENT CO-ORDINATION</h2>
        </Item>
        </Grid>
        <Grid item xs={6} md={4} className='choose-grid5'>
        <Item className='choose-item5'>
        <PersonIcon style={{transform:'scale(2.5)', position:'absolute', top: '20%', left: '45%', color: '#fff'}}/>
            <h2>CONSTANT CLIENT CO-ORDINATION</h2>
        </Item>
        </Grid>
        </Grid>
    </div>
  )
}

export default Chooseus
