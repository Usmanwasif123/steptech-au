import React from 'react';
import '../assets/MobileAppWrapper/Process.css';
import { Grid, styled, Paper } from '@mui/material';

const Process = () => {
    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(10),
        textAlign: 'center',
        position: 'absolute',
        zIndex: 2,
        borderRadius: '10px',
        top: '-10%',
        left: '2%',
        background: 'transparent',
        marginLeft: '5px',
        width: '150px',
        height: '300px',
        background: 'linear-gradient(256deg, #6347AA 7.85%, #233F81 107.97%)'


    }));

  return (
    <div className='webprocess-container'>
      <h1 className='webprocess-h1'>Approach We Utlized In Your Mobile Application Development</h1>
      <p className='webprocess-p'>We ensure your time and effort are optimized at every stage of development and that you 
      receive a digital product that meets all of your requirements—if not exceeds them—by employing a proactive strategy 
      and an agile process.
      </p>
      <Grid container spacing={-10}>
        <Grid item xs={6} md={3} className='research-grid'>
        <Item>
            <img className='research-img' src='https://i.ibb.co/WFC9b4R/image.png'/>
            <h1 data-aos="zoom-in-up" data-aos-duration="500" data-aos-easing="ease-in-sine" className='research'>
              Research
            </h1> 
            <p data-aos="zoom-in-down" data-aos-duration="500" data-aos-easing="ease-in-sine" className='research-p'>
            We research the market and your brand identity to spot and manifest your competitive benefits. Choose 
            technology and invention advisory and in-depth market knowledge to get a success-oriented mobile strategy for 
            your company.
            </p>
        </Item>
        </Grid>
        <Grid item xs={6} md={3} className='webdev-grid'>
         <Item>
             <img className='webdev-img' src='https://i.ibb.co/9ZLDdCB/image.png'/>
            <h1 data-aos="zoom-in-up" data-aos-duration="500" data-aos-easing="ease-in-sine" className='webdev'>
            UI/UX
            </h1> 
            <p data-aos="zoom-in-down" data-aos-duration="500" data-aos-easing="ease-in-sine" className='webdev-p'>
            Our designers create sleek and intuitive UX and visually appealing UI to ensure conversion, engagement, and 
            easy adoption. They utlized user-focused digital tools and cross-channel experiences that completely meet your
            customers' need and your business goals.
            </p> 
        </Item>
        </Grid>
        <Grid item xs={6} md={3} className='test-grid'>
       <Item>
            <img className='test-img' src='https://i.ibb.co/F7DFbS8/image.png'/>
            <h1 data-aos="zoom-in-up" data-aos-duration="500" data-aos-easing="ease-in-sine" className='test'>
            Development
            </h1> 
            <p data-aos="zoom-in-down" data-aos-duration="500" data-aos-easing="ease-in-sine" className='test-p'>
            Our developers develop and deploy fast, stable & high-performing mobile apps. Our expert mobile app developers
            have the proficiency to build a robust and scalable mobile app, enabled with the abilities of latest tools 
            and technologies.
            </p> 
        </Item>
        </Grid>
        <Grid item xs={6} md={3} className='launch-grid'>
        <Item>
            <img className='launch-img' src='https://i.ibb.co/9s4mxH4/image.png'/>
            <h1 data-aos="zoom-in-up" data-aos-duration="500" data-aos-easing="ease-in-sine" className='launch'>
            Q/A and Launch
            </h1> 
            <p data-aos="zoom-in-down" data-aos-duration="500" data-aos-easing="ease-in-sine" className='launch-p'>
            Before launching the app our experts testing the app and making sure that aggregate works well. After fixing 
            all bugs and error we launch your app on apple and google play store according to the guidelines.
            </p> 
        </Item>
        </Grid>
        </Grid>
    </div>
  )
}

export default Process
