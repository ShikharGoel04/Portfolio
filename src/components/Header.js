import React from "react";
import { Link } from "react-router-dom";
import { Navbar,Nav,NavDropdown,Container,Row } from "react-bootstrap";
import {useWindowSize} from '@react-hook/window-size';

export default function Header(){

    const [width,height]  = useWindowSize()
    return(<Container>
    
            
    {width>768 && <div style={{marginTop:'0%'}}>
       
    <Navbar  collapseOnSelect bg="light" expand="lg" className="nav-display" >
  
    
    <Navbar.Brand href="#home" className=" nav-item-display"><Link to="/"><strong>Shikhar</strong></Link></Navbar.Brand>
   
    <Nav.Link className=" nav-item-display"><Link to="/about"><strong>About</strong></Link></Nav.Link>
        <Nav.Link className=" nav-item-display"><Link to="/exp"><strong>Experience</strong></Link></Nav.Link>
        <Nav.Link className=" nav-item-display"><Link to="/cert"><strong>Certification</strong></Link></Nav.Link>
        <Nav.Link className=" nav-item-display"><Link to="/edu"><strong>Education</strong></Link></Nav.Link>
        <Nav.Link className=" nav-item-display"><Link to="/extra"><strong>Extra-Curricular Activites</strong></Link></Nav.Link>
       
       
   
      
     

  
</Navbar>
</div>}

{
    width<=768 && <div style={{marginTop:'0%'}}>
       
    <Navbar collapseOnSelect fixed="top" bg="light" expand="lg" className="nav-display-mobile" >
        <Container>
        <Navbar.Toggle aria-controle='responsive-navbar-nav'/>
  <Navbar.Collapse id='responsive-navbar-nav'>
    <Nav>
    <Navbar.Brand href="#home" className=" nav-item-display"><Link to="/"><strong>Shikhar</strong></Link></Navbar.Brand>
   
    <Nav.Link className=" nav-item-display-mobile"><Link to="/about"><strong>About</strong></Link></Nav.Link>
        <Nav.Link className=" nav-item-display-mobile"><Link to="/exp"><strong>Experience</strong></Link></Nav.Link>
        <Nav.Link className=" nav-item-display-mobile"><Link to="/cert"><strong>Certification</strong></Link></Nav.Link>
        <Nav.Link className=" nav-item-display-mobile"><Link to="/edu"><strong>Education</strong></Link></Nav.Link>
        <Nav.Link className=" nav-item-display-mobile"><Link to="/extra"><strong>Extra-Curricular Activites</strong></Link></Nav.Link>
       
       </Nav>
       </Navbar.Collapse>
       </Container>
   
      
     

  
</Navbar>
</div>
}
    </Container>)
}