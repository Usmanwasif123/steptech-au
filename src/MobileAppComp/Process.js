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
        top: '-20%',
        left: '2%',
        background: 'transparent',
        marginLeft: '5px',
        width: '150px',
        height: '300px',
        background: 'linear-gradient(256deg, #6347AA 7.85%, #233F81 107.97%)'


    }));

  return (
    <div className='appprocess-container'>
      <h1 className='appprocess-h1'>The Approach We Take To the Mobile App Development Process</h1>
      <p className='appprocess-p'>By using a proactive approach and an agile process, we ensure that your efforts and 
      time are effectively utilized at every step through development and that you acquire a digital product that meets 
      all your needs, if not surpasses them.
      </p>
      <Grid container spacing={-10}>
        <Grid item xs={6} md={3} className='resea-grid'>
        <Item>
            <img className='resea-img' src='https://i.ibb.co/WFC9b4R/image.png'/>
            <h1 data-aos="zoom-in-up" data-aos-duration="500" data-aos-easing="ease-in-sine" className='resea'>
              Research
            </h1> 
            <p data-aos="zoom-in-down" data-aos-duration="500" data-aos-easing="ease-in-sine" className='resea-p'>
            We research market and brand identity to find and promote your competitive edge. Choose technical and 
            creative advice and comprehensive market knowledge for a successful mobile strategy for your business.
            </p>
        </Item>
        </Grid>
        <Grid item xs={6} md={3} className='uiux-grid'>
         <Item>
             <img className='uiux-img' src='https://i.ibb.co/9ZLDdCB/image.png'/>
            <h1 data-aos="zoom-in-up" data-aos-duration="500" data-aos-easing="ease-in-sine" className='uiux'>
            UI/UX
            </h1> 
            <p data-aos="zoom-in-down" data-aos-duration="500" data-aos-easing="ease-in-sine" className='uiux-p'>
            Our designers offer a pleasing user interface (UI) and an easy, simple UX to ensure change, interaction, and 
            easy use. They employ cross-channel experiences and user-centered technology to fully satisfy your consumers'
            needs and your business's goals.
            </p> 
        </Item>
        </Grid>
        <Grid item xs={6} md={3} className='deve-grid'>
       <Item>
            <img className='deve-img' src='https://i.ibb.co/F7DFbS8/image.png'/>
            <h1 data-aos="zoom-in-up" data-aos-duration="500" data-aos-easing="ease-in-sine" className='deve'>
            Design 
            </h1> 
            <p data-aos="zoom-in-down" data-aos-duration="500" data-aos-easing="ease-in-sine" className='deve-p'>
            Our developers develop and distribute mobile apps that are swift, dependable, and efficient. Our skilled 
            mobile app developers may develop scalable and reliable mobile applications using the latest technologies 
            and technological advances.
            </p> 
        </Item>
        </Grid>
        <Grid item xs={6} md={3} className='qa-launch-grid'>
        <Item>
            <img className='qa-launch-img' src='https://i.ibb.co/9s4mxH4/image.png'/>
            <h1 data-aos="zoom-in-up" data-aos-duration="500" data-aos-easing="ease-in-sine" className='qa-launch'>
            Launch/ Testing
            </h1> 
            <p data-aos="zoom-in-down" data-aos-duration="500" data-aos-easing="ease-in-sine" className='qa-launch-p'>
            Our experts assess the app and ensure it works correctly before launching it. Following the directions, we 
            will publish your program on Google Play and the Apple Program Store after resolving any problems and errors.
            </p> 
        </Item>
        </Grid>
        </Grid>
    </div>
  )
}

export default Process
