import React, {useEffect, useRef} from 'react';
import '../assets/wrapper/Brand.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import $ from 'jquery'; // Import jQuery
import 'jquery.ripples'; // Import jQuery Ripples


const Brand = () => {
  const imgRef = useRef(null); // Create a ref for the img element

  useEffect(() => {
    $(imgRef.current).ripples({ // Initialize ripple effect on the img element
      resolution: 500,
      dropRadius: 20,
      perturbance: 0.03
    });

    return () => { // Cleanup function to remove ripple effect when component unmounts
      $(imgRef.current).ripples('destroy');
    };
  }, []); // Run only once on component mount

  return (
    <Container fluid  expand="lg" className='brand-container'>
      <Row className='justify-content-center'>
        <Col xs={12} lg={6}>
          <div className='outer-div'>
          <Card className='card-inner' id='card1-inner'>
             <Card.Img ref={imgRef} className="card-image" src='https://i.ibb.co/L9XHDX2/image.png' alt='card-img' />
          </Card>
            <h1 className='card-heading text-capitalize mt-4' id='heading-1'>artificial intelligence</h1>
          </div>
          </Col>
          <Col xs={12} lg={6}>
        <div className='outer-div'> {/* Adjust margin-top as needed */}
          <Card className='card-inner' id='card2-inner'>
            <Card.Img className="card-image" src='https://i.ibb.co/pLLSFyH/Blockchain.jpg' alt='card-img'/>
            <div className="ripple"></div>
          </Card>
          <h1 className='card-heading text-capitalize mt-4' id='heading-2'>blockchain</h1>
        </div>
        </Col>
        </Row>
        <Row className='justify-content-center'>
        <Col xs={12} lg={6}>
        <div className='second-outer-div'> {/* Adjust margin-top as needed */}
          <Card className='card-inner' id='card3-inner'>
          <img className="card-image" src='https://i.ibb.co/QCJvbmX/Branding.png' alt='card-img'/>
          </Card>
          <h1 className='card-heading text-capitalize ms-3 mt-4'>branding</h1>
        </div>
        </Col>
        <Col xs={12} lg={6}>
        <div className='second-outer-div'> {/* Adjust margin-top as needed */}
          <Card className='card-inner' id='card4-inner'>
          <img className="card-image" src='https://i.ibb.co/6Wb4526/Marketing.jpg' alt='card-img'/>
          </Card>
          <h1 className='card-heading text-capitalize mt-4' id='heading-4'>marketing</h1>
        </div>
        </Col>
      </Row>
    </Container>
  )
};

export default Brand;
