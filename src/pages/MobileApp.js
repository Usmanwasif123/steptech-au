import React from 'react';
import Navbar from '../MobileAppComp/Navbar';
import Quote from './Quote';
import Ecommerce from '../MobileAppComp/Ecommerce';
import Process from '../MobileAppComp/Process';
import Webdevelopement from '../MobileAppComp/Webdevelopement';
import Contact from '../MobileAppComp/Contact';
import Footer from '../MobileAppComp/Footer';
import Magneto from '../MobileAppComp/Magneto';
import Shopify from '../MobileAppComp/Shopify';
import Help from '../MobileAppComp/Help';
import Partner from '../MobileAppComp/Partner';
import Services from '../MobileAppComp/Services';

const Web = () => {
  return (
    <div>
      <Navbar/>
      <Quote/>
      <Webdevelopement/>
      <Ecommerce/>
      <Magneto/>
      <Shopify/>
      <Help/>
      <Services/>
      <Process/>
      <Partner/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Web
