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
    }));

  return (
    <div className='process-container'>
      <img src='https://i.ibb.co/dJNKhKZ/process-bg.jpg' alt='bg-img'/>
      <h2 className='process-detail'>A detailed process that</h2>
      <h1 className='process-define'>Defines our Professional</h1>
      <h2 className='process-excellence'>Excellence!</h2>
      <Grid container spacing={-10}>
        <Grid item xs={6} md={3} className='dis-grid'>
        <Item>
            <img className='dis-img' src='https://i.ibb.co/WFC9b4R/image.png'/>
            <h1 data-aos="zoom-in-up" data-aos-duration="500" data-aos-easing="ease-in-sine" className='discovery'>Discovery and Planning </h1> 
            <p data-aos="zoom-in-down" data-aos-duration="500" data-aos-easing="ease-in-sine" className='dis-p'>At Step Tech Global, we commence our journey by meticulously exploring your objectives. 
             We deeply understand your vision, ensuring every subsequent step aligns seamlessly with 
             your aspirations. Our planning phase lays the groundwork for a development process that's
             not just efficient but purpose-driven.
            </p>
        </Item>
        </Grid>
        <Grid item xs={6} md={3} className='des-grid'>
         <Item>
             <img className='des-img' src='https://i.ibb.co/9ZLDdCB/image.png'/>
            <h1 data-aos="zoom-in-up" data-aos-duration="500" data-aos-easing="ease-in-sine" className='design'>Design and Prototyping</h1> 
            <p data-aos="zoom-in-down" data-aos-duration="500" data-aos-easing="ease-in-sine" className='des-p'>Creativity takes center stage as we craft visually stunning designs and prototypes that
             breathe life into your concepts. Our commitment to user-centric design ensures that every
             pixel serves a purpose, creating an engaging digital experience that captivates your audience.
              </p> 
        </Item>
        </Grid>
        <Grid item xs={6} md={3} className='dev-grid'>
       <Item>
            <img className='dev-img' src='https://i.ibb.co/F7DFbS8/image.png'/>
            <h1 data-aos="zoom-in-up" data-aos-duration="500" data-aos-easing="ease-in-sine" className='develop'>Development and Testing</h1> 
            <p data-aos="zoom-in-down" data-aos-duration="500" data-aos-easing="ease-in-sine" className='dev-p'>The heart of our process lies in the development phase, where lines of code evolve into robust
              digital solutions. We scrupulously code, test, and polish, ensuring a flawless end product that
              exceeds expectations. Your project isn't just a task; it's a testament to our dedication to excellence.
            </p> 
        </Item>
        </Grid>
        <Grid item xs={6} md={3} className='dep-grid'>
        <Item>
            <img className='dep-img' src='https://i.ibb.co/9s4mxH4/image.png'/>
            <h1 data-aos="zoom-in-up" data-aos-duration="500" data-aos-easing="ease-in-sine" className='deploy'>Deployment and Support</h1> 
            <p data-aos="zoom-in-down" data-aos-duration="500" data-aos-easing="ease-in-sine" className='dep-p'>Witness your vision materialize as we deploy the final product, ensuring a seamless transition into 
             the digital realm. But our support doesn't end there; Step Tech Global stands by you, providing 
             ongoing assistance and updates to keep your digital presence ahead of the curve.
            </p> 
        </Item>
        </Grid>
        </Grid>
    </div>
  )
}

export default Process
