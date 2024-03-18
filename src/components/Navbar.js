import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto d-flex justify-content-between align-items-center">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about-us">About</Nav.Link>
           
            <NavDropdown href="/services" title="Services" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">web development</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                app development
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">game development</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
          </Nav>
          <Nav className="align-items-center">
          <Button variant="dark" className="p-3 mx-2">Dark</Button>
          <Button variant="dark" className="ms-auto p-3" >Dark</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;