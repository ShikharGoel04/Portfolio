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
        <Nav.Link className="nav-item-display">Education</Nav.Link>
       
        </Nav>
   
        <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="nav-item-display" >
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
     

  
</Navbar>
</div>
    </>)
}