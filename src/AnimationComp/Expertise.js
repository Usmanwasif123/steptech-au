import React, {useState} from 'react';
import '../assets/AnimationWrapper/Expertise.css';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Expertise = () => {
  const [isOpen, setIsOpen] = useState(false);

  const div1Styles = {
    height: isOpen ? '200vh' : '75vh',
    overflow: 'hidden',
  };

  const arrowStyle1 = {
    transform: isOpen ? 'rotate(-90deg)' : 'rotate(0deg)',
    transition: 'transform 0.3s ease',
    position: 'absolute',
    zIndex: '1',
    color: '#243F82',
    fontSize: '50px',
    top: isOpen ? '36%' : '36%',
    left: '13%',
  };


  return (
    <div className='animate-section5'>
      <h1 className='heading'>Step Tech Animation Services</h1>
      <p>
      We are a well-known animated video production services company in Australia, with the expertise of our highly 
      skilled animation maker we offer our clients high-quality all-inclusive video animation services.
      </p> 
      <div className='animate-box1'>&nbsp;</div>
      <div className={`animate-box1-heading1 ${isOpen ? 'open' : ''}`} style={div1Styles} >
      <h1 className='animate-box1-h1' onClick={() => setIsOpen(!isOpen)}>White Board Animation</h1>
      {isOpen && 
          <p className='p1'>
             Boost your retention rate by providing clients with a convenient, round-the-clock purchasing experience. To create personalized
             brand experiences, we run targeted email advertising campaigns and optimize your website for voice search and mobile devices. 
             Integrations to Walmart Marketplace are another tool we 
             offer to increase your sales volume.
          </p>
          }
      </div>
      <ArrowRightIcon style={{...arrowStyle1}} onClick={() => setIsOpen(!isOpen)}/>
      <div className='animate-box2'>&nbsp;</div>
      <h1 className='animate-box2-h2'>2D Animation</h1>
      <ArrowRightIcon style={{position: 'absolute', zIndex: '1', color: '#243F82', fontSize: '50px', top: '36%', left: '53%'}}/>
      <div className='animate-box3'>&nbsp;</div>
      <h1 className='animate-box3-h3'>Animated Explainer Videos</h1>
      <ArrowRightIcon style={{position: 'absolute', zIndex: '1', color: '#243F82', fontSize: '50px', top: '48%', left: '13%'}}/>
      <div className='animate-box4'>&nbsp;</div>
      <h1 className='animate-box4-h4'>3D Animation</h1>
      <ArrowRightIcon style={{position: 'absolute', zIndex: '1', color: '#243F82', fontSize: '50px', top: '48%', left: '53%'}}/>
      <div className='animate-box5'>&nbsp;</div>
      <h1 className='animate-box5-h5'>Motion-Graphic Animation</h1>
      <ArrowRightIcon style={{position: 'absolute', zIndex: '1', color: '#243F82', fontSize: '50px', top: '60%', left: '13%'}}/>
      <div className='animate-box6'>&nbsp;</div>
      <h1 className='animate-box6-h6'>Character Animation Services</h1>
      <ArrowRightIcon style={{position: 'absolute', zIndex: '1', color: '#243F82', fontSize: '50px', top: '60%', left: '53%'}}/>
      </div>
  )
}

export default Expertise
