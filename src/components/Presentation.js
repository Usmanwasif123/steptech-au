import React, {useState} from 'react';
import '../assets/wrapper/Presentation.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Presentation = () => {
  const [content, setContent] = useState({
    heading: 'branding',
    paragraph: 'We are conveying the best application improvement administrations for the medical care area since we are in the advanced world. We are planning applications going from telemedicine to applications created for patients and emergency clinics. Everything is conceivable with creatives like us.',
    imageSrc: 'https://i.ibb.co/V33HHvz/image.png'
});
const handleLinkClick = (category) => {
switch (category) {
case 'branding':
  setContent({
    heading: 'branding',
    paragraph: 'We are conveying the best application improvement administrations for the medical care area since we are in the advanced world. We are planning applications going from telemedicine to applications created for patients and emergency clinics. Everything is conceivable with creatives like us.',
    imageSrc: 'https://i.ibb.co/V33HHvz/image.png'
  });
  break;
case 'marketing':
  setContent({
    heading: 'marketing',
    paragraph: 'Phones are adequately not to make you run your eatery. We can construct applications for your cafés with a super present day approach. Presently reserve a spot, take orders, help simple installments and draw in clients through your café application.',
    imageSrc: 'https://i.ibb.co/jMhGnq4/image.png'
  });
  break;
case 'blockchain':
  setContent({
    heading: 'blockchain',
    paragraph: 'We fabricate educated Internet business applications for Web based business stores. We have done it before for our clients to make them arrive at the business’ recent fads. Watch out for your orders, stock, and client experience. Profit of the best Internet business applications up until this point.',
    imageSrc: "https://i.ibb.co/NTGXBM4/image.png"
  });
  break;
case 'artificialintelligence':
  setContent({
    heading: 'artificial intelligence',
    paragraph: 'We additionally increase land areas and permit land vendors to impart quicker and share their property subtleties, portfolios, offers, and new plans with clients with our imaginative versatile application advancement administrations. Sell with intelligence.',
    imageSrc: "https://i.ibb.co/RBs6LMm/image.png"
  });
  break;
case 'blockchain':
  setContent({
    heading: 'blockchain',
    paragraph: 'We plan instructive learning applications with inventive and enamoring energies, particularly for understudies. Increment information, altered learning courses of events, refreshed web-based instructive entrances, and simplicity of learning and correspondence with one of a kind elements.',
    imageSrc: "https://i.ibb.co/7nPfy0t/image.png"
  });
}
};
    
  return (
    <Container className='present-container'>
       <Col xs={12} md={6}>
      <div className='link-container' style={{marginTop: '200px', marginLeft: '0%'}}>
      <Link className='link'   onClick={() => handleLinkClick('branding')}>all</Link>
      <Link className='link'  onClick={() => handleLinkClick('marketing')}> Web Developement</Link>
      <Link className='link'  onClick={() => handleLinkClick('blockchain')}>App Developement</Link>
      <Link className='link'  onClick={() => handleLinkClick('artificialintelligence')}>Game Developement</Link>
      </div>
      </Col>
    <Row style={{display: 'flex',  flexWrap: "wrap", padding: "0 4px", alignItems: 'center', justifyContent: 'center', marginTop: '80px'}}>
    {/* Create four equal columns that sits next to each other */}
   
       <Col col={12} md={8} lg={6} className='column'>
        <img src="https://imgtr.ee/images/2024/02/20/078be0c22df45ec68a636526f0a045ab.png" className="img-fluid" alt="wedding" />
        <img src="https://imgtr.ee/images/2024/02/20/65da18de939f926930b9430b2e80df64.png" className="img-fluid" alt="rocks" />
        <img src="https://imgtr.ee/images/2024/02/20/078be0c22df45ec68a636526f0a045ab.png" className="img-fluid" alt="wedding" />
        <img src="https://imgtr.ee/images/2024/02/20/65da18de939f926930b9430b2e80df64.png" className="img-fluid" alt="rocks" />
      </Col>  
      <Col col={12} md={8} lg={6} className='column'>
      <img src="https://imgtr.ee/images/2024/02/20/65da18de939f926930b9430b2e80df64.png" className="img-fluid" alt="wedding" />
      <img src="https://imgtr.ee/images/2024/02/20/078be0c22df45ec68a636526f0a045ab.png" className="img-fluid" alt="rocks" />
      <img src="https://imgtr.ee/images/2024/02/20/65da18de939f926930b9430b2e80df64.png" className="img-fluid" alt="wedding" />
      <img src="https://imgtr.ee/images/2024/02/20/078be0c22df45ec68a636526f0a045ab.png" className="img-fluid" alt="rocks" />
      </Col> 
           
      </Row>
    </Container>
  );
};

export default Presentation
