import React from 'react';
import Header from './Header';
import About from './Aboutme';
import Experience from './Experience';
import { Route,Routes } from 'react-router-dom';
import Certification from './Certification';
import Education from './Education';
export default function Home(){

    return (
        < div className="flex-home">
    <div className="flex-home-item" >
    <About />
    </div>
    <div className="flex-home-item" >
    <Experience/>
    </div>
    <div className="flex-home-item" >
    <Certification/>
    </div>
    <div className="flex-home-item" >
    <Education/>
    </div>
        </div>
    
    )
}