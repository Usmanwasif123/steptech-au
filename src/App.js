import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quote from './pages/Quote';
import About from './pages/About';
import Web  from './pages/Web';
import MobileApp from './pages/MobileApp';
import Game from './pages/Game';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='get-a-quote' element={<Quote/>}/>
        <Route path='about-us' element={<About/>}/>
        <Route path='web-design-and-development' element={<Web/>}/>
        <Route path='app-development' element={<MobileApp/>}/>
        <Route path='game-development' element={<Game/>}/>
      </Routes>
    </Router>
  );
}

export default App;
