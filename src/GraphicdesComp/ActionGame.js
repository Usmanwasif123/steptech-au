import React, {useState} from 'react';
import '../assets/GraphicdesWrapper/Actiongame.css';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const ActionGame = () => {
  const [isParagraphVisible1, setParagraphVisibility1] = useState(false);
  const [isParagraphVisible2, setParagraphVisibility2] = useState(false);
  const [isParagraphVisible3, setParagraphVisibility3] = useState(false);
  const [isParagraphVisible4, setParagraphVisibility4] = useState(false);
  const [isParagraphVisible5, setParagraphVisibility5] = useState(false);

  const toggleParagraphVisibility1 = () => {
    setParagraphVisibility1(prevState => !prevState)

  };

  const toggleParagraphVisibility2 = () => {
    setParagraphVisibility2(prevState => !prevState);
    
  };
  const toggleParagraphVisibility3 = () => {
    setParagraphVisibility3(prevState => !prevState);
    
  };

  const toggleParagraphVisibility4 = () => {
    setParagraphVisibility4(prevState => !prevState);
  
  };
  const toggleParagraphVisibility5 = () => {
    setParagraphVisibility5(prevState => !prevState);
   
  };
  const containerStyle1 = {
    transition: 'height 0.3s ease',
    height: isParagraphVisible1 ? 'auto' : '50px',
    overflow: 'hidden',
  };

  const containerStyle2 = {
    transition: 'height 0.3s ease',
    height: isParagraphVisible2 ? 'auto' : '50px',
    overflow: 'hidden',
  };
  const containerStyle3 = {
    transition: 'height 0.3s ease',
    height: isParagraphVisible3 ? 'auto' : '50px',
    overflow: 'hidden',
  };

  const containerStyle4 = {
    transition: 'height 0.3s ease',
    height: isParagraphVisible4 ? 'auto' : '50px',
    overflow: 'hidden',
  };
  const containerStyle5 = {
    transition: 'height 0.3s ease',
    height: isParagraphVisible5 ? 'auto' : '50px',
    overflow: 'hidden',
  };

  const arrowStyle1 = {
    transform: isParagraphVisible1 ? 'rotate(-90deg)' : 'rotate(0deg)',
    transition: 'transform 0.3s ease',
    position: 'absolute', 
    zIndex: '1', 
    left:'53%', 
    fontSize: '30px',
    color: '#243F82'
  };
  const arrowStyle2 = {
    transform: isParagraphVisible2 ? 'rotate(-90deg)' : 'rotate(0deg)',
    transition: 'transform 0.3s ease',
    position: 'absolute', 
    zIndex: '1', 
    left:'53%', 
    fontSize: '30px',
    color: '#243F82'
  };
  const arrowStyle3= {
    transform: isParagraphVisible3 ? 'rotate(-90deg)' : 'rotate(0deg)',
    transition: 'transform 0.3s ease',
    position: 'absolute', 
    zIndex: '1', 
    left:'53%', 
    fontSize: '30px',
    color: '#243F82'
  };const arrowStyle4= {
    transform: isParagraphVisible4 ? 'rotate(-90deg)' : 'rotate(0deg)',
    transition: 'transform 0.3s ease',
    position: 'absolute', 
    zIndex: '1', 
    left:'53%', 
    fontSize: '30px',
    color: '#243F82'
  };
  const arrowStyle5 = {
    transform: isParagraphVisible5 ? 'rotate(-90deg)' : 'rotate(0deg)',
    transition: 'transform 0.3s ease',
    position: 'absolute', 
    zIndex: '1', 
    left:'53%', 
    fontSize: '30px',
    color: '#243F82'
  };
  return (
    <div className='graph-section6'>
      <h1 className='main-heading'>Graphic Designing Services</h1>
      <p className='main-p'>We are a well-known graphic and professional logo design services provider in the USA; we have a team of experts 
      who are skillful in what they do. Ready to attract your audience with the right design and get our graphic design services 
      </p>
      <ArrowRightIcon style={{...arrowStyle1, top: '5%'}} onClick={toggleParagraphVisibility1}/>
      <ArrowRightIcon style={{...arrowStyle2, top: '21%'}} onClick={toggleParagraphVisibility2} />
      <ArrowRightIcon style={{...arrowStyle3, top: '41%'}} onClick={toggleParagraphVisibility3}/>
      <ArrowRightIcon style={{...arrowStyle4, top: '60%'}} onClick={toggleParagraphVisibility4}/>
      <ArrowRightIcon style={{...arrowStyle5, top: '76%'}} onClick={toggleParagraphVisibility5}/>
      <h1 className='h1' onClick={toggleParagraphVisibility1}>Logo Design</h1>
      <div style={containerStyle1}>
        {isParagraphVisible1 && (
          <p className='p1'>
            At Step Tech, our experts create a perfect custom logo design for every brand. It assists in generating a trustworthy image and 
             loyalty. We are here to provide professional logo design services to display your business adequately.
          </p>
        )}
      </div>
      <h1 className='h2' onClick={toggleParagraphVisibility2}>Website Design</h1>
      <div style={containerStyle2}>
        {isParagraphVisible2 && (
          <p className='p2'>
            Our graphic design website services focus on sustaining evenness in all facets while designing your website. Our experts recognize 
            that advancements in graphic design play a crucial role in the success of a website. Thus, we prioritize developing a highly 
            innovative web design for you.
          </p>
        )}
      </div>
      <h1 className='h3' onClick={toggleParagraphVisibility3}>UI/UX Design</h1>
      <div style={containerStyle3}>
        {isParagraphVisible3 && (
          <p className='p3'>
            We have a team of expert UI/UX designers and the best logo designers who help you create a website app and logo that are both 
            straightforward and visually attractive. Our experienced UI/UX designer will collaborate with you to know your needs and create 
            a custom solution that meets your singular requirements.
          </p>
        )}
      </div>
      <h1 className='h4' onClick={toggleParagraphVisibility4}>Vector Illustration Services</h1>
      <div style={containerStyle4}>
        {isParagraphVisible4 && (
          <p className='p4'>
            We are vector illustration experts in transforming your raster image into a simple, clean, scalable, and detailed vector design. Our
             skillful crew is devoted to guaranteeing your design vision is captured in the best desirable quality.
          </p>
        )}
      </div>
      <h1 className='h5'onClick={toggleParagraphVisibility5} >Brand Identity</h1>
      <div style={containerStyle5}>
        {isParagraphVisible5 && (
          <p className='p5'>
            Our experts help you to improve and purify the message in any visual medium brand identity. They offer everything that helps you 
            build your image, like a visiting/business card, brochure (DVC), flyer, event exhibition, documentary, merchandise, sketch, annual 
            report, etc.
          </p>
        )}
      </div>
    </div>
  )
}

export default ActionGame