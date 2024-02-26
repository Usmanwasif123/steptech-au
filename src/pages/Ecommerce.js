import React from 'react';
import Navbar from '../EcomComp/Navbar';
import Contact from '../EcomComp/Contact';
import Footer from '../components/Footer';
import AnimateDev from '../EcomComp/AnimateDev';
import Partner from '../EcomComp/Partner';
import BlockSoftDev from '../EcomComp/BlockSoftDev';
import BlockAppDev from '../EcomComp/BlockAppDev';
import ActionGame from '../EcomComp/ActionGame';
import PreBlockDev from '../EcomComp/PreBlockDev';

const Ecom = () => {
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

export default Ecom