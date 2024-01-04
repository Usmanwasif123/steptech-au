import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quote from './pages/Quote';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='get-a-quote' element={<Quote/>}/>
      </Routes>
    </Router>
  );
}

export default App;
