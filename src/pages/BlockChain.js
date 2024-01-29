import React from 'react';
import Navbar from '../BlockchainComp/Navbar';
import Quote from './Quote';
import Contact from '../BlockchainComp/Contact';
import Footer from '../BlockchainComp/Footer';
import AnimateDev from '../BlockchainComp/AnimateDev';
import Partner from '../BlockchainComp/Partner';
import BlockSoftDev from '../BlockchainComp/BlockSoftDev';
import BlockAppDev from '../BlockchainComp/BlockAppDev';
import ActionGame from '../BlockchainComp/ActionGame';
import PreBlockDev from '../BlockchainComp/PreBlockDev';

const BlockChain = () => {
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

export default BlockChain 