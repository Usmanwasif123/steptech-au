import React from 'react';
import '../assets/GameWrapper/Process.css';
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
    <div className='gameprocess-container'>
      <h1 className='webprocess-h1'>Process of Our Game App Development Services</h1>
      <p className='webprocess-p'>Our approach for developing gaming apps is carefully designed and starts at the 
      beginning of the project life cycle with an in-depth project scope assessment.
      </p>
      <Grid container spacing={-10}>
        <Grid item xs={6} md={3} className='research-grid'>
        <Item>
            <img className='research-img' src='https://i.ibb.co/WFC9b4R/image.png'/>
            <h1 data-aos="zoom-in-up" data-aos-duration="500" data-aos-easing="ease-in-sine" className='research'>
            Plan and Concept
            </h1> 
            <p data-aos="zoom-in-down" data-aos-duration="500" data-aos-easing="ease-in-sine" className='research-p'>
            Firstly, we conduct a concept review and analyses using client-provided guidelines, drafting game design 
            documents, flow structure, and execution plans. After that, our team developed concept drawings and sketches 
            consistent with the game's theme and vision.
            </p>
        </Item>
        </Grid>
        <Grid item xs={6} md={3} className='webdev-grid'>
         <Item>
             <img className='webdev-img' src='https://i.ibb.co/9ZLDdCB/image.png'/>
            <h1 data-aos="zoom-in-up" data-aos-duration="500" data-aos-easing="ease-in-sine" className='webdev'>
            Game Development
            </h1> 
            <p data-aos="zoom-in-down" data-aos-duration="500" data-aos-easing="ease-in-sine" className='webdev-p'>
            Our developers use the latest technologies and tactics to make the design a top-notch game. There, the 
            design team's ideas are carefully turned into a virtual setting that may be evaluated and directed to meet 
            its requirements by our outstanding technological experts.
            </p> 
        </Item>
        </Grid>
        <Grid item xs={6} md={3} className='test-grid'>
       <Item>
            <img className='test-img' src='https://i.ibb.co/F7DFbS8/image.png'/>
            <h1 data-aos="zoom-in-up" data-aos-duration="500" data-aos-easing="ease-in-sine" className='test'>
            Testing Storage
            </h1> 
            <p data-aos="zoom-in-down" data-aos-duration="500" data-aos-easing="ease-in-sine" className='test-p'>
            Our expert engineers put all games through accurate QA and compatibility testing on multiple platforms. 
            Furthermore, our Q/A engineer removes typos and grammatical errors, covers test artifacts, and reports any 
            problems in the code for timely fixes.
            </p> 
        </Item>
        </Grid>
        <Grid item xs={6} md={3} className='launch-grid'>
        <Item>
            <img className='launch-img' src='https://i.ibb.co/9s4mxH4/image.png'/>
            <h1 data-aos="zoom-in-up" data-aos-duration="500" data-aos-easing="ease-in-sine" className='launch'>
            Launch and Maintenance
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
