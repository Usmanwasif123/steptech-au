import React from 'react';
import Navbar from '../GameComp/Navbar';
import Process from '../GameComp/Process';
import Contact from '../GameComp/Contact';
import Footer from '../components/Footer';
import Shopify from '../GameComp/Shopify';
import Help from '../GameComp/Help';
import Partner from '../GameComp/Partner';
import GameDev from '../GameComp/GameDev';
import ActionGame from '../GameComp/ActionGame';
import Sportgame from '../GameComp/Sportgame';

const Game = () => {
  return (
    <div>
      <Navbar/>
      <GameDev/>
      <ActionGame/>
      <Sportgame/>
      <Shopify/>
      <Help/>
      <Process/>
      <Partner/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Game
