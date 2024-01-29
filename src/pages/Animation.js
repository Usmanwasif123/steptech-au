import React from 'react';
import Navbar from '../AnimationComp/Navbar';
import Quote from './Quote';
import Contact from '../AnimationComp/Contact';
import Footer from '../AnimationComp/Footer';
import Shopify from '../AnimationComp/Shopify';
import ActionGame from '../AnimationComp/ActionGame';
import Sportgame from '../AnimationComp/Sportgame';
import AnimateDev from '../AnimationComp/AnimateDev';
import Expertise from '../AnimationComp/Expertise';
import Partner from '../AnimationComp/Partner';

const Animation = () => {
  return (
    <div>
      <Navbar/>
      <Quote/>
      <ActionGame/>
      <Sportgame/>
      <Shopify/>
      <AnimateDev/>
      <Expertise/>
      <Partner/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Animation 