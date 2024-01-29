import React from 'react';
import Navbar from '../DigitalMarComp/Navbar';
import Quote from './Quote';
import Contact from '../DigitalMarComp/Contact';
import Footer from '../DigitalMarComp/Footer';
import AnimateDev from '../DigitalMarComp/AnimateDev';
import Partner from '../DigitalMarComp/Partner';
import BlockSoftDev from '../DigitalMarComp/BlockSoftDev';
import BlockAppDev from '../DigitalMarComp/BlockAppDev';
import ActionGame from '../DigitalMarComp/ActionGame';
import PreBlockDev from '../DigitalMarComp/PreBlockDev';

const Digitalmarketing = () => {
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

export default Digitalmarketing