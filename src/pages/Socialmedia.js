import React from 'react';
import Navbar from '../SocialMedComp/Navbar';
import Quote from './Quote';
import Contact from '../SocialMedComp/Contact';
import Footer from '../SocialMedComp/Footer';
import AnimateDev from '../SocialMedComp/AnimateDev';
import Partner from '../SocialMedComp/Partner';
import BlockSoftDev from '../SocialMedComp/BlockSoftDev';
import BlockAppDev from '../SocialMedComp/BlockAppDev';
import ActionGame from '../SocialMedComp/ActionGame';
import PreBlockDev from '../SocialMedComp/PreBlockDev';

const SocailMed = () => {
  return (
    <div>
      <Navbar/>
      <Quote/>
      <BlockSoftDev/>
      <AnimateDev/>
      <BlockAppDev/>
      <PreBlockDev/>
      <ActionGame/>
      <Partner/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default SocailMed