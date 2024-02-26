import React from 'react';
import Navbar from '../ArtificialIntelComp/Navbar';
import Contact from '../ArtificialIntelComp/Contact';
import Footer from '../components/Footer';
import AnimateDev from '../ArtificialIntelComp/AnimateDev';
import Partner from '../ArtificialIntelComp/Partner';
import BlockSoftDev from '../ArtificialIntelComp/BlockSoftDev';
import BlockAppDev from '../ArtificialIntelComp/BlockAppDev';
import ActionGame from '../ArtificialIntelComp/ActionGame';
import PreBlockDev from '../ArtificialIntelComp/PreBlockDev';

const ArtificialIntelligence = () => {
  return (
    <div>
      <Navbar/>
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

export default ArtificialIntelligence