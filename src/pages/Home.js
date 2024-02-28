import React from 'react';
import Navbar from '../components/Navbar';
import Vision from '../components/Vision';
import Solution from '../components/Solution';
import Services from '../components/Services';
import Process from '../components/Process';
import Presentation from '../components/Presentation';
import Partner from '../components/Partner';
import Chooseus from '../components/Chooseus';
import Clients from '../components/Clients';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Brand from '../components/Brand';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Vision/>
      <Solution/>
      <Services/>
      <Process/>
      <Brand/>
      <Presentation/>
      <Partner/>
      <Chooseus/>
      <Clients/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
