import React from 'react';
import Header from './Header';
import About from './Aboutme';
import Experience from './Experience';
import { Route,Routes } from 'react-router-dom';
import Certification from './Certification';
import Education from './Education';
export default function Home(){

    return (
        < div>
    
    <About/>
    <div style={{marginTop:'15%'}} >
    <Experience/>
    </div>
    <div style={{marginTop:'15%'}} >
    <Certification/>
    </div>
    <div style={{marginTop:'15%'}} >
    <Education/>
    </div>
        </div>
    
    )
}