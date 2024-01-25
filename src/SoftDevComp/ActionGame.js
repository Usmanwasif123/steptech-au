import React, {useState} from 'react';
import '../assets/SoftDevWrapper/Actiongame.css';
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
    <div className='software-section6'>
      <h1 className='main-heading'>Our Phenomenal Software Development Services</h1>
      <p className='main-p'>Raise your business with our vigorous and user-oriented software development services,
       building a competitive edge. Our proficient software developers guarantee an effortless user 
       experience while building resourceful software.
      </p>
      <ArrowRightIcon style={{...arrowStyle1, top: '11%'}} onClick={toggleParagraphVisibility1}/>
      <ArrowRightIcon style={{...arrowStyle2, top: '26%'}} onClick={toggleParagraphVisibility2} />
      <ArrowRightIcon style={{...arrowStyle3, top: '41%'}} onClick={toggleParagraphVisibility3}/>
      <ArrowRightIcon style={{...arrowStyle4, top: '56%'}} onClick={toggleParagraphVisibility4}/>
      <ArrowRightIcon style={{...arrowStyle5, top: '71%'}} onClick={toggleParagraphVisibility5}/>
      <h1 className='h1' onClick={toggleParagraphVisibility1} >Software Development</h1>
      <div style={containerStyle1}>
        {isParagraphVisible1 && (
          <p className='p1'>
            Your paragraph content goes here.
          </p>
        )}
      </div>
      <h1 className='h2' onClick={toggleParagraphVisibility2} >Software Integration Services</h1>
      <div style={containerStyle2}>
        {isParagraphVisible2 && (
          <p className='p2'>
            Your paragraph content goes here.
          </p>
        )}
      </div>
      <h1 className='h3' onClick={toggleParagraphVisibility3}>Creating Innovative Software Solutions</h1>
      <div style={containerStyle3}>
        {isParagraphVisible3 && (
          <p className='p3'>
            Your paragraph content goes here.
          </p>
        )}
      </div>
      <h1 className='h4' onClick={toggleParagraphVisibility4} >CRM Development</h1>
      <div style={containerStyle4}>
        {isParagraphVisible4 && (
          <p className='p4'>
            Your paragraph content goes here.
          </p>
        )}
      </div>
      <h1 className='h5' onClick={toggleParagraphVisibility5}>Robotics Process Automation</h1>
      <div style={containerStyle5}>
        {isParagraphVisible5 && (
          <p className='p5'>
            Your paragraph content goes here.
          </p>
        )}
      </div>
    </div>
  )
}

export default ActionGame