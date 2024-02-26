import React, { useState } from 'react';
import '../assets/wrapper/Brand.css';
import { Container, Row, Col } from 'react-bootstrap';

const Brand = () => {
  const [activeCategory, setActiveCategory] = useState('branding');

  const [content, setContent] = useState({
    heading: 'branding',
    paragraph: 'We are conveying the best application improvement services for the healthcare sector since we are in the digital world. We are designing applications ranging from telemedicine to applications developed for patients and hospitals. Everything is possible with creatives like us.',
    imageSrc: 'https://i.ibb.co/DtKXRcw/image.png'
  });

  const handleHeadingClick = (category) => {
    setActiveCategory(category);
    switch (category) {
      case 'branding':
        setContent({
          heading: 'branding',
          paragraph: 'We are conveying the best application improvement services for the healthcare sector since we are in the digital world. We are designing applications ranging from telemedicine to applications developed for patients and hospitals. Everything is possible with creatives like us.',
          imageSrc: 'https://i.ibb.co/DtKXRcw/image.png'
        });
        break;
      case 'marketing':
        setContent({
          heading: 'marketing',
          paragraph: 'Phones are not enough to manage your restaurant. We can build applications for your restaurants with a super modern approach. Now book reservations, take orders, facilitate easy payments, and engage customers through your restaurant application.',
          imageSrc: 'https://i.ibb.co/6NGWY9b/image.png'
        });
        break;
      case 'blockchain':
        setContent({
          heading: 'blockchain',
          paragraph: 'We build knowledgeable E-commerce applications for E-commerce stores. We have done it before for our clients to make them reach the industry’s latest trends. Keep track of your orders, inventory, and customer experience. Avail the best E-commerce applications so far.',
          imageSrc: "https://i.ibb.co/mJkNnvy/image.png"
        });
        break;
      case 'artificialintelligence':
        setContent({
          heading: 'artificial intelligence',
          paragraph: 'We also augment real estate sectors and enable real estate agents to communicate faster and share their property details, portfolios, offers, and new schemes with customers through our innovative mobile application development services. Sell with intelligence.',
          imageSrc: "https://i.ibb.co/BZTXspN/image.png"
        });
        break;
      case 'ecommerce':
        setContent({
          heading: 'ecommerce',
          paragraph: 'We design educational learning applications with creative and captivating energies, especially for students. Increase knowledge, customized learning timelines, updated online educational portals, and ease of learning and communication with unique features.',
          imageSrc: "https://i.ibb.co/hHnPfkW/parcel-paper-cartons-with-shopping-cart-logo-trolley-laptop-keyboard.jpg"
        });
        break;
      default:
        break;
    }
  };

  return (
    <Container className='brand-container' style={{ marginTop: '363px' }}>
      <Row>
        <Col xs={12} md={6}>
          <h1 className={activeCategory === 'branding' ? 'link-active' : 'heading'} onClick={() => handleHeadingClick('branding')}>
            branding
          </h1>
          <h1 className={activeCategory === 'marketing' ? 'link-active' : 'heading'} onClick={() => handleHeadingClick('marketing')}>
            marketing
          </h1>
          <h1 className={activeCategory === 'blockchain' ? 'link-active' : 'heading'} onClick={() => handleHeadingClick('blockchain')}>
            blockchain
          </h1>
          <h1 className={activeCategory === 'artificialintelligence' ? 'link-active' : 'heading'} onClick={() => handleHeadingClick('artificialintelligence')}>
            artificial intelligence
          </h1>
          <h1 className={activeCategory === 'ecommerce' ? 'link-active' : 'heading'} onClick={() => handleHeadingClick('ecommerce')}>
            ecommerce
          </h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <img className='brand-image' src={content.imageSrc} alt={content.heading} />
          <p className='brand-p'>{content.paragraph}</p>
        </Col>
      </Row>
    </Container>
  )
};

export default Brand;
