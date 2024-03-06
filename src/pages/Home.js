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

const Home = () => {
  return (
    <div>
      <NavBar/>
      <Ourwork/>
      <Solution/>
      <Services/>
      <Presentation/>
    </div>
  )
}

export default Home
