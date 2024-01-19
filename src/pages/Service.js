import React from 'react';
import Navbar from '../ServiceComp/Navbar';
import Quote from './Quote';
import Process from '../ServiceComp/Process';
import Contact from '../ServiceComp/Contact';
import Footer from '../ServiceComp/Footer';
import Shopify from '../ServiceComp/Shopify';
import Help from '../ServiceComp/Help';
import Partner from '../ServiceComp/Partner';
import ActionGame from '../ServiceComp/ActionGame';
import Sportgame from '../ServiceComp/Sportgame';
import Last from '../ServiceComp/Last';

const Service = () => {
  return (
    <div>
      <Navbar/>
      <Quote/>
      <ActionGame/>
      <Sportgame/>
      <Shopify/>
      <Help/>
      <Process/>
      <Partner/>
      <Last/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Service
