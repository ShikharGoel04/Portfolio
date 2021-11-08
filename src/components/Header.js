import React from "react";
import { Navbar,Nav,NavDropdown,Container } from "react-bootstrap";
export default function Header(){

    return(<>
    <h1>Portfolio</h1>
    <div  >
    <Navbar collapseOnSelect bg="light" expand="lg" className="nav-display">
  
    
    <Navbar.Brand href="#home" className="nav-item-display">Shikhar</Navbar.Brand>
   
      <Nav>
        <Nav.Link className="nav-item-display" href="#home">Experience</Nav.Link>
        <Nav.Link className="nav-item-display"  href="#link">Education</Nav.Link>
        <Nav.Link className="nav-item-display"  href="#link">Certification</Nav.Link>
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