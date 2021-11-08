import React from 'react';
import Header from './Header';
import About from './Aboutme';
import { Route,Routes } from 'react-router-dom';
export default function Home(){

    return (
        <>
    <Header/>
    <About/>
        </>
    
    )
}