import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quote from './pages/Quote';
import Web  from './pages/Web';
import MobileApp from './pages/MobileApp';
import Game from './pages/Game';
import Animation from './pages/Animation';
import BlockChain from './pages/BlockChain';
import Nft from './pages/NFT';
import ArtificialIntelligence from './pages/ArtificialIntelligence';
import Portfolio from './pages/Portfolio';
import Service from './pages/Service';
import SoftDev from './pages/SoftDevelopement';
import Ecom from './pages/Ecommerce';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='get-a-quote' element={<Quote/>}/>
        <Route path='/web-design-and-development' element={<Web/>}/>
        <Route path='/app-development' element={<MobileApp/>}/>
        <Route path='/game-design-and-development' element={<Game/>}/>
        <Route path='/2D/3D-Animation' element={<Animation/>}/>
        <Route path='/block-chain-development' element={<BlockChain/>}/>
        <Route path='/nft' element={<Nft/>}/>
        <Route path='/artificial-intelligence-development' element={<ArtificialIntelligence/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/software-developement' element={<SoftDev/>}/>
        <Route path='/ecommerce' element={<Ecom/>}/>
      </Routes>
    </Router>
  );
}

export default App;
