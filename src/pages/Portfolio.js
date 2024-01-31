import React from 'react';
import Navbar from '../PortfolioComp/Navbar';
import Webdevelopement from '../PortfolioComp/Webdevelopement';
import Contact from '../PortfolioComp/Contact';
import Footer from '../PortfolioComp/Footer';
import Magneto from '../PortfolioComp/Magneto';


const Portfolio = () => {
  return (
    <div>
      <Navbar/>
      <Webdevelopement/>
      <Magneto/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Portfolio
