import React from 'react';
import Navbar from '../BlogComp/Navbar';
import Quote from './Quote';
import Footer from '../BlogComp/Footer';
import ActionGame from '../BlogComp/ActionGame';

const Blog = () => {
  return (
    <div>
      <Navbar/>
      <Quote/>
      <ActionGame/>
      <Footer/>
    </div>
  )
}

export default Blog
