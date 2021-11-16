import React from "react";
import { Link } from "react-router-dom";
import { Navbar,Nav,NavDropdown,Container,Row } from "react-bootstrap";
export default function Header(){

    return(<Container>
    
            
    <div style={{marginTop:'0%'}}>
       
    <Navbar  collapseOnSelect bg="light" expand="lg" className="nav-display" >
  
    
    <Navbar.Brand href="#home" className=" nav-item-display"><Link to="/"><strong>Shikhar</strong></Link></Navbar.Brand>
   
    <Nav.Link className=" nav-item-display"><Link to="/about"><strong>About</strong></Link></Nav.Link>
        <Nav.Link className=" nav-item-display"><Link to="/exp"><strong>Experience</strong></Link></Nav.Link>
        <Nav.Link className=" nav-item-display"><Link to="/cert"><strong>Certification</strong></Link></Nav.Link>
        <Nav.Link className=" nav-item-display"><Link to="/edu"><strong>Education</strong></Link></Nav.Link>
        <Nav.Link className=" nav-item-display"><Link to="/extra"><strong>Extra-Curricular Activites</strong></Link></Nav.Link>
       
       
   
      
     

  
</Navbar>
</div>
    </Container>)
}