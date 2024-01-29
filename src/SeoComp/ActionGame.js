import React, {useState} from 'react';
import '../assets/SeoWrapper/Actiongame.css';
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
    <div className='seo-section6'>
      <h1 className='main-heading'>Step Tech SEO Services </h1>
      <p className='main-p'>Regardless of the size and niche of your brand, our experts are here to offer you the best quality SEO Services.
       Step Tech, the best SEO marketing company in Australia, offers its clients the following services: Let’s explore with us
      </p>
      <ArrowRightIcon style={{...arrowStyle1, top: '4%'}} onClick={toggleParagraphVisibility1}/>
      <ArrowRightIcon style={{...arrowStyle2, top: '24%'}} onClick={toggleParagraphVisibility2} />
      <ArrowRightIcon style={{...arrowStyle3, top: '42%'}} onClick={toggleParagraphVisibility3}/>
      <ArrowRightIcon style={{...arrowStyle4, top: '60%'}} onClick={toggleParagraphVisibility4}/>
      <ArrowRightIcon style={{...arrowStyle5, top: '77%'}} onClick={toggleParagraphVisibility5}/>
      <h1 className='h1' onClick={toggleParagraphVisibility1} >E-Commerce SEO</h1>
      <div style={containerStyle1}>
        {isParagraphVisible1 && (
          <p className='p1'>
            Boost your retention rate by providing clients with a convenient, round-the-clock purchasing experience. To create personalized
             brand experiences, we run targeted email advertising campaigns and optimize your website for voice search and mobile devices. 
             Integrations to Walmart Marketplace are another tool we &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             &nbsp;&nbsp;&nbsp;offer to increase your sales volume.

          </p>
        )}
      </div>
      <h1 className='h2' onClick={toggleParagraphVisibility2} >Link Building</h1>
      <div style={containerStyle2}>
        {isParagraphVisible2 && (
          <p className='p2'>
            We are dependable in the link-building company, devoted to developing white hat link-building strategies custom-made to your 
            singular industry requirements. We also create an internal SEO link-building framework for your website to &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; maximize your backlink-building efforts.
          </p>
        )}
      </div>
      <h1 className='h3' onClick={toggleParagraphVisibility3}>Local SEO </h1>
      <div style={containerStyle3}>
        {isParagraphVisible3 && (
          <p className='p3'>
            Step Tech provides conversion-driven <b>local SEO services</b> to ensure your company ranks prominently in local SEO searches and
             sees a rise in sales. You can gain precious leads, traffic, and sales opportunities with a strong local &nbsp;&nbsp;&nbsp;&nbsp;
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             business SEO presence. 

          </p>
        )}
      </div>
      <h1 className='h4' onClick={toggleParagraphVisibility4} >On-Page SEO </h1>
      <div style={containerStyle4}>
        {isParagraphVisible4 && (
          <p className='p4'>
            At Step Tech, we guarantee our SEO services are lined up with search engines' best practices to enhance your website's dependability.
             Our <b>SEO specialists</b> publish unique, value-rich content, improve your headlines and HTML tags, and &nbsp;&nbsp;&nbsp;&nbsp; 
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;exploit high-resolution
              images.
          </p>
        )}
      </div>
      <h1 className='h5' onClick={toggleParagraphVisibility5}>Off-Page SEO </h1>
      <div style={containerStyle5}>
        {isParagraphVisible5 && (
          <p className='p5'>
            Increasing web exposure and establishing brand reputation need off-page SEO. Connect with our SEO agency and enable us to help you
             display your business's expertise. We use influencer marketing, social media marketing, and link building &nbsp;&nbsp;&nbsp;&nbsp;
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             to produce excellent links with excellent ratings.
          </p>
        )}
      </div>
    </div>
  )
}

export default ActionGame