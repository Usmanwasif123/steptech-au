import React, {useState, useEffect} from 'react';
import '../assets/wrapper/Presentation.css';
import { Container, Row, Col } from 'react-bootstrap';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';


const Presentation = () => {
   // Define categories array
   const category = ['all', 'web', 'app', 'game'];
  console.log('Category passed to Presentation:', category); // Log the category prop


  // Define state to manage selected category
  const [selectedCategory, setSelectedCategory] = useState(category[0]); // Default to 'all'

  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredImage(index);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };


  const [content, setContent] = useState({
    imageSrc1:{
      src: 'https://i.ibb.co/SsHBgxS/1.jpg',
      heading: 'Heading 1',
  },
  
  imageSrc2: {
     src: 'https://imgtr.ee/images/2024/02/20/65da18de939f926930b9430b2e80df64.png',
     heading: 'Heading 2',
  },

  imageSrc3:{
    src: 'https://imgtr.ee/images/2024/02/20/078be0c22df45ec68a636526f0a045ab.png',
    heading: 'Heading 3',
  },

  imageSrc4:{
    src: 'https://imgtr.ee/images/2024/02/20/65da18de939f926930b9430b2e80df64.png',
    heading: 'Heading 4',

  } ,

  imageSrc5:{
    src: 'https://imgtr.ee/images/2024/02/20/65da18de939f926930b9430b2e80df64.png',
    heading: 'Heading 5',

  },

  imageSrc6:{
    src: 'https://imgtr.ee/images/2024/02/20/078be0c22df45ec68a636526f0a045ab.png',
    heading: 'Heading 6',
  }, 
  imageSrc7:{
    src: 'https://imgtr.ee/images/2024/02/20/65da18de939f926930b9430b2e80df64.png',
    heading: 'Heading 7',
  },

  imageSrc8:{
    src:'https://imgtr.ee/images/2024/02/20/078be0c22df45ec68a636526f0a045ab.png',
    heading: 'Heading 8',
  } 
});
const handleLinkClick = (category) => {
switch (category) {
case 'all':
  setContent({
    imageSrc1:{
      src: 'https://i.ibb.co/SsHBgxS/1.jpg',
      heading: 'Heading 1',
  },
  
  imageSrc2: {
     src: 'https://imgtr.ee/images/2024/02/20/65da18de939f926930b9430b2e80df64.png',
     heading: 'Heading 2',
  },

  imageSrc3:{
    src: 'https://imgtr.ee/images/2024/02/20/078be0c22df45ec68a636526f0a045ab.png',
    heading: 'Heading 3',
  },

  imageSrc4:{
    src: 'https://imgtr.ee/images/2024/02/20/65da18de939f926930b9430b2e80df64.png',
    heading: 'Heading 4',

  } ,

  imageSrc5:{
    src: 'https://imgtr.ee/images/2024/02/20/65da18de939f926930b9430b2e80df64.png',
    heading: 'Heading 5',

  },

  imageSrc6:{
    src: 'https://imgtr.ee/images/2024/02/20/078be0c22df45ec68a636526f0a045ab.png',
    heading: 'Heading 6',
  }, 
  imageSrc7:{
    src: 'https://imgtr.ee/images/2024/02/20/65da18de939f926930b9430b2e80df64.png',
    heading: 'Heading 7',
  },

  imageSrc8:{
    src:'https://imgtr.ee/images/2024/02/20/078be0c22df45ec68a636526f0a045ab.png',
    heading: 'Heading 8',
  } 
  });
  break;
case 'web':
  setContent({
    imageSrc1:{
      src:'https://i.ibb.co/sb3svFn/image-4.jpg',
      heading: 'Web 1'
    }, 
    imageSrc2:{
      src: 'https://i.ibb.co/LCV2GCg/2.jpg',
      heading: 'Web 2'
    },
     
    imageSrc3:{
      src: 'https://i.ibb.co/DkshKyG/Mask-group-2.jpg',
      heading: 'Web 3'
    }, 
    imageSrc4:{
      src: 'https://i.ibb.co/4K0X7D7/Mask-group-3.jpg',
      heading: 'Web 4'
    }, 
    imageSrc5:{
      src: 'https://i.ibb.co/SsHBgxS/1.jpg',
      heading: 'Web 5'
    }, 
    imageSrc6: {
      src: 'https://i.ibb.co/DkshKyG/Mask-group-2.jpg',
      heading: 'Web 6'
    }, 
    imageSrc7:{
      src:'https://i.ibb.co/SsHBgxS/1.jpg',
      heading: 'Web 7'
    }, 
    imageSrc8: {
      src: 'https://i.ibb.co/sb3svFn/image-4.jpg',
      heading: 'Web 8'
    }
  });
  break;
case 'app':
  setContent({
    imageSrc1:{
      src:'https://imgtr.ee/images/2024/02/20/078be0c22df45ec68a636526f0a045ab.png',
      heading: 'App 1'
    }, 
    imageSrc2:{
      src: 'https://imgtr.ee/images/2024/02/20/65da18de939f926930b9430b2e80df64.png',
      heading: 'App 2'
    },
    imageSrc3:{
      src: undefined,
      heading: 'App 3'
    }, 
    imageSrc4:{
      src: undefined,
      heading: 'App 4'
    }, 
    imageSrc5:{
      src:'https://imgtr.ee/images/2024/02/20/65da18de939f926930b9430b2e80df64.png',
      heading: 'App 5'
    }, 
    imageSrc6:{
      src: 'https://imgtr.ee/images/2024/02/20/078be0c22df45ec68a636526f0a045ab.png',
      heading: 'App 6'
    }, 
    imageSrc7:{
      src: undefined,
      heading: 'App 7'
    }, 
    imageSrc8:{
      src: undefined,
      heading: 'App 8'
    } 
  });
  break;
case 'game':
  setContent({
    imageSrc1:{
      src: "https://imgtr.ee/images/2024/02/20/078be0c22df45ec68a636526f0a045ab.png",
      heading: 'Game 1'
    }, 
    imageSrc2:{
      src:  undefined,
      heading: 'Game 2'
    },
    imageSrc3:{
      src:  undefined,
      heading: 'Game 3'
    },
    imageSrc4:{
      src:  undefined,
      heading: 'Game 4'
    },
    imageSrc5:{
      src:  undefined,
      heading: 'Game 5'
    },
    imageSrc6:{
      src:  undefined,
      heading: 'Game 6'
    },
    imageSrc7:{
      src:  undefined,
      heading: 'Game 7'
    },
    imageSrc8:{
      src:  undefined,
      heading: 'Game 8'
    }
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
      <div className='pre-link-container' style={{ marginTop: '200px', marginLeft: '0%' }}>
        <button className='pre-link' onClick={() => handleLinkClick('all')}>all</button>
        <button className='pre-link' onClick={() => handleLinkClick('web')}> Web Developement</button>
        <button className='pre-link' onClick={() => handleLinkClick('app')}>App Developement</button>
        <button className='pre-link' onClick={() => handleLinkClick('game')}>Game Developement</button>
      </div>
    </Col>
    <Row style={{ display: 'flex', flexWrap: "wrap", padding: "0 4px", alignItems: 'center', justifyContent: 'center', marginTop: '80px' }}>
      {/* Create four equal columns that sit next to each other */}
      <Col col={12} md={8} lg={6} className='column'>
      {Object.entries(content).slice(0, 4).map(([key, { src, heading }], index) =>
          src && (
            <div key={index} className="image-container" onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
              {hoveredImage === index && (
                <div className="hover-div">
                  <h3>{heading}</h3>
                  <p>start a project</p>
                 <ArrowCircleRightIcon style={{marginLeft: '3rem', marginTop: "-1.5rem", fontSize: '2rem', color: 'linear-gradient(180deg, #7554C1 29.51%, #243F82 93.15%)', cursor: 'pointer'}}/>
                </div>
              )}
              <img src={src} className="img-fluid" alt={heading} />
            </div>
          )
        )}
      </Col>
      <Col col={12} md={8} lg={6} className='column'>
      {Object.entries(content).slice(4).map(([key, { src, heading }], index) =>
          src && (
            <div key={index + 4} className="image-container" onMouseEnter={() => handleMouseEnter(index + 4)} onMouseLeave={handleMouseLeave}>
              {hoveredImage === index + 4 && (
                <div className="hover-div">
                  <h3>{heading}</h3>
                  <p>start a project</p>
                  <ArrowCircleRightIcon style={{marginLeft: '3rem', marginTop: "-1.5rem", fontSize: '2rem', color: 'linear-gradient(180deg, #7554C1 29.51%, #243F82 93.15%)', cursor: 'pointer'}}/>
                </div>
              )}
              <img src={src} className="img-fluid" alt={heading} />
            </div>
          )
        )}
      </Col>
    </Row>
  </Container>
);
};

export default Presentation
