import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/HomePage';
import About from './components/Aboutme';
function App() {
  return (
    <Routes>
  <Route exact path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  </Routes>

  );
}

export default App;
