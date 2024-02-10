import React from 'react';
import '../assets/WebWrapper/Process.css';
import { Grid, styled, Paper } from '@mui/material';

const Process = () => {
    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(10),
        textAlign: 'center',
        position: 'absolute',
        zIndex: 2,
        borderRadius: '30px',
        top: '-10%',
        left: '2%',
        background: 'transparent',
        marginLeft: '5px',
        width: '120px',
        height: '300px',
        background: 'linear-gradient(256deg, #6347AA 7.85%, #233F81 107.97%)'


    }));

  return (
    <div className='web-section10'>
      <h1 className='webprocess-h1'>Our Processes of Website Development Services</h1>
      <p className='main-p'>We look over every stage. We commence with a thorough knowledge of your instructions. We make sure your solution is 
      working after deployment, even after the assignment is completed.</p>
      <Grid container spacing={-10}>
        <Grid item xs={6} md={3} className='research-grid'>
        <Item>
            <img className='research-img' src='https://i.ibb.co/WFC9b4R/image.png'/>
            <h1 data-aos="zoom-in-up" data-aos-duration="500" data-aos-easing="ease-in-sine" className='research'>
              Research
            </h1> 
            <p data-aos="zoom-in-down" data-aos-duration="500" data-aos-easing="ease-in-sine" className='research-p'>
            In this stage, we will collect requirements, do market research, establish the project's scope, evaluate the resources needed, and 
            gain an overall understanding of your company.
            </p>
        </Item>
        </Grid>
        <Grid item xs={6} md={3} className='webdev-grid'>
         <Item>
             <img className='webdev-img' src='https://i.ibb.co/9ZLDdCB/image.png'/>
            <h1 data-aos="zoom-in-up" data-aos-duration="500" data-aos-easing="ease-in-sine" className='webdev'>
            Web Development
            </h1> 
            <p data-aos="zoom-in-down" data-aos-duration="500" data-aos-easing="ease-in-sine" className='webdev-p'>
            Our back-end and front-end developers are going to work together to develop your website or web application by your objectives and 
            the strategy that we have sketched out.
            </p> 
        </Item>
        </Grid>
        <Grid item xs={6} md={3} className='test-grid'>
       <Item>
            <img className='test-img' src='https://i.ibb.co/F7DFbS8/image.png'/>
            <h1 data-aos="zoom-in-up" data-aos-duration="500" data-aos-easing="ease-in-sine" className='test'>
            Testing
            </h1> 
            <p data-aos="zoom-in-down" data-aos-duration="500" data-aos-easing="ease-in-sine" className='test-p'>
            Our QA expert conducts broad testing to assess every facet of your website, including its functionality, efficiency, usability, 
            loading acceleration, and a lot more. If any flaws or problems have been identified, they will also be fixed.
            </p> 
        </Item>
        </Grid>
        <Grid item xs={6} md={3} className='launch-grid'>
        <Item>
            <img className='launch-img' src='https://i.ibb.co/9s4mxH4/image.png'/>
            <h1 data-aos="zoom-in-up" data-aos-duration="500" data-aos-easing="ease-in-sine" className='launch'>
            Launch
            </h1> 
            <p data-aos="zoom-in-down" data-aos-duration="500" data-aos-easing="ease-in-sine" className='launch-p'>
            Now is a great time to launch your website. Nevertheless, while we move forward, we intend to make sure you are entirely satisfied. 
            We will be sure that you solve any issues you may have to satisfy you before launching your website.
            </p> 
        </Item>
        </Grid>
        </Grid>
    </div>
  )
}

export default Process
