import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quote from './pages/Quote';
import About from './pages/About';
import Web  from './pages/Web';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='get-a-quote' element={<Quote/>}/>
        <Route path='about-us' element={<About/>}/>
        <Route path='web-design-and-development' element={<Web/>}/>
      </Routes>
    </Router>
  );
}

export default App;
