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
    <div className='service-container'>
      <h1>Get All App Development Services From Technophiles</h1>
      <p className='service-p'>We know the force of versatile application improvement, that is the reason we decide to 
      fill in as an imaginative portable application improvement organization. We just lean toward stylish plans and 
      great usefulness while creating applications for your organizations. It’s our tendency to convey the best. Win more
      with versatile application improvement administrations.</p>
      <div className='carousel'>
          <Slider {...setting}>
            <div className='cards'>
                <img className='img1' src='https://i.ibb.co/jhhbnm7/image.png' alt='ai'/>
                <div className='card1'>
                <h3 className='h1-ai'>Software Quality</h3>
                <p className='p1-ai'>We support nothing without testing, and with regards to programming quality testing, 
                we are generally inquisitive to fix things for portable applications. Our careful QA specialists 
                exclusively center around further developing portable applications making it more smooth and more 
                vigorous with measurements and programming quality testing.</p>
                </div>
            </div> 
            <div className='cards'> 
                <img className='img2' src='https://i.ibb.co/C9rNB3j/image.png' alt='ai'/>
                <div className='card2'>
                <h3 className='h2-ai'>Migration Services</h3>
                <p className='p2-ai'>It's a great opportunity to relocate all your versatile applications to another web 
                structure without problem. You are fortunate that we are here to move your versatile applications to your 
                ongoing web engineering with complete security, intelligent and responsive details. Now is the ideal time to 
                stream carefully with us.</p>
                </div>
            </div>
            <div className='cards'>
                <img className='img3' src='https://i.ibb.co/4RMvfQT/image.png' alt='ai'/>
                <div className='card3'>
                <h3 className='h3-ai'>UX/UI Engineering</h3>
                <p className='p3-ai'>UI/UX is the spirit of portable turn of events. Clients collaborate with applications
                 that have great plans and looks since it's the way to finding success. We will foster UI/UX wIth inventive
                 Cta's, Essential activity buttons, picture overlaying, tempting symbols, and all that catch the clients' 
                 eye.</p>
                 </div>
            </div> 
            <div className='cards'>
                <img className='img4' src='https://i.ibb.co/BT0yLd7/image.png' alt='ai'/>
                <div className='card4'>
                <h3 className='h4-ai'>Android App</h3>            
                <p className='p4-ai'>We astutely convey proficient outcomes, inventive thoughts, and advanced Android 
                application improvement to our important clients. Dexterous, Scrum, Kunban, Blade 2, Java, and Gradle are
                our instruments to fabricate savage android application improvement for you. Move computerized, this time 
                with an android application improvement office.</p>
              </div>
            </div>  
            <div className='cards'>
              <div className='card5'>
                <img className='img5' src='https://i.ibb.co/DfLxmcT/image.png' alt='ai'/>
                <h3 className='h5-ai'>Prototyping</h3>
                <p className='p5-ai'>Divert your thoughts from paper to computerized structure since we make an intelligent model to catch the 
                most recent plan ideas. It's a second to see your thoughts with your eyes and approve your ideas and plans to go with the right 
                methodology. We cleverly discharge your items and administrations.</p>
              </div>
            </div> 
            <div className='cards'>
                <img className='img6' src='https://i.ibb.co/t3syVkT/image.png' alt='ai'/>
                <div className='card6'>
                <h3 className='h6-ai'>Blockchain App</h3>
                <p className='p6-ai'>Secure your information with open-source innovation since we're specialists in blockchain application 
                advancement. Experience a powerful 'Brilliant Worker for hire' and a legitimate decentralized structure to work cleverly in 
                blockchains. Reshape your method of business even with portable based applications.</p>
                </div>
            </div>
            <div className='cards'>
                <img  className='img7' src='https://i.ibb.co/XWvvfJm/image.png' alt='ai'/>
                <div className='card7'>
                <h3 className='h7-ai'>AR/VR Technology</h3>
                <p className='p7-ai'>Get the energies of advanced visual substance in reality while having our expanded reality application 
                improvement Administrations. Experience super current AR applications to facilitate the course of any specialty, including 
                clinical, design, inside, and land. 'Imagine something amazing, Act current' with Increased Reality Applications.</p>
                </div>
            </div> 
            <div className='cards'>
                <img className='img8' src='https://i.ibb.co/31gjpbg/image.png' alt='ai'/>
                <div className='card8'>
                <h3 className='h8-ai'>Wearables</h3>            
                <p className='p8-ai'>We are renowned for our wearable application improvement administrations. We assemble wearable applications
                loaded with redid warnings and updates, simple to explore and stack, worked in sensors with bluetooth network, extreme 
                information and solid security. Wear brilliant watches and glasses that are savvy enough to flex.</p>
                </div>
          </div> 
          </Slider>
      </div>
  </div>   
  )
}

export default Services
