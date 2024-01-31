import React from 'react';
import Navbar from '../NftComp/Navbar';
import Contact from '../NftComp/Contact';
import Footer from '../NftComp/Footer';
import AnimateDev from '../NftComp/AnimateDev';
import Partner from '../NftComp/Partner';
import BlockSoftDev from '../NftComp/BlockSoftDev';
import BlockAppDev from '../NftComp/BlockAppDev';
import ActionGame from '../NftComp/ActionGame';
import PreBlockDev from '../NftComp/PreBlockDev';

const Nft = () => {
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

export default Nft