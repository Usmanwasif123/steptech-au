import React from 'react';
import '../assets/wrapper/Contact.css';
import { Grid, styled, Paper } from '@mui/material';

const Contact = () => {
  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(25),
    textAlign: 'center',
    background: '#333',
    borderRadius: '20px',
    border: '2px solid #1932d1',
    position: 'absolute',
    height: '40px',
    width: '50px',
    left: '2%',
    top: '-700%',
}));

  return (
    <div className='contact-container'>
      <img src='https://i.ibb.co/chrdsWb/contact.png' alt='contact-bg'/>
      <Grid container spacing={8}>
        <Grid item xs={6} md={2} className='contact-grid1'>
        <Item className='contact-item1'>

            <h2>CONSTANT CLIENT CO-ORDINATION</h2>
        </Item>
        </Grid>
        <Grid item xs={6} md={2} className='contact-grid2'>
        <Item className='contact-item2'>
            
            <h2>CONSTANT CLIENT CO-ORDINATION</h2>
        </Item>
        </Grid>
        </Grid>
    </div>
  )
}

export default Contact
