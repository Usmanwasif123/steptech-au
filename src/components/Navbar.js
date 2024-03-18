import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import {Facebook, Twitter, Instagram, LinkedIn, LocalPhone} from '@mui/icons-material';
import '../assets/wrapper/Navbar.css'

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
        <Container fluid  className='navbar-container bg-dark'>
        <video autoPlay loop muted className="video">
        <source src="your-video-source.mp4" type="video/mp4" />
        </video> 
          <Navbar.Brand href="/">
            <img src={'https://i.ibb.co/j8S1jw9/image.png'} alt="Logo" className="navbar-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-items ms-5 col-lg-12 justify-content-end d-flex">
              <Nav.Link href="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')} >Home</Nav.Link>
              <Nav.Link href="/about-us" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')} >About</Nav.Link>
              <Nav.Link href="/services" className={activeLink === 'services' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('services')} >Services</Nav.Link>
              <Nav.Link href="/portfolio" className={activeLink === 'portfolio' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('portfolio')} >Portfolio</Nav.Link>
              <Nav.Link href="/blog" className={activeLink === 'blog' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('blog')} >Blog</Nav.Link>
            </Nav>
            <span className="navbar-text p-4">
              <HashLink to='#connect'>
                <button className="main-button">
                  <span style={{color: '#333'}}>Let’s Connect</span>
                </button>
              </HashLink>
              <button className="main-button" >
                  <LocalPhone style={{color: '#333'}}></LocalPhone>
                </button>
            </span>
          </Navbar.Collapse>
          <h1 className="main-heading ps-1">
            optimizing the potential
          </h1>
          <p className="main-para ps-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod in pellentesque massa placerat duis ultricies lacus sed turpis.</p>
          <Nav.Link href="#letstalks" className='main-link' onClick={() => onUpdateActiveLink('letstalks')}>Lets's Talk</Nav.Link>
          <Facebook className='fb'></Facebook>
          <Twitter className='tw' ></Twitter>
          <Instagram className='ig' ></Instagram>
          <LinkedIn  className='li'></LinkedIn>
        </Container>
      </Navbar>
  )
}

export default NavBar