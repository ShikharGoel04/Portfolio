import React from "react";
import { Link } from "react-router-dom";
import { Navbar,Nav,NavDropdown,Container } from "react-bootstrap";
export default function Header(){

    return(<>
    
    <div style={{marginTop:'5%',marginLeft:'20%'}}>
    <Navbar collapseOnSelect bg="light" expand="lg" className="nav-display">
  
    
    <Navbar.Brand href="#home" className="nav-item-display"><Link to="/">Shikhar</Link></Navbar.Brand>
   
      <Nav>
        <Nav.Link className="nav-item-display"><Link to="/exp">Experience</Link></Nav.Link>
        <Nav.Link className="nav-item-display"><Link to="/cert">Certification</Link></Nav.Link>
        <Nav.Link className="nav-item-display"><Link to="/edu">Education</Link></Nav.Link>
       
        </Nav>
   
      
     

  
</Navbar>
</div>
    </>)
}