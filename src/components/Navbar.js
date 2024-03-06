import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import {Facebook, Twitter, Instagram, LinkedIn, LocalPhone} from '@mui/icons-material';

const  NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container className='navbar-container' style={{ background: '#333', height: '100vh', width: '98.5vw', scrollBehavior: 'smooth'}}>
          <Navbar.Brand href="/">
            <img src={'https://i.ibb.co/19gmTW3/logo-05.jpg'} alt="Logo" className="logo" style={{height: '5rem', width: '5rem', marginLeft: '-12rem', marginTop: '-3rem'}}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" style={{marginLeft: '35rem', display: 'inline-flex'}}>
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')} style={{marginLeft: '3rem', color: '#fff', textDecoration: 'none'}}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')} style={{marginLeft: '3rem', color: '#fff', textDecoration: 'none'}}>About</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'services' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')} style={{marginLeft: '3rem', color: '#fff', textDecoration: 'none'}}>Services</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'portfolio' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')} style={{marginLeft: '3rem', color: '#fff', textDecoration: 'none'}}>Portfolio</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'blog' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')} style={{marginLeft: '3rem', color: '#fff', textDecoration: 'none'}}>Blog</Nav.Link>
            </Nav>
            <span className="navbar-text" style={{marginTop: '-2.2rem', display: 'flex', background: 'tranparent'}}>
              <HashLink to='#connect'>
                <button className="main-button" style={{background: '#00ddFF', border: 'none', marginLeft: '70rem', marginTop: '0rem', padding: '1.5rem 1.5rem', fontSize: '1rem', zIndex: '2'}}>
                  <span style={{color: '#333'}}>Let’s Connect</span>
                </button>
              </HashLink>
              <button className="main-button" style={{background: '#00ddFF', border: 'none', marginLeft: '0rem', marginTop: '0rem', padding: '1rem 1.5rem', fontSize: '0.5rem', zIndex: '2'}}>
                  <LocalPhone style={{color: '#333'}}></LocalPhone>
                </button>
            </span>
          </Navbar.Collapse>
          <h1 className="main-heading" style={{color: '#fff', fontSize: '60px', marginTop: '120px', marginLeft: '5rem', paddingLeft: '700px', display: 'flex', textAlign: 'flex-end', justifyContent: 'flex-end', textTransform: 'uppercase'}}>
            optimizing the potential
          </h1>
          <p className="main-para" style={{color: '#fff', fontSize: '1rem', marginTop: '5rem', paddingRight: '50rem', marginLeft: '3rem', display: 'flex', textAlign: 'flex-start', justifyContent: 'flex-start'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod in pellentesque massa placerat duis ultricies lacus sed turpis.</p>
          <Nav.Link href="#letstalks" className={'main-link'} onClick={() => onUpdateActiveLink('letstalks')} style={{marginLeft: '3rem', color: '#fff', textDecoration: 'none', marginTop: '3rem', display: 'flex', textAlign: 'flex-start', justifyContent: 'flex-start'}}>Lets's Talk</Nav.Link>
          <Facebook style={{color: '#fff', marginTop: '2rem', marginLeft: '3rem'}}></Facebook>
          <Twitter style={{color: '#fff', marginTop: '2rem', marginLeft: '1rem'}}></Twitter>
          <Instagram  style={{color: '#fff', marginTop: '2rem', marginLeft: '1rem'}}></Instagram>
          <LinkedIn  style={{color: '#fff', marginTop: '2rem', marginLeft: '1rem'}}></LinkedIn>
        </Container>
      </Navbar>
  )
}

export default NavBar