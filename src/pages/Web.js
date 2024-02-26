import React from 'react';
import Navbar from '../WebComp/Navbar';
import Ecommerce from '../WebComp/Ecommerce';
import Process from '../WebComp/Process';
import Webdevelopement from '../WebComp/Webdevelopement';
import Contact from '../WebComp/Contact';
import Footer from '../components/Footer';
import Magneto from '../WebComp/Magneto';
import Shopify from '../WebComp/Shopify';
import Help from '../WebComp/Help';
import Secure from '../WebComp/Secure';
import Partner from '../WebComp/Partner';
import FrontExpert from '../WebComp/FrontExpert';
import BackExpert from '../WebComp/BackExpert';

const Web = () => {
  return (
    <div>
      <Navbar/>
      <Webdevelopement/>
      <Ecommerce/>
      <Magneto/>
      <Shopify/>
      <Help/>
      <Secure/>
      <FrontExpert/>
      <BackExpert/>
      <Process/>
      <Partner/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Web
