import React, { useState} from 'react';
import '../assets/MobileAppWrapper/services.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {

    const[setting, setSetting] = useState({
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
        });
    
  return (
    <div className='appservice-container'>
      <h1>StepTech Mobile Application Development Services</h1>
      <p>At StepTech Australia, the top application development company in Australia, we offer our clients all-inclusive 
        mobile app development services for our clients. The mobile application services we offer are the following.</p>
      <div className='app-carousel'>
          <Slider {...setting}>
            <div className='app-cards'>
                <img className='img1' src='https://i.ibb.co/jhhbnm7/image.png' alt='ai'/>
                <h3 className='h1-ai'>IOS App Development</h3>
                <p className='p1-ai'>With the help of mobile apps, our iOS app development services allow you to 
                redefine your business and take it to a new, digitally sustainable level where the delivery of value 
                and market discernment are optimized.</p>
            </div> 
              <div className='app-cards'> 
                <img className='img2' src='https://i.ibb.co/C9rNB3j/image.png' alt='ai'/>
                <h3 className='h2-ai'>Android App Development</h3>
                <p className='p2-ai'>StepTech develops Android applications from the bottom up. It works with existing 
                IT teams to improve their apps with distinctive functions, integrations, and modules, providing a more 
                personalized solution and a fantastic user experience.</p>
              </div>
              <div className='app-cards'>
                <img className='img3' src='https://i.ibb.co/4RMvfQT/image.png' alt='ai'/>
                <h3 className='h3-ai'>ReactNative App <br/>Development</h3>
                <p className='p3-ai'>With extensive expertise in the field, our professional React Native developers can 
                deliver head-to-head services that let our clients fully benefit from the React Native web framework, 
                which is quick, durable, and highly adaptable while developing.</p>
              </div> 
              <div className='app-cards'>
                <img className='img4' src='https://i.ibb.co/BT0yLd7/image.png' alt='ai'/>
                 <h3 className='h4-ai'>Flutter App <br/>Development</h3>            
                <p className='p4-ai'>Our Flutter Developers specialize in creating incredibly customized apps according 
                to your requirements. We emphasize timely project delivery and a results-driven app development approach.
                </p>
               </div>  
              <div className='app-cards'>
                <img className='img5' src='https://i.ibb.co/DfLxmcT/image.png' alt='ai'/>
                <h3 className='h5-ai'>Xamarin App <br/>Development</h3>
                <p className='p5-ai'>Divert your thoughts from paper to computerized structure since we make an intelligent model to catch the 
                most recent plan ideas. It's a second to see your thoughts with your eyes and approve your ideas and plans to go with the right 
                methodology. We cleverly discharge your items and administrations.At Step Tech, we take great delight in our outstanding Xamarin
                development services.</p>
              </div> 
              <div className='app-cards'>
                <img className='img6' src='https://i.ibb.co/t3syVkT/image.png' alt='ai'/>
                <h3 className='h6-ai'>Ionic App Development</h3>
                <p className='p6-ai'>As one of the leading Ionic App Development firms, we look to develop native apps 
                that use the Ionic framework to meet your cross-platform requirements. We create engaging and stylish 
                mobile apps on various platforms with our Iconic app development services.</p>
                </div>
              <div className='app-cards'>
                <img  className='img7' src='https://i.ibb.co/XWvvfJm/image.png' alt='ai'/>
                <h3 className='h7-ai'>AR/VR Technology</h3>
                <p className='p7-ai'>Get the energies of advanced visual substance in reality while having our expanded reality application 
                improvement Administrations. Experience super current AR applications to facilitate the course of any specialty, including 
                clinical, design, inside, and land. 'Imagine something amazing, Act current' with Increased Reality Applications.</p>
                </div> 
              <div className='app-cards'>
                <img className='img8' src='https://i.ibb.co/31gjpbg/image.png' alt='ai'/>
                <h3 className='h8-ai'>Wearables</h3>            
                <p className='p8-ai'>We are renowned for our wearable application improvement administrations. We assemble wearable applications
                loaded with redid warnings and updates, simple to explore and stack, worked in sensors with bluetooth network, extreme 
                information and solid security. Wear brilliant watches and glasses that are savvy enough to flex.</p>
               </div> 
          </Slider>
      </div>
  </div>   
  )
}

export default Services
