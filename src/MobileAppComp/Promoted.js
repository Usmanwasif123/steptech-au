import React, {useState} from 'react';
import '../assets/MobileAppWrapper/Promoted.css';

const Promoted = () => {
  const [content, setContent] = useState({
          heading: 'Healthcare',
          paragraph: 'We are conveying the best application improvement administrations for the medical care area since we are in the advanced world. We are planning applications going from telemedicine to applications created for patients and emergency clinics. Everything is conceivable with creatives like us.',
          imageSrc: 'https://i.ibb.co/V33HHvz/image.png'
  });
  const handleButtonClick = (category) => {
    switch (category) {
      case 'healthcare':
        setContent({
          heading: 'Healthcare',
          paragraph: 'We are conveying the best application improvement administrations for the medical care area since we are in the advanced world. We are planning applications going from telemedicine to applications created for patients and emergency clinics. Everything is conceivable with creatives like us.',
          imageSrc: 'https://i.ibb.co/V33HHvz/image.png'
        });
        break;
      case 'restaurant':
        setContent({
          heading: 'Restaurant',
          paragraph: 'Phones are adequately not to make you run your eatery. We can construct applications for your cafés with a super present day approach. Presently reserve a spot, take orders, help simple installments and draw in clients through your café application.',
          imageSrc: 'https://i.ibb.co/jMhGnq4/image.png'
        });
        break;
      case 'ecommerce':
        setContent({
          heading: 'E-commerce',
          paragraph: 'We fabricate educated Internet business applications for Web based business stores. We have done it before for our clients to make them arrive at the business’ recent fads. Watch out for your orders, stock, and client experience. Profit of the best Internet business applications up until this point.',
          imageSrc: "https://i.ibb.co/NTGXBM4/image.png"
        });
        break;
      case 'real estate':
        setContent({
          heading: 'Real Estate',
          paragraph: 'We additionally increase land areas and permit land vendors to impart quicker and share their property subtleties, portfolios, offers, and new plans with clients with our imaginative versatile application advancement administrations. Sell with intelligence.',
          imageSrc: "https://i.ibb.co/RBs6LMm/image.png"
        });
        break;
      case 'education':
        setContent({
          heading: 'Education',
          paragraph: 'We plan instructive learning applications with inventive and enamoring energies, particularly for understudies. Increment information, altered learning courses of events, refreshed web-based instructive entrances, and simplicity of learning and correspondence with one of a kind elements.',
          imageSrc: "https://i.ibb.co/7nPfy0t/image.png"
        });
      }
    };
  return (
    <div className='promoted-container'>
       <h1 className='main-heading'>Industries, We Have Promoted Instantly</h1>
      <div className='promoted-box'>&nbsp;</div>
      <button className='h-btn' onClick={() => handleButtonClick('healthcare')}>
        healthcare
      </button>
      <button className='r-btn' onClick={() => handleButtonClick('restaurant')}>
        restaurant
      </button>
      <button className='e-btn' onClick={() => handleButtonClick('ecommerce')}>
        ecommerce
      </button>
      <button className='re-btn' onClick={() => handleButtonClick('real estate')}>
        real estate
      </button>
      <button className='ed-btn' onClick={() => handleButtonClick('education')}>
        education
      </button>
      <div className='p-left-box'>&nbsp;</div>
      <div className='p-left-box1'>&nbsp;</div>
      <h1 className='heading-h1'>{content.heading}</h1>
      <p>{content.paragraph}</p>
      <img className='p-left-img'src={content.imageSrc} alt={content.heading} />
      <button className='click-btn'>click here</button>
    </div>
  )
}

export default Promoted
