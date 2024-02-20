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
                <img src='https://imgtr.ee/images/2024/02/20/48c6f8ac1ebe36fdecd0762d23e5aff1.png' alt='ai'/>
            </div>
            <div>
                <img src='https://i.ibb.co/HFc9GBq/image.png' alt='ai'/>
            </div> 
            <div>
                <img src='https://i.ibb.co/hsqPR4Y/image.png' alt='ai'/>
              </div>
            <div>
                <img src='https://i.ibb.co/jDp4WFv/image.png' alt='ai'/>
            </div> 
            <div>
                <img src='https://imgtr.ee/images/2024/02/20/1bb114b653de2e3dfa9678093d1a4cd6.png' alt='ai'/>
            </div>
            <div>
                <img src='https://i.ibb.co/SB1P0ny/image.png' alt='ai'/>
            </div>
            <div>
                <img src='https://i.ibb.co/Cm34K0Q/image.png' alt='ai'/>
            </div> 
            <div>
                <img src='https://i.ibb.co/N7Rb8r9/image.png' alt='ai'/>
            </div>  
            <div>
                <img src='https://i.ibb.co/k1pq10H/image.png' alt='ai'/>
            </div> 
            <div>
                <img src='https://imgtr.ee/images/2024/02/20/9bd63f594cc6b41fbc634f6b4134f889.png' alt='ai'/>
            </div> 
            <div>
                <img src='https://i.ibb.co/WHsfR1b/image.png' alt='ai'/>
            </div> 
            <div>
                <img src='https://i.ibb.co/MnYsRc0/image.png' alt='ai'/>
            </div> 
            <div>
                <img src='https://imgtr.ee/images/2024/02/20/6544bdf0997a13ee5af6ea8b9b5991a9.png' alt='ai'/>
            </div> 
          </Slider>
      </div>
    </div>
  )
}

export default Clients
