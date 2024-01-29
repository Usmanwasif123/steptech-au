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
import Blog from './pages/Blog';
import Bitcoinblog from './pages/Bitcoin-blog';
import GraphicsDes from './pages/GraphicDesign';
import Seo from './pages/Seo';
import SocailMed from './pages/Socialmedia';
import Digitalmarketing from './pages/DigitMarketing';

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
        <Route path='/software-development' element={<SoftDev/>}/>
        <Route path='/ecommerce' element={<Ecom/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/bitcoin-halving-2024-everything-you-need-to-know' element={<Bitcoinblog/>}/>
        <Route path='/graphic-designing' element={<GraphicsDes/>}/>
        <Route path='/search-engine-optimization' element={<Seo/>}/>
        <Route path='/social-media-management' element={<SocailMed/>}/>
        <Route path='/digital-marketing' element={<Digitalmarketing/>}/>
      </Routes>
    </Router>
  );
}

export default App;
