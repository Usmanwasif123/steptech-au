import React from 'react';
import Navbar from '../PortfolioComp/Navbar';
import Quote from './Quote';
import Ecommerce from '../PortfolioComp/Ecommerce';
import Webdevelopement from '../PortfolioComp/Webdevelopement';
import Contact from '../PortfolioComp/Contact';
import Footer from '../PortfolioComp/Footer';
import Magneto from '../PortfolioComp/Magneto';
import Shopify from '../PortfolioComp/Shopify';
import Help from '../PortfolioComp/Help';
import Secure from '../PortfolioComp/Secure';
import FrontExpert from '../PortfolioComp/FrontExpert';


const Portfolio = () => {
  return (
    <div>
      <Navbar/>
      <Quote/>
      <Webdevelopement/>
      <Magneto/>
      <Ecommerce/>
      <Shopify/>
      <Help/>
      <Secure/>
      <FrontExpert/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Portfolio
