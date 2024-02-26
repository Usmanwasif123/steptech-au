import React from 'react';
import '../assets/wrapper/Process.css';
import { Grid, styled, Paper } from '@mui/material';

const Process = () => {
    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(10),
        textAlign: 'center',
        position: 'absolute',
        zIndex: 2,
        border: '0.1px solid #fff',
        borderRadius: '10px',
        top: '40%',
        left: '2%',
        background: 'transparent',
        marginLeft: '5px',
        width: '150px',
        height: '400px',

        '@media only screen and (min-width: 1024px) and (max-width: 1200px)': {
          /* Your CSS rules for screens between 1024px and 1200px wide */
          width: '70px', // Example of changing width for this media query
      },
    }));

  return (
    <div className='process-container'>
      <img src='https://i.ibb.co/dJNKhKZ/process-bg.jpg' alt='bg-img'/>
      <h2 className='process-detail'>A Detailed Approach To</h2>
      <h1 className='process-define'>Determining Our Professional</h1>
      <h2 className='process-excellence'>Perfection</h2>
      <Grid container spacing={-10}>
        <Grid item xs={6} md={3} className='dis-grid'>
        <Item>
            <img className='dis-img' src='https://i.ibb.co/WFC9b4R/image.png'/>
            <h1 data-aos="zoom-in-up" data-aos-duration="500" data-aos-easing="ease-in-sine" className='discovery'>Discovery and Planning </h1> 
            <p data-aos="zoom-in-down" data-aos-duration="500" data-aos-easing="ease-in-sine" className='dis-p'>
            We begin our journey by thoroughly reviewing your objectives. We have an in-depth knowledge of your targets, 
            so each step we take after that shall be in full accordance with your vision. The basis for an efficient and 
            driven-by-purpose development process is set up during our planning phase.
            </p>
        </Item>
        </Grid>
        <Grid item xs={6} md={3} className='des-grid'>
         <Item>
             <img className='des-img' src='https://i.ibb.co/9ZLDdCB/image.png'/>
            <h1 data-aos="zoom-in-up" data-aos-duration="500" data-aos-easing="ease-in-sine" className='design'>Design and Prototyping</h1> 
            <p data-aos="zoom-in-down" data-aos-duration="500" data-aos-easing="ease-in-sine" className='des-p'>
            Concepts and prototypes that bring your ideas to life, creativity takes the forefront.
            Our commitment to user-centric design makes sure that every single pixel has a function, leading to a 
            captivating digital experience that draws in viewers.
              </p> 
        </Item>
        </Grid>
        <Grid item xs={6} md={3} className='dev-grid'>
       <Item>
            <img className='dev-img' src='https://i.ibb.co/F7DFbS8/image.png'/>
            <h1 data-aos="zoom-in-up" data-aos-duration="500" data-aos-easing="ease-in-sine" className='develop'>Development and Testing</h1> 
            <p data-aos="zoom-in-down" data-aos-duration="500" data-aos-easing="ease-in-sine" className='dev-p'>
            Our development phase, is the core of our approach. We 
            carefully test, code, and polish to deliver a flawless final result that goes beyond and above. Your project 
            is more than just a job; it proves our commitment to quality work.
            </p> 
        </Item>
        </Grid>
        <Grid item xs={6} md={3} className='dep-grid'>
        <Item>
            <img className='dep-img' src='https://i.ibb.co/9s4mxH4/image.png'/>
            <h1 data-aos="zoom-in-up" data-aos-duration="500" data-aos-easing="ease-in-sine" className='deploy'>Deployment and Support</h1> 
            <p data-aos="zoom-in-down" data-aos-duration="500" data-aos-easing="ease-in-sine" className='dep-p'>
            Concept take shape existence and participate 
            in an effortless digital transition. Nevertheless, we are there to support you, providing updates and ongoing
            help to keep your digital footprint on the cutting edge.
            </p> 
        </Item>
        </Grid>
        </Grid>
    </div>
  )
}

export default Process
