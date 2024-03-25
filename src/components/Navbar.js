import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';


/*material ui icons*/
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{background: 'linear-gradient(256.4deg, #491255 107.97%, #6347AA  7.85%)'}}>
      <Container>
        <Navbar.Brand href="/">
          <div>
          <img className='h-auto w-25 d-inline-block ' style={{objectFit: 'cover', position: 'relative', zIndex: '1'}}
          src='https://i.ibb.co/wsYXv8n/image.png' alt='logo'/>
          </div>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto d-flex justify-content-between">
            <Nav.Link href="/home" className='text-white fw-bolder'>Home</Nav.Link>
            <Nav.Link href="/about-us" className='text-white fw-bolder'>About</Nav.Link>
            <NavDropdown href="/services" title="Services" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/web-design-and-development">Web Design & Development</NavDropdown.Item>
              <NavDropdown.Item href="/app-development">Mobile App UI UX Design & Development</NavDropdown.Item>
              <NavDropdown.Item href="/game-design-and-development">Game Development</NavDropdown.Item>
              <NavDropdown.Item href="/2D/3D-Animation">2D/3D Animation</NavDropdown.Item>
              <NavDropdown.Item href="/block-chain-development">BlockChain Development</NavDropdown.Item>
              <NavDropdown.Item href="/nft">NFT</NavDropdown.Item>
              <NavDropdown.Item href="/artificial-intelligence-development">ArtificialIntelligence Development</NavDropdown.Item>
              <NavDropdown.Item href="/software-development">Software Development</NavDropdown.Item>
              <NavDropdown.Item href="/ecommerce">Ecommerce</NavDropdown.Item>
              <NavDropdown.Item href="/graphic-designing">Graphic Design</NavDropdown.Item>
              <NavDropdown.Item href="/search-engine-optimization">Search Engine Optimization</NavDropdown.Item>
              <NavDropdown.Item href="/social-media-management">Social Media Management</NavDropdown.Item>
              <NavDropdown.Item href="/digital-marketing">Digital Marketing</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/portfolio" className='text-white fw-bolder'>Portfolio</Nav.Link>
            <Nav.Link href="/blog" className='text-white fw-bolder'>Blog</Nav.Link>
          </Nav>
          <Nav className="d-flex justify-content-between align-items-center">
          <Button variant='light' className="p-3 text-capitalize d-inline-flex bg-light text-black fw-bolder">let's connect</Button>
          <Button variant='light' className="p-3 d-inline-flex bg-light text-black"><LocalPhoneIcon/></Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavBar;