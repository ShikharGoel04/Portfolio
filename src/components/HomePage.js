import React from 'react';
import Header from './Header';
import About from './Aboutme';
import Experience from './Experience';
import { Route,Routes } from 'react-router-dom';
import Certification from './Certification';
export default function Home(){

    return (
        <>
    
    <About/>
    <Experience/>
    <Certification/>
        </>
    
    )
}