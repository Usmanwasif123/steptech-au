import React from 'react';
import Navbar from '../SoftDevComp/Navbar';
import Contact from '../SoftDevComp/Contact';
import Footer from '../components/Footer';
import AnimateDev from '../SoftDevComp/AnimateDev';
import Partner from '../SoftDevComp/Partner';
import BlockSoftDev from '../SoftDevComp/BlockSoftDev';
import BlockAppDev from '../SoftDevComp/BlockAppDev';
import ActionGame from '../SoftDevComp/ActionGame';
import PreBlockDev from '../SoftDevComp/PreBlockDev';

const SoftDev = () => {
  return (
    <div>
      <Navbar/>
      <BlockSoftDev/>
      <PreBlockDev/>
      <AnimateDev/>
      <BlockAppDev/>
      <ActionGame/>
      <Partner/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default SoftDev