import React from 'react';
import Navbar from '../SeoComp/Navbar';
import Contact from '../SeoComp/Contact';
import Footer from '../components/Footer';
import AnimateDev from '../SeoComp/AnimateDev';
import Partner from '../SeoComp/Partner';
import BlockSoftDev from '../SeoComp/BlockSoftDev';
import BlockAppDev from '../SeoComp/BlockAppDev';
import ActionGame from '../SeoComp/ActionGame';
import PreBlockDev from '../SeoComp/PreBlockDev';

const Seo = () => {
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

export default Seo