import React from 'react';
import Navbar from '../MobileAppComp/Navbar';
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
import Passion from '../MobileAppComp/Passion';
import Revamp from '../MobileAppComp/Revamp';
import Promoted from '../MobileAppComp/Promoted';

const Web = () => {
  return (
    <div>
      <Navbar/>
      <Webdevelopement/>
      <Ecommerce/>
      <Magneto/>
      <Shopify/>
      <Help/>
      <Services/>
      <Passion/>
      <Revamp/>
      <Promoted/>
      <Process/>
      <Partner/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Web
