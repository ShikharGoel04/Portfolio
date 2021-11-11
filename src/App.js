import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/HomePage';
import About from './components/Aboutme';
import Header from './components/Header';
import Certification from './components/Certification';
import Experience from './components/Experience';
import Education from './components/Education';
import PHOTO from './assets/PHOTO.jpg';
import logoImg from './assets/logoImg.png';
import Footer from './components/Footer';
function App() {
  return (
    <div className="flex-portfolio" style={{backgroundColor:'lightcyan'}}>
      <div className="image-container">
        <div className="img-left">
        <img src={PHOTO} width='100' height='100'/>  <p><strong>Shikhar Goel (Software Engineer)</strong></p> 
          </div>
          <div className="img-right">
          <img src={logo}  width='70%'
        height='200' />
          </div>
        </div>
      <div className="flex-container">
        <div className="flex-item-left">
    <Header/>
    </div>
    <div className="flex-item-right">
    <Routes>
  <Route exact path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/exp" element={<Experience/>}/>
  <Route path="/cert" element={<Certification/>}/>
  <Route path="/edu" element={<Education/>}/>
  </Routes>
  </div>
</div>
<div className="footer">
  <Footer/>
  </div>
  </div>


  );
}

export default App;
