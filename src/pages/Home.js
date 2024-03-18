import React from 'react';
import NavBar from '../components/Navbar';
import Ourwork from '../components/Vision';
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
import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      <NavBar/>
      <Header/>
      <Ourwork/>
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
