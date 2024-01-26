import React, {useState} from 'react';
import '../assets/EcomWrapper/Actiongame.css';
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
    <div className='ecom-section6'>
      <h1 className='main-heading'>Our E-Commerce Development Services</h1>
      <p className='main-p'>We offer head-to-head eCommerce development services, assisting you in developing and growing
       your eCommerce website across platforms. Regardless of the size and niche of your business, our experts are ready
        to take your e-commerce store to new heights
      </p>
      <ArrowRightIcon style={{...arrowStyle1, top: '5%'}} onClick={toggleParagraphVisibility1}/>
      <ArrowRightIcon style={{...arrowStyle2, top: '25%'}} onClick={toggleParagraphVisibility2} />
      <ArrowRightIcon style={{...arrowStyle3, top: '43%'}} onClick={toggleParagraphVisibility3}/>
      <ArrowRightIcon style={{...arrowStyle4, top: '61%'}} onClick={toggleParagraphVisibility4}/>
      <ArrowRightIcon style={{...arrowStyle5, top: '80%'}} onClick={toggleParagraphVisibility5}/>
      <h1 className='h1' onClick={toggleParagraphVisibility1} >eCommerce Web Design</h1>
      <div style={containerStyle1}>
        {isParagraphVisible1 && (
          <p className='p1'>
            We provide unique designs that are true to your brand identity, increasing your visibility while providing a
             user experience (UX) tailored to your target audience. We ensure your online store offers an engaging 
             experience that keeps customers examining your products and services.

          </p>
        )}
      </div>
      <h1 className='h2' onClick={toggleParagraphVisibility2} >Shopify Development 
</h1>
      <div style={containerStyle2}>
        {isParagraphVisible2 && (
          <p className='p2'>
            Our Shopify website developer creates Shopify stores optimized for conversion since they specialize in build
             Shopify websites. Utilizing Shopify's unique features and project specifications, we create an online shop 
             that increases sales and brand exposure.
          </p>
        )}
      </div>
      <h1 className='h3' onClick={toggleParagraphVisibility3}>WooCommerce Development</h1>
      <div style={containerStyle3}>
        {isParagraphVisible3 && (
          <p className='p3'>
            Our woocommerce expert will support your e-store by generating high-quality leads and guiding them to conversion by meeting 
            their intentions. They use eCommerce plugins for WordPress to deliver simple-to-use, customized eCommerce solutions, from 
            SEO optimization to crystal-clear navigation.
          </p>
        )}
      </div>
      <h1 className='h4' onClick={toggleParagraphVisibility4} >Magneto Development </h1>
      <div style={containerStyle4}>
        {isParagraphVisible4 && (
          <p className='p4'>
            Our Magento developers utilize their expertise and imagination to transform intricate requirements into scalable online presences
             and smooth user experiences, no matter whether your company provides unique services, has a large inventory, or operates several
              e-stores.
          </p>
        )}
      </div>
      <h1 className='h5' onClick={toggleParagraphVisibility5}>PHP Development Services</h1>
      <div style={containerStyle5}>
        {isParagraphVisible5 && (
          <p className='p5'>
            We offer great PHP website development services, creating high-performance web apps with various PHP frameworks, including Laravel
             and code ignition. Using our PHP development services, you may create strong, safe server-side PHP web applications. 
          </p>
        )}
      </div>
    </div>
  )
}

export default ActionGame