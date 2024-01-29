import React, {useState} from 'react';
import '../assets/AnimationWrapper/Expertise.css';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Expertise = () => {
  const [isParagraphVisible1, setParagraphVisibility1] = useState(false);

  const toggleParagraphVisibility1 = (e) => {
    e.stopPropagation();
    setParagraphVisibility1((prevState) => !prevState);
  };
  const containerStyle1 = {
    transition: 'height 0.3s ease',
    height: isParagraphVisible1 ? 'auto' : '50px',
    overflow: 'hidden',
  };
  
  const arrowStyle1 = {
    transform: isParagraphVisible1 ? 'rotate(-90deg)' : 'rotate(0deg)',
    transition: 'transform 0.3s ease',
    position: 'absolute',
    zIndex: '1',
    color: '#243F82',
    fontSize: '50px',
  };

  return (
    <div className='animate-section5'>
      <h1 className='heading'>Game Development Expertise</h1>
      <p>
      Make games that enthrall clients across different stages. Engineer remarkable connection points and convey powerful 
      programming to &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;ensure impeccable interactivity on completely upheld stages.
      </p> 
      <div className='animate-box1'>&nbsp;</div>
      <div style={containerStyle1}>
      <h1 className='animate-box1-h1' onClick={toggleParagraphVisibility1}>Leverage Unity to build desktop</h1>
        {isParagraphVisible1 && (
          <p className='p1'>
             Boost your retention rate by providing clients with a convenient, round-the-clock purchasing experience. To create personalized
             brand experiences, we run targeted email advertising campaigns and optimize your website for voice search and mobile devices. 
             Integrations to Walmart Marketplace are another tool we 
             offer to increase your sales volume.
          </p>
        )}
      </div>
      <ArrowRightIcon style={{...arrowStyle1, top: '36%', left: '13%'}}/>
      <div className='animate-box2'>&nbsp;</div>
      <h1 className='animate-box2-h2'>Leverage Unity to build desktop</h1>
      <ArrowRightIcon style={{position: 'absolute', zIndex: '1', color: '#243F82', fontSize: '50px', top: '36%', left: '53%'}}/>
      <div className='animate-box3'>&nbsp;</div>
      <h1 className='animate-box3-h3'>Leverage Unity to build desktop</h1>
      <ArrowRightIcon style={{position: 'absolute', zIndex: '1', color: '#243F82', fontSize: '50px', top: '48%', left: '13%'}}/>
      <div className='animate-box4'>&nbsp;</div>
      <h1 className='animate-box4-h4'>Leverage Unity to build desktop</h1>
      <ArrowRightIcon style={{position: 'absolute', zIndex: '1', color: '#243F82', fontSize: '50px', top: '48%', left: '53%'}}/>
      <div className='animate-box5'>&nbsp;</div>
      <h1 className='animate-box5-h5'>Leverage Unity to build desktop</h1>
      <ArrowRightIcon style={{position: 'absolute', zIndex: '1', color: '#243F82', fontSize: '50px', top: '60%', left: '13%'}}/>
      <div className='animate-box6'>&nbsp;</div>
      <h1 className='animate-box6-h6'>Leverage Unity to build desktop</h1>
      <ArrowRightIcon style={{position: 'absolute', zIndex: '1', color: '#243F82', fontSize: '50px', top: '60%', left: '53%'}}/>
      </div>
  )
}

export default Expertise
