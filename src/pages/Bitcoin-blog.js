import React from 'react';
import Navbar from '../BitcoinBlogComp/Navbar';
import Quote from './Quote';
import Footer from '../BitcoinBlogComp/Footer';
import ActionGame from '../BitcoinBlogComp/ActionGame';

const Bitcoinblog = () => {
  return (
    <div>
      <Navbar/>
      <Quote/>
      <ActionGame/>
      <Footer/>
    </div>
  )
}

export default Bitcoinblog
