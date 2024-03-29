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
      <Row className='align-items-center'>
        <Col xs={12} md={8}>
          <h1 className='left-heading text-uppercase text-white'>optimization the potential</h1>
        </Col>
        <Col xs={12} md={4}>
        <p className='left-para text-uppercase text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Duis sem elit, varius nec magna nec, viverra dictum risus. Sed suscipit ornare pretium. </p>
        <FacebookIcon className='header-icons' style={{color: '#fff', fontSize: '2rem'}}/>
        <InstagramIcon className='header-icons' style={{color: '#fff', fontSize: '2rem'}}/>
        <LinkedInIcon className='header-icons' style={{color: '#fff', fontSize: '2rem'}}/>
        <TwitterIcon className='header-icons' style={{color: '#fff', fontSize: '2rem'}}/>
        </Col>
      </Row>
      </Container>
    </Navbar>
  );
}

export default Header;
