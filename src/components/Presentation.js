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
            <img src='https://i.ibb.co/0FLPYDR/campaign.jpg' alt='campaign'/>
        </Item>
        </Grid>
        <Grid item xs={6} md={4} className='present-grid2'>
        <Item className='present-item2'>
            <img src='https://i.ibb.co/0FLPYDR/campaign.jpg' alt='campaign'/>
        </Item>
        </Grid>
        <Grid item xs={6} md={4} className='present-grid3'>
        <Item className='present-item3'>
            <img src='https://i.ibb.co/0FLPYDR/campaign.jpg' alt='campaign'/>
        </Item>
        </Grid>
        <Grid item xs={6} md={4} className='present-grid4'>
        <Item className='present-item4'>
            <img src='https://i.ibb.co/0FLPYDR/campaign.jpg' alt='campaign'/>
        </Item>
        </Grid>
        <Grid item xs={6} md={4} className='present-grid5'>
        <Item className='present-item5'>
            <img src='https://i.ibb.co/0FLPYDR/campaign.jpg' alt='campaign'/>
        </Item>
        </Grid>
        <Grid item xs={6} md={4} className='present-grid6'>
        <Item className='present-item6'>
            <img src='https://i.ibb.co/0FLPYDR/campaign.jpg' alt='campaign'/>
        </Item>
        </Grid>
        </Grid>
    </div>
  )
}

export default Presentation
