import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quote from './pages/Quote';
import Web  from './pages/Web';
import MobileApp from './pages/MobileApp';
import Game from './pages/Game';
import Animation from './pages/Animation';
import BlockChain from './pages/BlockChain';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='get-a-quote' element={<Quote/>}/>
        <Route path='web-design-and-development' element={<Web/>}/>
        <Route path='app-development' element={<MobileApp/>}/>
        <Route path='game-design-and-development' element={<Game/>}/>
        <Route path='2D/3D-Animation' element={<Animation/>}/>
        <Route path='block-chain-development' element={<BlockChain/>}/>
      </Routes>
    </Router>
  );
}

export default App;
