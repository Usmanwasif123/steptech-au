import React, {useState, useEffect} from 'react';
import '../assets/wrapper/Presentation.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Presentation = () => {
   // Define categories array
   const category = ['all', 'web', 'app', 'game'];
  console.log('Category passed to Presentation:', category); // Log the category prop


  // Define state to manage selected category
  const [selectedCategory, setSelectedCategory] = useState(category[0]); // Default to 'all'


  const [content, setContent] = useState({
    imageSrc1: 'https://i.ibb.co/SsHBgxS/1.jpg',
    imageSrc2: 'https://imgtr.ee/images/2024/02/20/65da18de939f926930b9430b2e80df64.png',
    imageSrc3: 'https://imgtr.ee/images/2024/02/20/078be0c22df45ec68a636526f0a045ab.png',
    imageSrc4: 'https://imgtr.ee/images/2024/02/20/65da18de939f926930b9430b2e80df64.png',
    imageSrc5: 'https://imgtr.ee/images/2024/02/20/65da18de939f926930b9430b2e80df64.png',
    imageSrc6: 'https://imgtr.ee/images/2024/02/20/078be0c22df45ec68a636526f0a045ab.png',
    imageSrc7: 'https://imgtr.ee/images/2024/02/20/65da18de939f926930b9430b2e80df64.png',
    imageSrc8: 'https://imgtr.ee/images/2024/02/20/078be0c22df45ec68a636526f0a045ab.png',
});
const handleLinkClick = (category) => {
switch (category) {
case 'all':
  setContent({
    imageSrc1: 'https://imgtr.ee/images/2024/02/20/078be0c22df45ec68a636526f0a045ab.png',
    imageSrc2: 'https://imgtr.ee/images/2024/02/20/65da18de939f926930b9430b2e80df64.png',
    imageSrc3: 'https://imgtr.ee/images/2024/02/20/078be0c22df45ec68a636526f0a045ab.png',
    imageSrc4: 'https://imgtr.ee/images/2024/02/20/65da18de939f926930b9430b2e80df64.png',
    imageSrc5: 'https://imgtr.ee/images/2024/02/20/65da18de939f926930b9430b2e80df64.png',
    imageSrc6: 'https://imgtr.ee/images/2024/02/20/078be0c22df45ec68a636526f0a045ab.png',
    imageSrc7: 'https://imgtr.ee/images/2024/02/20/65da18de939f926930b9430b2e80df64.png',
    imageSrc8: 'https://imgtr.ee/images/2024/02/20/078be0c22df45ec68a636526f0a045ab.png',
  });
  break;
case 'web':
  setContent({
    imageSrc1: 'https://i.ibb.co/sb3svFn/image-4.jpg',
    imageSrc2: 'https://i.ibb.co/LCV2GCg/2.jpg',
    imageSrc3: 'https://i.ibb.co/DkshKyG/Mask-group-2.jpg',
    imageSrc4: 'https://i.ibb.co/4K0X7D7/Mask-group-3.jpg',
    imageSrc5: 'https://i.ibb.co/SsHBgxS/1.jpg',
    imageSrc6: 'https://i.ibb.co/DkshKyG/Mask-group-2.jpg',
    imageSrc7: 'https://i.ibb.co/SsHBgxS/1.jpg',
    imageSrc8: 'https://i.ibb.co/sb3svFn/image-4.jpg',
  });
  break;
case 'app':
  setContent({
    imageSrc1: 'https://imgtr.ee/images/2024/02/20/078be0c22df45ec68a636526f0a045ab.png',
    imageSrc2: 'https://imgtr.ee/images/2024/02/20/65da18de939f926930b9430b2e80df64.png',
    imageSrc3: undefined,
    imageSrc4: undefined,
    imageSrc5: 'https://imgtr.ee/images/2024/02/20/65da18de939f926930b9430b2e80df64.png',
    imageSrc6: 'https://imgtr.ee/images/2024/02/20/078be0c22df45ec68a636526f0a045ab.png',
    imageSrc7: undefined,
    imageSrc8: undefined,
  });
  break;
case 'game':
  setContent({
    imageSrc1: "https://imgtr.ee/images/2024/02/20/078be0c22df45ec68a636526f0a045ab.png",
    imageSrc2: undefined,
    imageSrc3: undefined,
    imageSrc4: undefined,
    imageSrc5: undefined,
    imageSrc6: undefined,
    imageSrc7: undefined,
    imageSrc8: undefined,
  });
}
console.log('Content:', content); // Log content state after it's updated
};

const [containerHeight, setContainerHeight] = useState(0);
useEffect(() => {
  const calculateInitialHeight = () => {
    const numImages = Object.values(content).filter(src => src !== undefined).length;
    let baseHeight;

    switch (category) {
      case 'all':
        baseHeight = 500 + Math.ceil(numImages / 2) * 300;
        break;
      case 'web':
        baseHeight = 500 + Math.ceil(numImages / 2) * 300;
        break;
      case 'app':
        baseHeight = 500 + Math.ceil(numImages / 2) * 300;
        break;
      case 'game':
        baseHeight = 500 + Math.ceil(numImages / 2) * 300;
        break;
      default:
        baseHeight = 500;
        break;
    }
  }

  const initialHeight = calculateInitialHeight();
  setContainerHeight(initialHeight);
}, [category, content]);

return (
  <Container className='present-container' style={{ height: containerHeight }}>
    <Col xs={12} md={6}>
      <div className='link-container' style={{ marginTop: '200px', marginLeft: '0%' }}>
        <Link className='link' onClick={() => handleLinkClick('all')}>all</Link>
        <Link className='link' onClick={() => handleLinkClick('web')}> Web Developement</Link>
        <Link className='link' onClick={() => handleLinkClick('app')}>App Developement</Link>
        <Link className='link' onClick={() => handleLinkClick('game')}>Game Developement</Link>
      </div>
    </Col>
    <Row style={{ display: 'flex', flexWrap: "wrap", padding: "0 4px", alignItems: 'center', justifyContent: 'center', marginTop: '80px' }}>
      {/* Create four equal columns that sit next to each other */}
      <Col col={12} md={8} lg={6} className='column'>
        {Object.values(content).slice(0, 4).map((src, index) =>
          src &&
          <img key={index} src={src} className="img-fluid" alt="wedding" />
        )}
      </Col>
      <Col col={12} md={8} lg={6} className='column'>
        {Object.values(content).slice(4).map((src, index) =>
          src && <img key={index} src={src} className="img-fluid" alt="rocks" /> 
        )}
      </Col>
    </Row>
  </Container>
);
};

export default Presentation
