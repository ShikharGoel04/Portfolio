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
import Timeline from './components/TimelineContainer';
import ExtraCurricular from './components/ExtraCurricular';
import {useWindowSize} from '@react-hook/window-size';
function App() {
  const [width,height]  = useWindowSize()
  console.log("width",width);
  return (
    <div className="flex-portfolio" >
      
   {width>768&&
   <>
   <div className="image-container">
      <div className="img-left">
      <img src={PHOTO} width='100' height='100'/>  <p><strong>Shikhar Goel (Software Engineer)</strong></p> 
        </div>
        <div className="img-right" >
        <img src={logo}  width='700' 
      height='150' />
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
<Route path="/extra" element={<ExtraCurricular/>}/>

</Routes>
</div>
<div className="flex-timeline">
  <Timeline/>
  </div>
</div>
<div className="footer">
<Footer/>
</div>
</>}
{
  width<=768
  &&

  <>
 
   <div className="flex-container-mobile">
     <div className="flex-item-top">
 
 </div>
 <div className="flex-item-bottom">
 <Routes>
<Route exact path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/exp" element={<Experience/>}/>
<Route path="/cert" element={<Certification/>}/>
<Route path="/edu" element={<Education/>}/>
<Route path="/extra" element={<ExtraCurricular/>}/>

</Routes>
</div>

</div>
<div className="footer">
<Footer/>
</div>
</>

}
  </div>

  );
}

export default App;
