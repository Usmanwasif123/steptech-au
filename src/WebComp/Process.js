import React from 'react';
import '../assets/WebWrapper/Process.css';
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
      <h1 className='webprocess-h1'>Our Web Development Processes</h1>
      <p className='webprocess-p'>We look out of every stage. We begin with an all-inclusive and detailed understanding of your guidelines. Once 
      the task ends, we ensure your solution’s uninterrupted operation after deployment.
      </p>
      <Grid container spacing={-10}>
        <Grid item xs={6} md={3} className='research-grid'>
        <Item>
            <img className='research-img' src='https://i.ibb.co/WFC9b4R/image.png'/>
            <h1 data-aos="zoom-in-up" data-aos-duration="500" data-aos-easing="ease-in-sine" className='research'>
              Research
            </h1> 
            <p data-aos="zoom-in-down" data-aos-duration="500" data-aos-easing="ease-in-sine" className='research-p'>
            During this stage, we will collect requirements, perform market research, build the range of the project, 
            establish what resources are needed, and get to identify your business in general.
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
            Now, our front-end and back-end developers will work together to develop your website or web application 
            according to your vision and the roadmap we have outlined.
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
            Our QA engineers will complete vast testing to assess your website's multiple aspects, including performance,
            usability, functionality, loading capacity, and many more. They will also fix bugs and defects if any are 
            found.
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
            It’s finally time to launch your website. But prior we do, we will confirm that you are totally satisfied 
            with it. If you have any issues, we will make sure that we treat them to your satisfaction before launching 
            your website.
            </p> 
        </Item>
        </Grid>
        </Grid>
    </div>
  )
}

export default Process
