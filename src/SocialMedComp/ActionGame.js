import React, {useState} from 'react';
import '../assets/SocialMedWrapper/Actiongame.css';
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
  }
   
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
    <div className='smm-section6'>
      <h1 className='main-heading'>Our Social Media Marketing Services</h1>
      <p className='main-p'>Step Tech offers its clients the best social media marketing services as a <b>digital marketing company</b>. The 
      services we offer our clients are the following.
      </p>
      <ArrowRightIcon style={{...arrowStyle1, top: '5%'}} onClick={toggleParagraphVisibility1}/>
      <ArrowRightIcon style={{...arrowStyle2, top: '24%'}} onClick={toggleParagraphVisibility2} />
      <ArrowRightIcon style={{...arrowStyle3, top: '45%'}} onClick={toggleParagraphVisibility3}/>
      <ArrowRightIcon style={{...arrowStyle4, top: '63%'}} onClick={toggleParagraphVisibility4}/>
      <ArrowRightIcon style={{...arrowStyle5, top: '80%'}} onClick={toggleParagraphVisibility5}/>
      <h1 className='h1' onClick={toggleParagraphVisibility1} >PPC Advertising</h1>
      <div style={containerStyle1}>
        {isParagraphVisible1 && (
          <p className='p1'>
            In our PPC advertising services, we work with you to identify your intended audience, find high-converting keywords, run sponsored
             updates, and use attractive photos, videos, and captions to maximize your return on ad spend (ROAS) on social media marketing 
             platforms.
          </p>
        )}
      </div>
      <h1 className='h2' onClick={toggleParagraphVisibility2} >Email Marketing</h1>
      <div style={containerStyle2}>
        {isParagraphVisible2 && (
          <p className='p2'>
            To deliver an unparalleled customer experience, your social media marketing company integrates email marketing with your SMM 
            strategies. By studying your target market and discovering their problems, we can create email campaigns, social media marketing 
            strategies, and Instagram marketing plans that cater to their requirements.
          </p>
        )}
      </div>
      <h1 className='h3' onClick={toggleParagraphVisibility3}>E-Commerce Marketing</h1>
      <div style={containerStyle3}>
        {isParagraphVisible3 && (
          <p className='p3'>
            To increase your online visibility, promote your eCommerce business on social media and Instagram marketing platforms. To boost 
            traffic and sales to your online store, we produce and post promotional posts on Facebook social media marketing and share 
            high-quality product photos.
          </p>
        )}
      </div>
      <h1 className='h4' onClick={toggleParagraphVisibility4}>Video Production</h1>
      <div style={containerStyle4}>
        {isParagraphVisible4 && (
          <p className='p4'>
            Using social media videos that spark your audience's interest will help boost audience engagement on YouTube and other social media
             campaigns. Our social media video marketing team has you covered anything from knowledge and product promotional videos to 
             behind-the-scenes videos and interviews!
          </p>
        )}
      </div>
      <h1 className='h5' onClick={toggleParagraphVisibility5}>Conversation Rate Optimization (CRO)</h1>
      <div style={containerStyle5}>
        {isParagraphVisible5 && (
          <p className='p5'>
            To increase your conversion rate, our social networking marketing firm tests your headlines, improves your landing pages, crafts 
            compelling calls-to-action (CTAs), and uses various social media substances, including photos and videos. 
          </p>
        )}
      </div>
    </div>
  )
}

export default ActionGame