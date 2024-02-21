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
    imageSrc1: 'https://imgtr.ee/images/2024/02/20/078be0c22df45ec68a636526f0a045ab.png',
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
    imageSrc1: 'https://imgtr.ee/images/2024/02/20/078be0c22df45ec68a636526f0a045ab.png',
    imageSrc2: undefined,
    imageSrc3: undefined,
    imageSrc4: undefined,
    imageSrc5: 'https://imgtr.ee/images/2024/02/20/65da18de939f926930b9430b2e80df64.png',
    imageSrc6: 'https://imgtr.ee/images/2024/02/20/078be0c22df45ec68a636526f0a045ab.png',
    imageSrc7: undefined,
    imageSrc8: undefined,
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
        baseHeight = 200 + Math.ceil(numImages / 2) * 50;
        break;
      case 'app':
        baseHeight = 100 + Math.ceil(numImages / 2) * 25;
        break;
      case 'game':
        baseHeight = 5 + Math.ceil(numImages / 2) * 5;
        break;
      default:
        baseHeight = 500;
        break;
    }

    const additionalHeight = Math.ceil(numImages / 2) * (
      category === 'web' ? 50 : (
        category === 'app' ? 25 : (
          category === 'game' ? 5 : 300
        )
      )
    );

    const finalHeight = baseHeight + additionalHeight;
    console.log("final_height", finalHeight );
    return finalHeight;
  };

  const initialHeight = calculateInitialHeight();
  console.log("i_height", initialHeight);
  setContainerHeight(initialHeight);
  console.log('Category:', category); // Log category value
    console.log('Content:', content); // Log content value
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
          src && <img key={index} src={src} className="img-fluid" alt="wedding" />
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
