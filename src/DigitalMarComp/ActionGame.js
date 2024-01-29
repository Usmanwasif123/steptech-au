import React, {useState} from 'react';
import '../assets/DigitalMarWrapper/Actiongame.css';
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
    <div className='digi-section6'>
      <h1 className='main-heading'>Step Tech Digital Marketing Services</h1>
      <p className='main-p'>We are dedicated to helping our clients achieve their company purposes and flourish online 
      thanks to our experienced team of <b>digital marketing specialists</b>, creative tactics, and comprehensive understanding
       of the digital environment. The <b>Digital Marketing Services</b> we offer our clients are the following.
      </p>
      <ArrowRightIcon style={{...arrowStyle1, top: '5%'}} onClick={toggleParagraphVisibility1}/>
      <ArrowRightIcon style={{...arrowStyle2, top: '21%'}} onClick={toggleParagraphVisibility2} />
      <ArrowRightIcon style={{...arrowStyle3, top: '41%'}} onClick={toggleParagraphVisibility3}/>
      <ArrowRightIcon style={{...arrowStyle4, top: '56%'}} onClick={toggleParagraphVisibility4}/>
      <ArrowRightIcon style={{...arrowStyle5, top: '75%'}} onClick={toggleParagraphVisibility5}/>
      <h1 className='h1' onClick={toggleParagraphVisibility1} >Search Engine Optimization</h1>
      <div style={containerStyle1}>
        {isParagraphVisible1 && (
          <p className='p1'>
            As a trusted digital marketing agency,  our specialists will continue leading the search business with 
            tenacity and enthusiasm. Use the most powerful global SEO to drive more visitors than ever. 
          </p>
        )}
      </div>
      <h1 className='h2' onClick={toggleParagraphVisibility2} >PPC</h1>
      <div style={containerStyle2}>
        {isParagraphVisible2 && (
          <p className='p2'>
            As the best PPC agency in Australia, We explore multiple strategies that are appropriate for your business, 
            fit inside your budget, and provide your campaign the boost it needs. We want your campaigns to be extremely 
            prominent on Google. 

          </p>
        )}
      </div>
      <h1 className='h3' onClick={toggleParagraphVisibility3}>Social Media Marketing</h1>
      <div style={containerStyle3}>
        {isParagraphVisible3 && (
          <p className='p3'>
            Being a top social media firm, we know how to turn rave reviews into sales for your business. We take 
            precautions in creating broad strategies that do more than just create impressions through strong ads and 
            active campaigns.
          </p>
        )}
      </div>
      <h1 className='h4' onClick={toggleParagraphVisibility4}>Content Strategy </h1>
      <div style={containerStyle4}>
        {isParagraphVisible4 && (
          <p className='p4'>
            At Step Tech, we're so assured in our content strategy that we offer a guarantee. Our expertise allows us to 
            generate traction on worldwide direct advertising systems, like social media networks, blogging platforms, 
            landing sites, your website content, and more.
          </p>
        )}
      </div>
      <h1 className='h5' onClick={toggleParagraphVisibility5}>Website</h1>
      <div style={containerStyle5}>
        {isParagraphVisible5 && (
          <p className='p5'>
           As a digital marketing website agency, Step Tech develops tailored, mobile-ready, and search engine-optimized 
           websites that assist you in meeting your business goals and supporting your digital marketing campaigns.
          </p>
        )}
      </div>
    </div>
  )
}

export default ActionGame