import React from 'react';
import Navbar from '../GraphicdesComp/Navbar';
import Quote from './Quote';
import Contact from '../GraphicdesComp/Contact';
import Footer from '../GraphicdesComp/Footer';
import AnimateDev from '../GraphicdesComp/AnimateDev';
import Partner from '../GraphicdesComp/Partner';
import BlockSoftDev from '../GraphicdesComp/BlockSoftDev';
import BlockAppDev from '../GraphicdesComp/BlockAppDev';
import ActionGame from '../GraphicdesComp/ActionGame';
import PreBlockDev from '../GraphicdesComp/PreBlockDev';

const GraphicsDes = () => {
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

export default GraphicsDes