import React from "react";
import { Link } from "react-router-dom";
import { Navbar,Nav,NavDropdown,Container,Row } from "react-bootstrap";
import ImageDisp from "./Image";
export default function Header(){

    return(<Container>
        <Row>
    <div  style={{marginLeft:'10%',marginTop:'0%'}}>
            <ImageDisp/>
            </div>
            </Row>
            
    <div style={{marginTop:'0%',marginLeft:'-10%'}}>
       
    <Navbar  collapseOnSelect bg="light" expand="lg" className="nav-display" >
  
    
    <Navbar.Brand href="#home" className=" nav-display nav-item-display"><Link to="/"><strong>Shikhar</strong></Link></Navbar.Brand>
   
      <Nav>
        <Nav.Link className="nav-display nav-item-display"><Link to="/exp"><strong>Experience</strong></Link></Nav.Link>
        <Nav.Link className="nav-display nav-item-display"><Link to="/cert"><strong>Certification</strong></Link></Nav.Link>
        <Nav.Link className="nav-display nav-item-display"><Link to="/edu"><strong>Education</strong></Link></Nav.Link>
       
        </Nav>
   
      
     

  
</Navbar>
</div>
    </Container>)
}