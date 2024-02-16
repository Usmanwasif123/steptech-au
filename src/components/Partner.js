import React, {useState} from 'react';
import '../assets/wrapper/Partner.css';
import { Grid, styled, Paper } from '@mui/material';

const Partner = () => {
    const [isOpen, setIsOpen] = useState(false);

  const paragraphStyles1 = {
    maxHeight: isOpen ? 'none' : '250vh', 
    top: isOpen ? '30%;' : '55%',
    transition: 'max-height 0.6s ease', 
  };
  const paragraphStyles2 = {
    maxHeight: isOpen ? 'none' : '250vh', 
    top: isOpen ? '20%;' : '90%',
    zIndex: isOpen ? '1' :'-1',
    transition: 'max-height 0.6s ease', 
  };
  
  const containerStyles = {
    maxHeight: isOpen ? '250vh' : '140vh', 
    
  };
  const mediaQueryStyles = {
    '@media (max-width: 1024px)': {
      maxHeight: isOpen ? '370vh' : '190vh', // Adjust the values as needed
    }
  };
  const mergedStyles = { ...containerStyles, ...mediaQueryStyles };
  
  const lineStyle={
    top: isOpen ? '28%' : '50%',
  }

  const btnStyles={
    top: isOpen ? '95%' : '90%'
  }
  const btnmediaQueryStyles = {
    '@media (max-width: 1024px)': {
      top: isOpen ? '95%' : '90%', // Adjust the values as needed
    }
  };
  const btnmergedStyles= {...btnStyles, ...btnmediaQueryStyles}
    
  const headingStyle={
    top: isOpen ? '20%' : '35%'
  }
    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(10),
        textAlign: 'center',
        background:  '#E3E4F6',
        position: 'absolute',
        height: '40px',
        width: '70px',
        marginLeft: '-40px',

        // Media queries for responsiveness
    '@media (max-width: 1024px)': {
      width: '40px', // Adjust width for smaller screens
      marginLeft: '-50px',
  },
    }));

  return (
    <div className={`partner-container ${isOpen ? 'open' : ''}`} style={mergedStyles}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className='partner-grid1'>
        <Item className='partner-item1'>
            <img src='https://i.ibb.co/hgkfw35/image1.png' alt='campaign'/>
        </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className='partner-grid2'>
        <Item className='partner-item2'>
            <img src='https://i.ibb.co/VYjTnMp/Adobe-Solution-Partner-Program.png' alt='campaign'/>
        </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className='partner-grid3'>
        <Item className='partner-item3'>
            <img src='https://i.ibb.co/h7HDHLC/image.png' alt='campaign'/>
        </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className='partner-grid4'>
        <Item className='partner-item4'>
            <img src='https://i.ibb.co/f9V59K5/image.png' alt='campaign'/>
        </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className='partner-grid5'>
        <Item className='partner-item5'>
            <img src='https://i.ibb.co/LpwJXkm/image.png' alt='campaign'/>
        </Item>
        </Grid>
        </Grid>
        <h1 style={headingStyle}>Best Web and App Development Company in Wyoming, USA</h1>
        <div id='line-partner' style={lineStyle}></div>
        <p className='top-para' style={isOpen ? null : paragraphStyles1}>
            Are you also looking for the best web and app development company in the USA? Then stop scrolling anymore. 
            Step Tech Global is the best web and mobile app development services provider, but there are more-in-one 
            solutions for all your digital needs. We’ve driven the rollercoaster of startups, so we understand the 
            complexity and conquests of building a prosperous business in Wyoming. We collaborate with you as developers
             and business consultants, assisting you in voyaging the digital landscape and reaching your full potential. 
            No matter what type or size of business you have, we always provide our clients with exceptional service 
            according to their needs. We offer our clients numerous web development services, such as PHP development, 
            ruby web development, c++ web programming, ASP.net web development Services, and many more. Our website 
            development service diminishes the time-consuming coding process for various systems and streamlines your 
            site development and management.</p>
            <p className='middle-para' style={isOpen ? null : paragraphStyles2}>
            Step Tech Global boasts an extraordinary, close-knit team with experts in all facets of app development 
            services, which we offer our clients iOS app development, android app development, react native app 
            development, and much more.  As a well-known leader in digital marketing, Step Tech Global has more than 
            300+ employees. You can trust us in every project we handle to deliver customized solutions across long-term 
            strategic goals. We serve more than only apps. We deliver our expertise and experience. Our fast, susceptible,
            and hyperscale mobile app development will help you make headway of the curve in no time!<br/><br/>
            To offer our clients a straight path to success, we stay updated with the current trends and modernization 
            and explore various custom solutions, like blockchain development, AR VR development, AI software development,
            and NFT marketplace development. These state-of-the-art solutions allow us to be your trusted technology 
            partner. With a global clientele, we tend to build futuristic Software products that help our clients overhaul
            their conventional & complex challenges. We ensure a smart, collective, and systematized management of all 
            human resources working towards our organization’s common and eventual goal. We aim to establish forward-
            looking solutions to secure growth for our clients seeking a technological conversion in their conventional 
            business modules.<br/><br/>
            Our services also include Game development using the latest technologies and advanced trends.  We offer our 
            clients the best 2D game development, board game development services, 3D Game Development, RGP Base Games, 
            Card Games, etc. We leverage our all-encompassing game development services to create thrilling games for iOS,
            Android, Windows, and the Web with invigorating game progression. Let our best RPG game developers understand
            and refine your gaming ideas to build persuasive gameplay with our custom game development services. Embrace 
            the advanced technologies by collaborating with our experts to select the perfect database, language, and 
            framework for building springy games.<br/><br/>
            Are you ready to reach your business’s full potential with the best web development company in USA? At Step 
            Tech Global, When you partner with us, you will work with knowledgeable professionals dedicated to exceeding 
            your expectations. We’ve already worked with thousands of businesses like yours in dimension and niche, so you
            can expect us to have an exhaustive understanding of your needs, industry regulations, and requirements. So 
            partner with us right now and give your business new heights with our expertise!! 
        </p>
        <button style={btnmergedStyles} className={`read-btn`} onClick={()=> setIsOpen(!isOpen)}>{isOpen ? 'read less': 'read more'}</button>
    </div>
  )
}

export default Partner
