import React, {useState} from 'react';
import '../assets/wrapper/Clients.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Clients = () => {

    const[setting, setSetting] = useState({
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1920,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
              dots: false
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
    <div className='client-container'>
      <h1>OUR CLIENTS</h1>
      <p>Below are some of our clients displayed for you to gauge the quality of work you 
        can expect from us
      </p>
      <div className='client-carousel'>
          <Slider {...setting}>
            <div>
                <img src='https://i.ibb.co/WvR8mck/image.png' alt='ai'/>
            </div> 
            <div>
                <img src='https://i.ibb.co/jrHZnCH/logo-03.png' alt='ai'/>
            </div>
            <div>
                <img src='https://i.ibb.co/WKXr38N/image.png' alt='ai'/>
            </div> 
            <div>
                <img src='https://i.ibb.co/f9Rf9ht/image.png' alt='ai'/>
              </div>
            <div>
                <img src='https://i.ibb.co/n8dzQMq/Untitled-2.png' alt='ai'/>
            </div> 
            <div>
                <img src='https://i.ibb.co/FHL9R4f/logo-02.png' alt='ai'/>
            </div>
            <div>
                <img src='https://i.ibb.co/SB1P0ny/image.png' alt='ai'/>
            </div>
            <div>
                <img src='https://i.ibb.co/DgY2x7f/image.png' alt='ai'/>
            </div> 
            <div>
                <img src='https://i.ibb.co/WHsfR1b/image.png' alt='ai'/>
            </div>  
            <div>
                <img src='https://i.ibb.co/jMsjR12/Untitled-4-1.png' alt='ai'/>
            </div> 
            <div>
                <img src='https://i.ibb.co/dpG9LN1/logo-04.png' alt='ai'/>
            </div> 
            <div>
               <img src='https://i.ibb.co/N7Rb8r9/image.png' alt='ai'/>
            </div> 
            <div>
                <img src='https://i.ibb.co/MnYsRc0/image.png' alt='ai'/>
            </div> 
            <div>
                <img src='https://i.ibb.co/Csb73Db/logo-01.png' alt='ai'/>
            </div> 
          </Slider>
      </div>
    </div>
  )
}

export default Clients
