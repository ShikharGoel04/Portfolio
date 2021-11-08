import React from 'react';
import PHOTO from '../assets/PHOTO.jpg';
import logo from '../assets/logo.png';
import {Image,Container,Row,Col } from 'react-bootstrap';

export default function ImageDisp(){

    return (<Container >
<Row>
<Col sm-4> <img src={PHOTO} width='100' height='100' style={{marginTop:'2%',marginLeft:'2%'}}/>  <p><strong>Software Engineer</strong></p> </Col>
<Col sm-8>   <img src={logo}  width='70%'
        height='200' style={{marginLeft:'10%',marginTop:'-40%'}}   />       </Col>
 </Row>
 <Row>  


  </Row>
   </Container>)
}