import {Container, Navbar } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../assets/wrapper/Header.css';
import headervideo from '../assets/videos/headervideo.mp4';

/*material ui icons*/
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

function Header() {
  return (
    <Navbar className='header-section' expand="lg">
      
      <Container>
      <video autoPlay loop muted className="header-video">
          <source src={headervideo} type="video/mp4" />
        </video>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row className='align-items-center h-100'>
        <Col xs={12} md={8}>
          <h1 className='left-heading p-1 fw-700 text-uppercase text-white'>optimization the potential</h1>
        </Col>
        <Col xs={6} md={4}>
        <p className='left-para p-2 text-uppercase text-white mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Duis sem elit, varius nec magna nec, viverra dictum risus. Sed suscipit ornare pretium. </p>
        <FacebookIcon style={{color: '#fff', fontSize: '2rem'}}/>
        <InstagramIcon style={{color: '#fff', fontSize: '2rem'}}/>
        <LinkedInIcon style={{color: '#fff', fontSize: '2rem'}}/>
        <TwitterIcon style={{color: '#fff', fontSize: '2rem'}}/>
        </Col>
      </Row>
      </Container>
    </Navbar>
  );
}

export default Header;
