import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/HomePage';
import About from './components/Aboutme';
import Header from './components/Header';
import Certification from './components/Certification';
import Experience from './components/Experience';
import Education from './components/Education';
function App() {
  return (
    <>
    <Header/>
    <Routes>
  <Route exact path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/exp" element={<Experience/>}/>
  <Route path="/cert" element={<Certification/>}/>
  <Route path="/edu" element={<Education/>}/>
  </Routes>

  </>

  );
}

export default App;
